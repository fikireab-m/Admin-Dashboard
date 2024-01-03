import Layout from "../../components/Layout"
import users from "../../assets/icons/users_white.svg"
import matchesIcon from "../../assets/icons/joined_hearts.svg"

const Home = (): JSX.Element => {
  return (
    <Layout title="Kimem/Dashboard" index={0}>
      <div className="my-6 mx-2 h-full flex flex-col flex-1">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 bg-gradient-to-r from-pink-700 to-pink-600 rounded-full shadow-lg">
                  <img src={users} alt="users icon" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Total Users
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    1200 +
                  </p>
                </div>
              </div>
              <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 bg-gradient-to-r from-pink-700 to-purple-700 rounded-full shadow-lg">
                  <img src={matchesIcon} alt="matches icon" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    New Matches
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    200 +
                  </p>
                </div>
              </div>

              <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 bg-gradient-to-r from-pink-700 to-blue-400 rounded-full dark:text-blue-100 dark:bg-blue-500 shadow-lg">
                  <svg
                    width="48px"
                    height="48px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20 18L14 18M17 15V21M4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                        stroke="#ffffff"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    New Users
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    500 +
                  </p>
                </div>
              </div>

              <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
                <div className="p-3 mr-4 bg-gradient-to-r from-purple-700 to-blue-500 rounded-full shadow-lg">
                  <svg
                    width="48px"
                    height="48px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.192"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.5 21H5.6C5.03995 21 4.75992 21 4.54601 20.891C4.35785 20.7951 4.20487 20.6422 4.10899 20.454C4 20.2401 4 19.9601 4 19.4V17.6841C4 17.0485 4 16.7306 4.04798 16.4656C4.27087 15.2344 5.23442 14.2709 6.46558 14.048C6.5425 14.0341 6.6237 14.0242 6.71575 14.0172C6.94079 14 7.05331 13.9914 7.20361 14.0026C7.35983 14.0143 7.4472 14.0297 7.59797 14.0722C7.74302 14.1131 8.00429 14.2315 8.52682 14.4682C8.83795 14.6091 9.16326 14.7243 9.5 14.811M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM16.4976 16.2119C15.7978 15.4328 14.6309 15.2232 13.7541 15.9367C12.8774 16.6501 12.7539 17.843 13.4425 18.6868C13.8312 19.1632 14.7548 19.9983 15.4854 20.6353C15.8319 20.9374 16.0051 21.0885 16.2147 21.1503C16.3934 21.203 16.6018 21.203 16.7805 21.1503C16.9901 21.0885 17.1633 20.9374 17.5098 20.6353C18.2404 19.9983 19.164 19.1632 19.5527 18.6868C20.2413 17.843 20.1329 16.6426 19.2411 15.9367C18.3492 15.2307 17.1974 15.4328 16.4976 16.2119Z"
                        stroke="#ffffff"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Active users
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">500+</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Home