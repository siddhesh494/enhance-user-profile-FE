import React from "react";

export default function Modal({
  showModal,
  setShowModal,
  ModalHTML,
  heading="Default Heading",
  handleOnClose = () => {},
  data
}) {

  return (
    <>
      {showModal ? (
        <>
          <div
            className="dark:text-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[90%]  my-6 mx-auto max-w-3xl max-h-[90%]">
              
              <div className="dark:bg-black border dark:border-blue-700  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-[90%]">
                
                 {/* heading */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="sub-heading text-2xl font-semibold">
                    {heading}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleOnClose}
                  >
                    <span className="dark:text-white bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> 

                {/* body */}
                <div className="relative p-6 flex-auto ">
                  <ModalHTML 
                    data = {data}
                  />
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}