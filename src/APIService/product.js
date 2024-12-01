


import { instance } from './helper';


export const getAllProduct = async () => {
  const result = await instance.get('/product/getAll', {}, {})
  return result.data && result.data.data
}