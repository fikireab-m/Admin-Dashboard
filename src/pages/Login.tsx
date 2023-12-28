import google from "../assets/icons/google.svg"
import heartlock from "../assets/hearlock.svg"
const Login = () => {

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center bg-pink-100 select-none">
                <div className="max-w-sm max-h-fit p-6 bg-white border hover:shadow-xl border-pink-400 rounded-lg shadow-lg flex flex-1 flex-col justify-center p-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto w-16 h-16 p-1 rounded-full ring-2 ring-pink-500"
                            src={heartlock}
                            alt="Kimem"
                        />
                        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                            <button className="font-semibold leading-6 text-pink-700 hover:text-pink-500">
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login