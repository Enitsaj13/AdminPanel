import axios from 'axios'

const instance = axios.create({
    baseURL: `${process.env.server_uri}/v1`,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
})

instance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    async (error) => {
        if (error.response.status !== 401) return Promise.resolve(error.response)

        const res = await instance.get('/auth/refresh')

        if (res.status === 200) {
            return error.response.config.method === 'get'
                ? instance.get(error.response.config.url)
                : instance.post(error.response.config.url, error.response.config.data)
        } else {
            return Promise.resolve(error.response)
        }
    }
)

export default instance
