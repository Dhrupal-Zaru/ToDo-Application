
export default function getAuthHeaders() {

    const token = localStorage.getItem('token')
    return { 
        headers: { Authorization: token } 
    }
}