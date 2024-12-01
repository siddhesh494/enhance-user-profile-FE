import { instance } from './helper';


export const getRecentlyViewedProduct = async (userID) => {
  const result = await instance.get(`/user/${userID}/recentlyViewed`, {}, {})
  return result.data && result.data.data
}

export const updateRecentlyViewProduct = async (body) => {
  const result = await instance.post(`/user/updateRecentlyViewProduct`, body, {})
  return result.data && result.data.data
}