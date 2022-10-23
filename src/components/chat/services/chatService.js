import apiService from "../../../helpers/apiService";

export default {
    fetchMessages: async (receiver)=>{
        const sender = localStorage.getItem("chatApp_Id");
        const url = "messages?sender="+sender+"&receiver="+receiver;
        const response = await apiService.get(url)
        return response;
    },
    sendMessage: async (receiver,message)=>{
        const sender = localStorage.getItem("chatApp_Id");
        const payload = {
            sender: {
                id: sender
            },
            receiver:{
                id: receiver
            },
            data: message
        }
        const response = await apiService.post("message",payload);
    }
}   