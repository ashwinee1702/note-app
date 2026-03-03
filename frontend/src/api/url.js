import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "https://note-app-5sub.onrender.com/api/v1/noteapp/"
})

export default BACKEND_URL