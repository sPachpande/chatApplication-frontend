import apiService from "../../../helpers/apiService";

export default {
    fetchAll: async () => {
        const response = await apiService.get('users');
        return response.data;
    }
}   