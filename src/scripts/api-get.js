import * as axios from "axios";
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE5LCJpc3MiOiJodHRwOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9yZWZyZXNoVG9rZW4iLCJpYXQiOjE2NjY4NzA5NTYsImV4cCI6MTY2Njk2MTcxMCwibmJmIjoxNjY2OTQzNzEwLCJqdGkiOiIwZmZycGJoWDVnUUtRUndzIn0.alWLE7g-WpEFKFaPkcP1GIJJk6ojTlKE36Id6_77jrE"
const instance = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/',
    headers: {
        "token": token.toString(),
        Authorization: `Bearer ${token}`}
})

export const getAPI = {
    refreshToken(){
    return instance.get("/refreshToken")
        .then(response => {
            // console.log(response.data.token)
            token = response.data.token;
        })
    },
    getUserId() {
        return instance.get("/user")
            .catch(err=>{
                this.refreshToken()
            })
            .then(response => {
                // console.log(response.data.user.id)
                return response.data.user.id;
            })
    },
   async getSkills() {
        return instance.get(`/categories/19`)
            .then(response => {
                // console.log(response.data)
                return response.data;
            })
    },
    async getWorks() {
        return instance.get(`/works/19`)
            .then(response => {
                return response.data;
            })
    },
    async getResponses() {
        return instance.get(`/reviews/19`)
            .then(response => {
                return response.data;
            })
    }
}
    //не важно