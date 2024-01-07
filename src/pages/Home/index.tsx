import Layout from "../../components/Layout"
import users from "../../assets/icons/users_white.svg"
import matchesIcon from "../../assets/icons/joined_hearts.svg"
import userFavorite from "../../assets/icons/user_favorite.svg"
import userPlus from "../../assets/icons/user_plus.svg"
import SimpleBarChart from "../../components/charts/BarChart"
import SimpleLineChart from "../../components/charts/SimpleLineChart"
import PieChart from "../../components/charts/PieChart"
import HomeCard from "../../components/HomeCard"

const Home = (): JSX.Element => {
  const imgUrls = [users, matchesIcon, userPlus, userFavorite]
  const usersCat = ["Total Users","New Matches","New Users", "Active Users"]
  return (
    <Layout title="Kimem/Dashboard" index={0}>
      <div className="my-6 mx-2 h-full flex flex-col flex-1">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {
                imgUrls.map((imgUrl, index) => (
                  <HomeCard key={index} imgUrl={imgUrl} title = {usersCat[index]}/>
                ))
              }
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