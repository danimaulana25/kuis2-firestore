import React from 'react'
import { db } from '@/app/firebase'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const BanksEdit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setNama] = React.useState("");
    const [nomorRekening, setnomorRekening] = React.useState("");

    React.useEffect(() => {
        const fetchItem = async () => {
            const docRef = doc(db, "banks", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNama(docSnap.data().name);
                setnomorRekening(docSnap.data().nomorRekening);
            } else {
                console.log("No such document!");
            }
        };
        if (id) {
            fetchItem();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await updateDoc(doc(db, "banks", id), {
                name,
                nomorRekening,
            });
            MySwal.fire({
                icon: 'success',
                title: 'Data submitted successfully',
                text: `Your data has been submitted successfully`,
            });
            navigate("/banks");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            // console.error("Error adding document: ", e);
            // MySwal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            // });
        }
    };
    return (
        <div className="m-10">
            <div className="py-4">
                <Link to="/banks">
                    <div className="flex items-center">
                        <svg className="w-10 rounded-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Arrow / Chevron_Left">
                                <path id="Vector" d="M15 19L8 12L15 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <p className="text-white">Kembali</p>
                    </div>
                </Link>
                <h1 className="mt-3 text-5xl font-semibold text-white">Update {name}</h1>
            </div>
            <form>
                <div className="mb-6">
                    <label
                        htmlFor="nama"
                        className="block mb-2 text-sm font-medium text-gray-100 "
                    >
                        Nama
                    </label>
                    <input
                        type="text"
                        name="nama"
                        id="nama"
                        placeholder="Nama"
                        value={name}
                        onChange={(e) => setNama(e.target.value)}
                        required
                        className="w-1/2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md max-md:w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="nomorRekening"
                        className="block mb-2 text-sm font-medium text-gray-100 "
                    >
                        No Rekening
                    </label>
                    <input
                        type="text"
                        name="nomorRekening"
                        id="nomorRekening"
                        placeholder="nomorRekening"
                        value={nomorRekening}
                        onChange={(e) => setnomorRekening(e.target.value)}
                        required
                        className="w-1/2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md max-md:w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                </div>
                <div className="mb-6">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-yellow-500 btn hover:bg-yellow-600"
                    >
                        Edit Data
                    </button>
                </div>
            </form>


        </div>
    )
}

export default BanksEdit