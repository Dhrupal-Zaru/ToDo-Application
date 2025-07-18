import axios from "axios"
import getAuthHeaders from "./getAuthHeaders";

const BASE_URL = 'https://todo-app-backend-5u7a.onrender.com';


    export async function getTasks () {
        try{
            const res = await axios.get(`${BASE_URL}/tasks/get`, getAuthHeaders());
            // console.log(res.data)
            return res.data;
    
        } catch(err){
            alert(err.response.data.message || 'Error while fetching tasks!');
            console.log(err.response.data.message);
        }
    }
    export async function addTask(title){
        try{
            await axios.post(`${BASE_URL}/tasks/create`, {title}, getAuthHeaders());
    
        } catch(err){
            alert(err.response.data.message || 'Error while adding task!');
            console.log(err.response.data.message);
        }
    }
    export async function updateTask(id){
        try{
            await axios.put(`${BASE_URL}/tasks/update/${id}`,{}, getAuthHeaders());
    
        } catch(err){
            alert(err.response.data.message || 'Error while updating task!');
            console.log(err.response.data.message);
        }
    }
    export async function deleteTask(id){
        try{
            await axios.delete(`${BASE_URL}/tasks/delete/${id}`,getAuthHeaders());
    
        } catch(err){
            alert(err.response.data.message || 'Error while deleting task!');
            console.log(err.response.data.message);
        }
    }


