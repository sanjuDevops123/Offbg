const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    password: {
        type: String,
        required: true
      },
    profileUrl: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('find', { query: true }, populateFinds);
function populateFinds(next) {
  this.populate({
    path: 'connections',
    model: 'User',
    select: '_id name email'
  });
  this.populate({
    path: 'pending',
    model: 'User',
    select: '_id name email'
  });
  next();
}


userSchema.statics.isEmailTaken = async function (email) {
  const user = await this.findOne({ email });
  return !!user;
};

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;