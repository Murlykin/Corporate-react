import axios from 'axios'

const backendAPI = axios.create({
    baseURL: 'http://localhost:4000/',
});

export const SendEmail =  async body => {
    const { data } = await backendAPI.post('api/help', body)
    return data
};
