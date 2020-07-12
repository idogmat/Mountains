import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/',
    headers: {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM1NCwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTQyNDEyMTAsImV4cCI6MTU5NDI0MTI3MCwibmJmIjoxNTk0MjQxMjEwLCJqdGkiOiJPeGNTaGdJRGtBa3E2TzdHIn0.4-MrfEH8vI3BxxfVE9PVZYsOemRRctbKpdlvdnX-jiE"
    }
})
export const getAPI = {
    getSkils() {
        return instance.get("/categories/354")
            .then(response => {
                return response.data;
            })
    },
    getWorks() {
        return instance.get("/works/354")
            .then(response => {
                return response.data;
            })
    }
}
    //не важно