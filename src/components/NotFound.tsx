import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

type NotFoundProp = {
  title: string,
  message: string
}
const NotFound = ({ title, message }: NotFoundProp) => {
  const navigate = useNavigate()
  const handleNav = () => {
    navigate(-1)
  }
  return (
    <main className="w-full grid min-h-3/4 place-items-center px-6 py-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">
          <FaSearch />
        </h1>

        <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-400 sm:text-4xl">
          No {title} Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {message}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handleNav}
            className="rounded-lg bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
            Go back home
          </button>
          <button
            onClick={handleNav}
            className="text-sm font-semibold text-gray-900 bg-gray-100">
            Contact support <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound