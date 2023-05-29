import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {

  const location = useLocation();

  return (
    <div>
      <div className="flex ">
        <div className="w-1/6 ml-1 my-28">
          <div className="px-2 py-3 h-fit rounded-xl bg-[#144272]">
            <ul className="space-y-2 font-medium rounded-xl">
              <li>
                <Link
                  to="/"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#19A7CE]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/" && "bg-[#19A7CE] text-slate-900"}`}

                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3 ">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/vehicle"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#19A7CE]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/vehicle" && "bg-[#19A7CE] text-slate-900"}`}
                >
                  <svg className="w-6 h-6 transition duration-75 " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7993 3C17.2899 3 18.5894 4.01393 18.9518 5.45974L19.337 7H20.25C20.6297 7 20.9435 7.28215 20.9932 7.64823L21 7.75C21 8.1297 20.7178 8.44349 20.3518 8.49315L20.25 8.5H19.714L19.922 9.3265C20.5708 9.72128 21.0041 10.435 21.0041 11.25V19.7468C21.0041 20.7133 20.2206 21.4968 19.2541 21.4968H17.75C16.7835 21.4968 16 20.7133 16 19.7468L15.999 18.5H8.004L8.00408 19.7468C8.00408 20.7133 7.22058 21.4968 6.25408 21.4968H4.75C3.7835 21.4968 3 20.7133 3 19.7468V11.25C3 10.4352 3.43316 9.72148 4.08177 9.32666L4.289 8.5H3.75C3.3703 8.5 3.05651 8.21785 3.00685 7.85177L3 7.75C3 7.3703 3.28215 7.05651 3.64823 7.00685L3.75 7H4.663L5.04898 5.46176C5.41068 4.01497 6.71062 3 8.20194 3H15.7993ZM6.504 18.5H4.499L4.5 19.7468C4.5 19.8848 4.61193 19.9968 4.75 19.9968H6.25408C6.39215 19.9968 6.50408 19.8848 6.50408 19.7468L6.504 18.5ZM19.504 18.5H17.499L17.5 19.7468C17.5 19.8848 17.6119 19.9968 17.75 19.9968H19.2541C19.3922 19.9968 19.5041 19.8848 19.5041 19.7468L19.504 18.5ZM13.7507 14H10.249L10.1472 14.0068C9.78115 14.0565 9.49899 14.3703 9.49899 14.75C9.49899 15.1297 9.78115 15.4435 10.1472 15.4932L10.249 15.5H13.7507L13.8525 15.4932C14.2186 15.4435 14.5007 15.1297 14.5007 14.75C14.5007 14.3358 14.165 14 13.7507 14ZM17 12C16.4477 12 16 12.4477 16 13C16 13.5522 16.4477 13.9999 17 13.9999C17.5522 13.9999 17.9999 13.5522 17.9999 13C17.9999 12.4477 17.5522 12 17 12ZM6.99997 12C6.4477 12 6 12.4477 6 13C6 13.5522 6.4477 13.9999 6.99997 13.9999C7.55225 13.9999 7.99995 13.5522 7.99995 13C7.99995 12.4477 7.55225 12 6.99997 12ZM15.7993 4.5H8.20194C7.39892 4.5 6.69895 5.04652 6.50419 5.82556L5.71058 9H18.2929L17.4968 5.82448C17.3017 5.04596 16.6019 4.5 15.7993 4.5Z" />
                  </svg>
                  <span className="ml-3 ">Vehicle</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/brands"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#19A7CE]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/brands" && "bg-[#19A7CE] text-slate-900"}`}
                >
                  <svg
                    version="1.1"
                    id="svg2"
                    fill="currentColor"
                    sodipodiDocname="tags.svg"
                    inkscapeVersion="0.48.4 r9939"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 transition duration-75"
                    viewBox="0 0 1200 1200"
                    enableBackground="new 0 0 1200 1200"
                    xmlSpace="preserve"
                  >
                    <path
                      id="path23160"
                      inkscapeConnectorCurvature="0"
                      d="M0,467.478V176.805c3.479-45.64,36.064-76.909,77.47-77.47h290.673
	c38.559,0.646,74.477,14.596,105.962,33.613l455.536,500.354c27.468,35.271,28.876,79.164,0,108.844l-336.771,335.491
	c-34.029,29.361-81.72,32.02-108.842,0L55.062,600.009C24.908,562.69,0.447,513.568,0,467.478z M146.938,352.233
	c32.17,29.66,78.342,26.916,105.961,0c29.526-31.898,27.06-78.551,0-105.961c-31.94-29.075-78.454-26.768-105.961,0
	C117.739,280.374,118.836,322.978,146.938,352.233z M506.438,100.615h111.403c46.704,2.88,101.974,21.285,131.893,55.062
	L1178.7,634.582c28.985,33.471,27.808,81.543,0,110.123l-335.491,335.492c-46.495,26.355-89.107,24.518-117.806-8.965
	l329.088-329.089c29.633-32.787,26.469-80.075,0-108.843L670.618,203.787C625.179,147.074,527.354,103.175,506.438,100.615z"
                    />
                  </svg>

                  <span className="ml-3 ">Brands</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/banks"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#19A7CE]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/banks" && "bg-[#19A7CE] text-slate-900"}`}
                >
                  <svg
                    version="1.0"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6 transition duration-75 "
                    viewBox="0 0 64 64"
                    enableBackground="new 0 0 64 64"
                    xmlSpace="preserve"
                  >
                    <g>
                      <circle cx="32" cy="14" r="3" />
                      <path

                        d="M4,25h56c1.794,0,3.368-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497l-28-17
		C33.438,0.193,32.719,0,32,0s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497C0.632,23.806,2.206,25,4,25z
		 M32,9c2.762,0,5,2.238,5,5s-2.238,5-5,5s-5-2.238-5-5S29.238,9,32,9z"
                      />
                      <rect x="34" y="27" width="8" height="25" />
                      <rect x="46" y="27" width="8" height="25" />
                      <rect x="22" y="27" width="8" height="25" />
                      <rect x="10" y="27" width="8" height="25" />
                      <path d="M4,58h56c0-2.209-1.791-4-4-4H8C5.791,54,4,55.791,4,58z" />
                      <path

                        d="M63.445,60H0.555C0.211,60.591,0,61.268,0,62v2h64v-2C64,61.268,63.789,60.591,63.445,60z"
                      />
                    </g>
                  </svg>

                  <span className="ml-3 ">Banks</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#19A7CE]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/category" && "bg-[#19A7CE] text-slate-900"}`}
                >
                  <svg className="w-6 h-6 transition duration-75 " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className="ml-3 ">Categories</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-5/6">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
