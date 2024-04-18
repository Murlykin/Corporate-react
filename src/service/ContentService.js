import axios from 'axios'

const backendAPI = axios.create({
  baseURL: 'http://localhost:4000',
})

export const SendEmail = async email => {
  return await backendAPI.post('/api/help', email)

}


export const AddBoard = async task => {
  const { data } = await backendAPI.post('api/boards', task);

  return data;
};