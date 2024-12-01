import { instance } from './helper';


export const getAllUserService = async () => {
  const result = await instance.post('/users/get', {name: "sid"}, {})
  return result.data && result.data.data
}