const config = require('../config/config');
const actions = require('../config/actions');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const Member = require("../models/member.model");
const mongoose = require('mongoose');
const { Corporate, User } = require('../models');

const hasPermission = (value) => async (req, res, next) => {
    try {
        if (req.token && req.token.sub.isAdmin) {
            if (req.token.sub.id === config.admin.email) {
                if (value.some(a => actions.adminActions.includes(a))) {
                    next();
                    return;
                }
            }
        } else {
            const isUser = await User.findById(req.token.sub.id);
            if (!isUser) {
                const isCorporate = await Corporate.findById(req.token.sub.id);
                if (!isCorporate) {
                    const user = await Member.aggregate([
                        [
                            {
                                $match: { _id: mongoose.Types.ObjectId(req.token.sub.id) }
                            },
                            {
                                $lookup: {
                                    from: "roles",
                                    localField: "role",
                                    foreignField: "_id",
                                    as: "role_info",
                                },
                            },
                            {
                                $unwind: "$role_info",
                            },
                            {
                                $project: {
                                    actions: '$role_info.actions',
                                }
                            }
                        ]
                    ])
                    console.log(user)
                    if (user && user.length) {
                        if (value.some(a => user[0].actions.includes(a))) {
                            next();
                            return;
                        }
                    }
                } else {
                    if (value.some(a => ['Corporate view'].includes(a))) {
                        next();
                        return;
                    }
                }
            } else {
                if (value.some(a => isUser?.actions.includes(a))) {
                    next();
                    return;
                }
            }

        }
        throw new ApiError(httpStatus.FORBIDDEN, 'No Access');
    } catch (error) {
        next(error);
    }
};

module.exports = hasPermission;