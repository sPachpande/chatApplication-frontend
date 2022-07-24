import axios from "axios";
import {urls} from "../config/env-config";

const tokenKey = 'chatApp_token';
const chatAppUsername = 'chatApp_username';

export const authHeader = () => {
    return {
        headers: {
            Authorization: 'Basic ' + localStorage.getItem(tokenKey)
        }
    };
}

export const authJSONHeader = () => {
    return {
        headers: {
            Authorization: 'Basic ' + localStorage.getItem(tokenKey),
            'Content-Type' : 'application/json'
        }
    };
}

export const login = async (username, password) => {
    const token = authBasic(username, password);
    const config = {
        headers: {
            Authorization: 'Basic ' + token
        }
    };
    const response = await axios.get(`${urls.service}/login`, config);
    const userDetails = response.data;
    localStorage.setItem(tokenKey, token)
    localStorage.setItem(chatAppUsername, username);
    return userDetails;
}

export const isLoggedIn = () => {
    return localStorage.getItem(tokenKey) !== null;
}

export const logout = () => {
    localStorage.removeItem(tokenKey);
};

export const username = () => {
    return localStorage.getItem(chatAppUsername);
}

const authBasic = (username, password) => {
    return window.btoa(username + ':' + password);
}