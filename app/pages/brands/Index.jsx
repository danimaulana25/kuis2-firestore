import React from "react";
import { app, db } from "../../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const BrandsIndex = () => {
  const [brands, setBrand] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    const brn = onSnapshot(collection(db, "brands"), (snapshot) => {
      setBrand(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    });
    return brn;
  }, []);

  console.log(brands);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'brands', id));
      MySwal.fire({
        icon: 'success',
        title: 'Data deleted successfully',
        text: `Your data has been deleted successfully`,
      });
    } catch (error) {
      console.log(error);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="relative p-5 overflow-x-auto">
      <div className="flex items-center justify-between mb-11">
        <h1 className="text-5xl font-semibold text-white">List Brands</h1>
        <Link to="/brands/create" className="btn text-black bg-[#F9D949] hover:bg-[#F7C04A]">Create New</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th className="bg-[#144272] text-white">No</th>
              <th className="bg-[#144272] text-white">Name</th>
              <th className="bg-[#144272] text-white">Tahun</th>
              <th className="bg-[#144272] text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <tr>
              <td colSpan={5} className="py-10 text-center bg-[#FFFBEB]">
                <div role="status">
                  <svg aria-hidden="true" class="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </td>
            </tr> : brands.map((brand, index) => (
              <tr key={index}>
                <th className="bg-[#FFFBEB]">{index + 1}</th>
                <td className="bg-[#FFFBEB]">{brand.name}</td>
                <td className="bg-[#FFFBEB]">{brand.tahun}</td>
                <td className="bg-[#FFFBEB]">
                  <Link
                    to={`/brands/edit/${brand.id}`}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(brand.id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {(brands.length === 0 && !isLoading) && <tr>
              <td colSpan={4} className="bg-[#FFFBEB] font-semibold text-xl
              ">No data.</td>
            </tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandsIndex;
