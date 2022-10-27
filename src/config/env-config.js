const API_HOST_LOCAL = "http://localhost:8080";
const API_HOST_LOCAL_SOCKET = "http://localhost:8085/";

export const serviceUrl = () => {
    return API_HOST_LOCAL
};

export const socketUrl = () => {
    return API_HOST_LOCAL_SOCKET
};
export const urls = {
    service: serviceUrl(),
    socketService: socketUrl()
};
