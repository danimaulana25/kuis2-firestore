import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { app, db } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

const Dashboard = () => {
  // const [banks, setBanks] = React.useState([]);
  // const [brands, setBrand] = React.useState([]);
  // const [category, setCategory] = React.useState([]);
  // const [vehicle, setVehicle] = React.useState([]);

  // React.useEffect(() => {
  //   const bnk = onSnapshot(collection(db, "banks"), (snapshot) => {
  //     setBanks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });

  //   const brn = onSnapshot(collection(db, "brands"), (snapshot) => {
  //     setBrand(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });

  //   const ctg = onSnapshot(collection(db, "category"), (snapshot) => {
  //     setCategory(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });

  //   const vhc = onSnapshot(collection(db, "vehicle"), (snapshot) => {
  //     setVehicle(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });
  // }, []);
  return (
    <>

      <div className="max-h-screen ">
        <h1 className="my-6 text-5xl font-bold text-center text-white">KUIS 2 COK</h1>
        <div className="grid content-center grid-cols-2 gap-4">
          <div className='flex flex-col items-center justify-cente r '>
            <Link to={'/vehicle'} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-500 ease-out  rounded-lg shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-[#2C74B3] group-hover:translate-x-0 ease">
                <div className="flex flex-col items-center justify-center">
                  {/* <p className="text-3xl font-semibold text-gray-100 ">Amount ({vehicle.length})</p> */}
                  <svg class="w-6 h-6 text-gray-100 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-gray-100 transition-all duration-500 transform group-hover:translate-x-full ease">
                <div className='flex flex-col'>
                  <img src="https://ik.imagekit.io/siapahayo/car-insurance.png?updatedAt=1685348336049" className='w-40' alt="My Image" />
                  <p className="text-4xl font-semibold ">Vehicles</p>
                </div>
              </span>
              <span class="relative invisible">
                <div className='flex flex-col'>
                  <img src="https://ik.imagekit.io/siapahayo/car-insurance.png?updatedAt=1685348336049" className='w-40' alt="My Image" />
                  <p className="text-4xl font-semibold ">Vehicles</p>
                </div>
              </span>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <Link to={'/brands'} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-500 ease-out  rounded-lg shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-[#2C74B3] group-hover:translate-x-0 ease">
                <div className="flex flex-col items-center justify-center">
                  {/* <p className="text-3xl font-semibold text-gray-100 ">Amount ({brands.length})</p> */}
                  <svg class="w-6 h-6 text-gray-100 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-gray-100 transition-all duration-500 transform group-hover:translate-x-full ease">
                <div className='flex flex-col'>
                  <img src="https://ik.imagekit.io/siapahayo/supermarket.png?updatedAt=1685348335995" className='w-40' alt="My Image" />
                  <p className="text-4xl font-semibold ">Brands</p>
                </div>
              </span>
              <span class="relative invisible">
                <div className='flex flex-col'>
                  <img src="https://ik.imagekit.io/siapahayo/supermarket.png?updatedAt=1685348335995" className='w-40' alt="My Image" />
                  <p className="text-4xl font-semibold ">Brands</p>
                </div>
              </span>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <Link to={'/banks'} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-500 ease-out  rounded-lg shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-[#2C74B3] group-hover:translate-x-0 ease">
                <div className="flex flex-col items-center justify-center">
                  {/* <p className="text-3xl font-semibold text-center text-gray-100 ">Amount ({banks.length})</p> */}
                  <svg class="w-6 h-6 text-gray-100 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-gray-100 transition-all duration-500 transform group-hover:translate-x-full ease">
                <div className='flex flex-col'>
                  <img src="https://ik.imagekit.io/siapahayo/bank.png?updatedAt=1685348336089" className='w-40' alt="My Image" />
                  <p className="text-4xl font-semibold text-center">Banks</p>
                </div>
              </span>
              <span class="relative invisible">
                <div className='flex flex-col'>
                  <img src="https://ik.imagekit.io/siapahayo/bank.png?updatedAt=1685348336089" className='w-40' alt="My Image" />
                  <p className="text-4xl font-semibold ">Banks</p>
                </div>
              </span>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <Link to={'/category'} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-500 ease-out  rounded-lg shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-[#2C74B3] group-hover:translate-x-0 ease">
                <div className="flex flex-col items-center justify-center">
                  {/* <p className="text-3xl font-semibold text-gray-100 ">Amount ({category.length})</p> */}
                  <svg class="w-6 h-6 text-gray-100 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-gray-100 transition-all duration-500 transform group-hover:translate-x-full ease">
                <div className='flex flex-col'>
                  <img src="https://ik.imagekit.io/siapahayo/menu.png?updatedAt=1685348335974" className='w-40' alt="My Image" />
                  <p className="text-4xl font-semibold ">Categories</p>
                </div>
              </span>
              <span class="relative invisible">
                <div className='flex flex-col'>
                  <img src="https://ik.imagekit.io/siapahayo/menu.png?updatedAt=1685348335974" className='w-40' alt="My Image" />
                  <p className="text-4xl font-semibold ">Categories</p>
                </div>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard