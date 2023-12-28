
import Layout from "../components/Layout"

const Home = (): JSX.Element => {
  return (
    <Layout title="PleasureBee/Dashboard">
      <div className="w-full m-2 shadow-xl h-screen flex justify-center items-center flex-1 bg-pink-100 rounded-lg">
        <h1 className="font-black text-9xl text-gray-600">Home Page</h1>
      </div>
    </Layout>
  );
}

export default Home