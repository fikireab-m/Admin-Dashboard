import { useState } from 'react';
import heartlock from '../../assets/hearlock.svg';
import Login from './Login';
import Register from './Register';


export default function Auth(): JSX.Element {

  const [userIsNew, setUserIsNew] = useState<boolean>(false)

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-sm max-h-fit p-6 bg-white border hover:shadow-xl border-pink-400 rounded-lg shadow-lg flex flex-1 flex-col justify-center p-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-16 h-16 p-1 rounded-full ring-2 ring-pink-500"
            src={heartlock}
            alt="PleasureBee"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
            {userIsNew ? "Create Your Account" : "Sign In To your Account"}
          </h2>
        </div>

        {userIsNew ?
          <Register callback={setUserIsNew} />
          :
          <Login callback={setUserIsNew} />
        }
      </div>
    </div>
  )
}
