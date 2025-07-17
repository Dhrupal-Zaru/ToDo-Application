import axios from "axios"
import getAuthHeaders from "./getAuthHeaders";

export async function signUp(data){
    try {
        await axios.post('/users/signup', data);

    } catch (err) {
        alert(err.response.data.message ||'Error while register user!');
        console.log(err.response.data.message);
    }
}
export async function login(data){
    try {
        const res = await axios.post('/users/login', data);
        localStorage.setItem('token', res.data.token);
        return res.data;

    } catch (err) {
        throw err;
    }

}
export async function getUser(){
    try{
        const res = await axios.get('/users/user', getAuthHeaders());
        console.log("data user", res.data)
        return res.data;
    }catch (err) {
        alert(err.response.data.message || 'Error while finding user!');
        console.log(err.response.data.message);
    }
}
