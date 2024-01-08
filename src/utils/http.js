import axios from "axios"

export const http = axios.create({
    baseURL: "https://frontend.njit.ut-idb.com",
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})
