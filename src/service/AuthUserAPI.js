import axios from 'axios'

const backendAPI = axios.create({
    baseURL: 'https://back-email.onrender.com',
});

export const SendEmail =  async body => {
    const { data } = await backendAPI.post('api/help', body)
    return data
};
