import Layout from "../../components/Layout"
import users from "../../assets/icons/users_white.svg"
import matchesIcon from "../../assets/icons/joined_hearts.svg"
import userFavorite from "../../assets/icons/user_favorite.svg"
import userPlus from "../../assets/icons/user_plus.svg"
import SimpleBarChart from "../../components/charts/BarChart"
import SimpleLineChart from "../../components/charts/SimpleLineChart"
import PieChart from "../../components/charts/PieChart"

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
                  <img src={userPlus} alt="user plus icon" />
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
                  <img src={userFavorite} alt="user favorite" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Active users
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">500+</p>
                </div>
              </div>
            </div>
            <div className="w-full grid gap-6 mb-8 lg:grid-cols-2 items-center">
              <div>
                <div className="opacity-100 transition-opacity duration-150 ease-linear">
                  <SimpleBarChart titleText="" />
                </div>
                <div className="opacity-100 transition-opacity duration-150 ease-linear">
                  <SimpleLineChart titleText="" />
                </div>
              </div>
              <div className="opacity-100 transition-opacity duration-150 ease-linear">
                <PieChart titleText="" legendOrientation="bottom" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Home