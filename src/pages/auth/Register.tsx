import { motion } from "framer-motion"
import google from "../../assets/icons/google.svg"

type RegisterProp = {
  callback: React.Dispatch<React.SetStateAction<boolean>>
}
const Register: React.FC<RegisterProp> = ({ callback }) => {

  return (
    <motion.div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm"
    initial={{scale:0.5,opacity:0}}
    animate = {{scale:1,opacity:1}}
    transition={{duration:1.0}}
    >
      <div className="space-y-4">
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            required
            className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            required
            className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            required
            className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <button
            className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
          >
            Sign Up
          </button>
        </div>
        <hr />

        <a href="#"
          className="my-4 flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-md font-semibold leading-6 text-pink-700 shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
        >
          <img src={google} alt="google" className="w-6 h-6" />
          <span className="ml-1">Sign up using Google</span>
        </a>
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{' '}
        <button onClick={() => callback(false)} className="font-semibold leading-6 text-pink-700 hover:text-pink-500">
          Sign In
        </button>
      </p>
    </motion.div>
  )
}

export default Register

