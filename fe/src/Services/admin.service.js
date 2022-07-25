import api from "./api";

const AdminService = {
    getUsers() {
        return api.get("/admin/get-users");
    },
    getUserActions() {
        return api.get("/admin/get-user-actions");
    },
    createRole(data) {
        return api.post("/admin/create-role", data);
    },
    getRoles() {
        return api.get("/admin/get-roles");
    },
    getRoleById(id) {
        return api.get(`/admin/get-role/${id}`);
    },
    editRole(data) {
        return api.put("/admin/edit-role", data);
    },
    createMember(data) {
        return api.post("/admin/create-member", data);
    },
    createCXO(data) {
        return api.post("/admin/create-cxo", data);
    },
    createpromotion(data) {
        return api.post("/admin/create-promotion", data);
    },
    deletepromotion(id) {
        return api.delete(`/admin/delete-promotion/${id}`);
    },
    approvepromotion(data) {
        return api.put("/admin/approve-promotion", data);
    },
    managePromotions() {
        return api.get("/admin/manage-promotions");
    },
    getPromotions() {
        return api.get("/admin/get-promotions");
    },
    getMembers() {
        return api.get("/admin/get-members");
    },
    getMemberById(id) {
        return api.get(`/admin/get-member/${id}`);
    },
    editMember(data) {
        return api.put("/admin/edit-member", data);
    },
    approveUser(data) {
        return api.post("/admin/approve-user", data);
    },
    blockUser(data) {
        return api.post("/admin/block-user", data);
    },
    assignManager(data) {
        return api.post("/admin/assign-manager", data);
    },
    createProfile(data) {
        return api.post("/admin/create-profile", data);
    },
    getProfile(id) {
        return api.get(`/admin/get-profile/${id}`);
    },
    getAssignedUsers() {
        return api.get("/admin/get-assigned-users");
    },
    approveCorporate(data) {
        return api.post("/admin/approve-corporate", data);
    },
    blockCorporate(data) {
        return api.post("/admin/block-corporate", data);
    },
    assignManagerForCorporate(data) {
        return api.post("/admin/assign-manager-for-corporate", data);
    },
    getAssignedCorporates() {
        return api.get("/admin/get-assigned-corporates");
    },
    getCorporates() {
        return api.get("/admin/get-corporates");
    },
    createCorporateProfile(data) {
        return api.post("/admin/create-corporate-profile", data);
    },
    getCorporateProfile(id) {
        return api.get(`/admin/get-corporate-profile/${id}`);
    },
}

export default AdminService;