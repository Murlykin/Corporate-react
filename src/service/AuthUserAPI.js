import axios from 'axios'

const backendAPI = axios.create({
    baseURL: 'http://localhost:4000/',
});

export const SendEmail =  async body => {
    const { data } = await backendAPI.post('api/help', body)
    return data
};
export async function fetchContacts() {
    const response = await axios.get(`/contacts`);
    return response.data;
}

export const AddBoard = async task => {
    const { data } = await backendAPI.post('api/boards', task);

    return data;
};