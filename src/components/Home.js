import React, { useEffect, useState } from 'react'
import { getCookie } from '../utils/utils'
import { getAllProduct } from './../APIService/product'
import Card from './../utilities/Card'
import { isEmpty } from 'lodash'
import { getRecentlyViewedProduct } from '../APIService/user'


function Home({
  userDetails
}) {

  const [productList, setProductList] = useState([])
  const [recentlyViewedProduct, setRecentlyViewedProduct] = useState([])

  const checkUserToken = () => {
    try {
      const token = getCookie("auth")
      if(!token) {
        window.location = "/signIn"
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAllProductList = async () => {
    try {
      const response = await getAllProduct()
      if(response) {
        setProductList(response)
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  const getRecentlyViewedUserProduct = async (userID) => {
    try {
      const response = await getRecentlyViewedProduct(userID)
      if(response) {
        setRecentlyViewedProduct(response)
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    checkUserToken()
    getAllProductList()
  }, [])

  useEffect(() => {
    if(userDetails && userDetails.userID) {
      getRecentlyViewedUserProduct(userDetails.userID)
    }
  }, [userDetails])

  return (
    <div>

      <div className="bg-gray-900 p-6">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Recently Viewed Products</h1>
        
        <div className="overflow-x-auto">
          {/* Flex container to hold the cards, with proper spacing */}
          <div className="flex space-x-6 pb-6">
            {recentlyViewedProduct && !isEmpty(recentlyViewedProduct) ? (
              recentlyViewedProduct.map((product) => (
                <div className="flex-none w-60"> {/* Each card gets a fixed width */}
                  <Card
                    key={product.id}
                    image={product.image}
                    name={product.productName}
                    price={product.price}
                  />
                </div>
              ))
            ) : (
              <h3 className='text-white text-xl font-bold mb-6 text-center'>No Product</h3>
            )}
            
          </div>
        </div>
      </div>


      {/* all product list */}
      <div className="bg-gray-900 min-h-screen p-6">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">All Products List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.productName}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home