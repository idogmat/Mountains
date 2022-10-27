import * as axios from "axios";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE5LCJpc3MiOiJodHRwOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9sb2dpbiIsImlhdCI6MTY2Njg3MDk1NiwiZXhwIjoxNjY2ODg4OTU2LCJuYmYiOjE2NjY4NzA5NTYsImp0aSI6IkhZOGZTbUZNdmJVMnc2YzMifQ.PSULWFph5WoAZnAUqaUJaOlanVClOK5IMWDmGoIS-ow"
const instance = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/',
    headers: {
        "token": token.toString(),
        Authorization: `Bearer ${token}`}
})

export const getAPI = {
    getUserId() {
        return instance.get("/user")
            .then(response => {
                console.log(response.data.user.id)
                return response.data.user.id;
            })
    },
   async getSkills() {
        return instance.get(`/categories/${await this.getUserId()}`)
            .then(response => {
                console.log(response.data)
                return response.data;
            })
    },
    async getWorks() {
        return instance.get(`/works/${await this.getUserId()}`)
            .then(response => {
                return response.data;
            })
    }
}
    //не важно