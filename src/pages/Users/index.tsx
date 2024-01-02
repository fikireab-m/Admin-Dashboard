import Layout from "../../components/Layout";
import { FaCheck } from "react-icons/fa"
import { SmallLoader } from "../../components/Loader";
import { useState } from "react";
const users = [
    {
        id: 0,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        subscription: 'Fremium',
    },
    {
        id: 1,
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        isVerified: true,
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        subscription: 'Pro',
    },
    {
        id: 2,
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        isVerified: false,
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
        subscription: 'Pro',
    },
    {
        id: 3,
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        isVerified: false,
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        subscription: 'Premium',
    },
    {
        id: 4,
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        isVerified: true,
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        subscription: 'Fremium',
    },
    {
        id: 5,
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        isVerified: false,
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
        subscription: 'Premium',
    },
];
const Users = (): JSX.Element => {
    // const [reload, setLoad] = useState<boolean>(false)
    // const [loading, setLoading] = useState<boolean>(false)
    const [verifying, setVerifying] = useState({ index: 0, loading: false })

    const verifyUser = async (i: number) => {
        setVerifying({ index: i, loading: true })
        try {
            users[i].isVerified = true
            console.log(`user at ${i} verified`)
        } catch (error) {
            console.error(error)
        }
        setVerifying({ index: 0, loading: false })
    }

    return (
        <Layout title="Kimem/Users" >

            <div className="m-4 shadow-xl min-h-full rounded-lg bg-gray-100">
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-700 uppercase border-b border-purple-700 bg-gradient-to-b from-white to-gray-200">
                                <th className="px-4 py-3">User</th>
                                <th className="px-4 py-3">Phone</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Subscription</th>
                                <th className="px-4 py-3">Last seen</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y">
                            {users?.map((user, index) => (
                                <tr key={index} onClick={() => { }} className="text-gray-700 hover:bg-purple-100 curser-pointer">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img
                                                    className="object-cover w-full h-full rounded-full"
                                                    src={user.imageUrl}
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-full shadow-inner"
                                                    aria-hidden="true"
                                                ></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold">{user.name}</p>
                                                {/* <p className="text-xs text-gray-600 ">
                                                        {user.about ? user.about : ""}
                                                    </p> */}
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-4 py-3 text-sm">{user.email}</td>

                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className={`px-2 py-1 font-semibold leading-tight  ${user.isVerified
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                } rounded-full `}
                                        >
                                            {user.isVerified ? "verified" : "not verified"}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className={`px-2 py-1 font-semibold leading-tight  bg-gray-200 text-green-700 rounded-full `}
                                        >
                                            {user.subscription}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className={`px-2 py-1 font-semibold leading-tight  bg-gray-200 text-green-700 rounded-full `}
                                        >
                                            {user.lastSeen === null ? "" : user.lastSeen}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3">
                                        <div className="flex items-center space-x-4 text-sm">
                                            {
                                                !user.isVerified ?
                                                    <button
                                                        onClick={() => verifyUser(index)}
                                                        className="flex items-center justify-between px-2 py-2 text-md font-medium leading-5 text-green-700 rounded-lg  focus:outline-none hover:bg-gray-200"
                                                        aria-label="Edit"
                                                    >
                                                        {(verifying.index === index) && verifying.loading
                                                            ? <div className="w-4 h-4">
                                                                <SmallLoader openloader={verifying.loading} />
                                                            </div>
                                                            : < FaCheck />}
                                                    </button>
                                                    : <div className="w-8" />
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Users

