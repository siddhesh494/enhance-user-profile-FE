import { instance } from './helper';


export const verifyJWTToken = async () => {
  const result = await instance.get('/auth/verifyJWTToken', {}, {})
  return result.data && result.data.data
}


export const signUp = async (body) => {
  const result = await instance.post('/auth/signUp', body, {})
  return result.data && result.data.data
}

export const signIn = async (body) => {
  const result = await instance.post('/auth/login', body, {})
  return result.data && result.data.data
}