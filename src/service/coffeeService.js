import axios from 'axios'

const BACKEND_URL = 'http://localhost:8081'

export async function getCoffeeList() {
    return axios.get(BACKEND_URL + "/coffee")
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
}