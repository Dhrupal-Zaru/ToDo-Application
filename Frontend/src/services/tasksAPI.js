import axios from "axios"
import getAuthHeaders from "./getAuthHeaders";

    export async function getTasks () {
        try{
            const res = await axios.get('/tasks/get', getAuthHeaders());
            // console.log(res.data)
            return res.data;
    
        } catch(err){
            alert(err.response.data.message || 'Error while fetching tasks!');
            console.log(err.response.data.message);
        }
    }
    export async function addTask(title){
        try{
            await axios.post('/tasks/create', {title}, getAuthHeaders());
    
        } catch(err){
            alert(err.response.data.message || 'Error while adding task!');
            console.log(err.response.data.message);
        }
    }
    export async function updateTask(id){
        try{
            await axios.put(`/tasks/update/${id}`,{}, getAuthHeaders());
    
        } catch(err){
            alert(err.response.data.message || 'Error while updating task!');
            console.log(err.response.data.message);
        }
    }
    export async function deleteTask(id){
        try{
            await axios.delete(`/tasks/delete/${id}`,getAuthHeaders());
    
        } catch(err){
            alert(err.response.data.message || 'Error while deleting task!');
            console.log(err.response.data.message);
        }
    }


