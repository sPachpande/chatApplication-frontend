import apiService from "../../../helpers/apiService";

export default {
    fetchAll: async () => {
        const response = await apiService.get(`users`);
        console.log(response.data);
        return response.data;
    }
}   