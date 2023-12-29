import { motion } from "framer-motion"
import google from "../../assets/icons/google.svg"
type LoginProp = {
    callback: React.Dispatch<React.SetStateAction<boolean>>
}
const Login: React.FC<LoginProp> = ({ callback }) => {
    return (
        <motion.div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        initial={{scale:0.5,opacity:0}}
        animate = {{scale:1,opacity:1}}
        transition={{duration:1.0}}>
            <div className="space-y-4">
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 p-2 text-md text-gray-900 outline-0 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="mt-1 text-sm flex justify-end">
                        <a href="#" className="font-semibold text-pink-700 hover:text-pink-500 ">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                    >
                        Sign In
                    </button>
                </div>
                <hr />

            </div>

            <a href="#"
                className="my-4 flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-md font-semibold leading-6 text-pink-700 shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
            >
                <img src={google} alt="google" className="w-6 h-6" />
                <span className="ml-1">Sign in using Google</span>
            </a>
            <p className="mt-8 text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <button onClick={() => callback(true)} className="font-semibold leading-6 text-pink-700 hover:text-pink-500">
                    Sign Up
                </button>
            </p>
        </motion.div>

    )
}

export default Login