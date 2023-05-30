import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const VehicleCreate = () => {

  const navigate = useNavigate();

  const [name, setNama] = React.useState("");
  const [color, setColor] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "vehicle"), {
        name,
        color,
        price,
      });
      navigate("/vehicle");
      MySwal.fire({
        icon: 'success',
        title: 'Data submitted successfully',
        text: `Your data has been submitted successfully`,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };




  return (
    <div className="m-10">
      <div className="py-4">
        <h1 className="mb-3 text-5xl font-semibold text-white">Create Vehicle</h1>
        <Link to="/vehicle" className="">
          <div className="flex items-center">
            <svg className="w-10 rounded-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow / Chevron_Left">
                <path id="Vector" d="M15 19L8 12L15 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
            <p className="text-white">Kembali</p>
          </div>
        </Link>
      </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setNama(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 max-md:w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Color"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Color
          </label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 max-md:w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 max-md:w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-yellow-500 btn hover:bg-yellow-600"
        >
          Create Data
        </button>
      </form>
    </div>
  );
};

export default VehicleCreate;
