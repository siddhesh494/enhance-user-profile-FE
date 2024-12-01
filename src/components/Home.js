import React, { useEffect, useState } from 'react'
import { getCookie } from '../utils/utils'
import { getAllProduct } from './../APIService/product'
import Card from './../utilities/Card'
import { isEmpty } from 'lodash'
import { getRecentlyViewedProduct, updateRecentlyViewProduct } from '../APIService/user'
import Modal from '../utilities/Modal'


function Home({
  userDetails
}) {

  const [productList, setProductList] = useState([])
  const [recentlyViewedProduct, setRecentlyViewedProduct] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({})

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

  const addRecentlyViewedUserProduct = async (data) => {
    try {
      console.log(data.id)

      const response = await updateRecentlyViewProduct({
        productID: data.id
      })
      console.log("response", response)
      userDetails?.userID && await getRecentlyViewedUserProduct(userDetails.userID)
    } catch (error) {
      console.log(error)
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

  const handleOnClose = () => {
    setModalData({})
    setShowModal(false)
  }

  const ModalHTML = ({data}) => (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={data.image}
        alt={data.productName}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-white mb-2">{data.productName}</h2>
        <p className="text-green-400 text-lg font-semibold">${data.price}</p>
      </div>
    </div>
  )

  return (
    <div>

      <Modal
        showModal={showModal}
        heading={"heyy"}
        ModalHTML={ModalHTML}
        handleOnClose={handleOnClose}
        data={modalData}
      />

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
            <div
              className='cursor-pointer flex-none'
              onClick={() => {
                setModalData(product)
                setShowModal(true)
                addRecentlyViewedUserProduct(product)
              }}
            >

            <Card
              key={product.id}
              image={product.image}
              name={product.productName}
              price={product.price}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home