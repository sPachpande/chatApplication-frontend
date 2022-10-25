import apiService from "../../../helpers/apiService";

export default {
    register: async (data)=>{
        
        const payload = {
            username : data.get('username'),
            password : data.get('password')
        }
        const response = await apiService.postWithNoAuth("users",payload);
        return response;
    }
}   