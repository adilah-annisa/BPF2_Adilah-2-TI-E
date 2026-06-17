import axios from 'axios'

const API_URL = "https://ysqixhmajqbbomuzepwv.supabase.co/rest/v1/login"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcWl4aG1hanFiYm9tdXplcHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYyNDgsImV4cCI6MjA5NzIxMjI0OH0.NYRFTlY5dpJSJYRMQaHrn8Ix4VhzdtxrhoiPLNzM9ZM"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const loginAPI = {
    async fetchUsers() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async fetchUserByEmail(email) {
        const response = await axios.get(`${API_URL}?email=eq.${encodeURIComponent(email)}`, { headers })
        return response.data
    },

    async createUser(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteUser(user) {
        const filter = user?.id
            ? `id=eq.${user.id}`
            : `email=eq.${encodeURIComponent(user.email)}`
        await axios.delete(`${API_URL}?${filter}`, { headers })
    },
}
