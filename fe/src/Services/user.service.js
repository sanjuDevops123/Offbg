import api from './api';

const UserService  = {
    getUserinfo() {
        return api.get("/user/userinfo");
    },
    getJobs() {
        return api.get("/user/get-jobs");
    },
    getConnections() {
        return api.get("/user/get-connections");
    },
    getUserProfile() {
        return api.get("/user/get-user-profile");
    },
    getCorporateProfile() {
        return api.get("/user/get-corporate-profile");
    },
    editUserProfile(data) {
        return api.put("/user/edit-user-profile", data);
    },
    editCorporateProfile(data) {
        return api.put("/user/edit-corporate-profile", data);
    },
    getALLJobs() {
        return api.get("/user/get-all-jobs");
    },
    createJob(data) {
        return api.post("/user/create-job", data);
    },
    createEvent(data) {
        return api.post("/user/create-event", data);
    },
    getEvents() {
        return api.get("/user/get-events");
    },
    getPromotions() {
        return api.get("/user/get-promotions");
    },
    getJobById(id) {
        return api.get(`/user/get-job/${id}`);
    },
    editJob(data) {
        return api.put("/user/edit-job", data);
    },
    getCompanyById(id) {
        return api.get(`/user/get-company/${id}`);
    },
    getCandidateById(id) {
        return api.get(`/user/get-candidate/${id}`);
    },
    getPosts() {
        return api.get("/user/get-posts");
    },
    createPost(data) {
        return api.post("/user/create-post", data);
    },
    createLike(data) {
        return api.post("/user/create-like", data);
    },
    createComment(data) {
        return api.post("/user/create-comment", data);
    },
    getCurrentCandidate() {
        return api.get(`/user/get-current-candidate`);
    },
    addFriend(data) {
        return api.post("/user/add-friend", data);
    },
    unFriend(data) {
        return api.post("/user/unfriend", data);
    },
    acceptFriend(data) {
        return api.post("/user/accept-friend", data);
    },
    rejectFriend(data) {
        return api.post("/user/reject-friend", data);
    },
    checkIsFriend(data) {
        return api.post("/user/check-is-friend", data);
    },

    acceptCandidate(data) {
        return api.post("/user/accept-candidate", data);
    },
    applyJob(data) {
        return api.post("/user/apply-job", data);
    },
    rejectCandidate(data) {
        return api.post("/user/reject-candidate", data);
    },
    checkIsApplied(id) {
        return api.get(`/user/check-is-applied/${id}`);
    },
    withdrawJobRequest(data) {
        return api.post("/user/withdraw-job-request", data);
    },
    getJobInfoByCorporate(id) {
        return api.get(`/user/get-job-info-by-corporate/${id}`);
    },

    getAppliedjobsByCandidate() {
        return api.get(`/user/get-applied-jobs-by-candidate`);
    },
    getConvs() {
        return api.get(`/user/get-convs`);
    },

}

export default UserService;