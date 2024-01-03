import home from "../assets/icons/home.svg"
import users from "../assets/icons/users.svg"
import premium from "../assets/icons/king.svg"
import analytics from "../assets/icons/analytics.svg"
import settings from "../assets/icons/settings.svg"
import help from "../assets/icons/help.svg"
import feedback from "../assets/icons/feedback.svg"
import logout from "../assets/icons/logout.svg"
import heartlock from '../assets/hearlock.svg';
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const sideBarItems = [
    {
        menuTitle: "Dashboard",
        icon: home,
        url: "/"
    },
    {
        menuTitle: "Users",
        icon: users,
        url: "/users"
    },
    {
        menuTitle: "Subscriptions",
        icon: premium,
        url: ""
    },
    {
        menuTitle: "Analytics",
        icon: analytics,
        url: "/analytics"
    },
    {
        menuTitle: "Settings",
        icon: settings,
        url: ""
    },
    {
        menuTitle: "Help",
        icon: help,
        url: ""
    },
    {
        menuTitle: "Feedback",
        icon: feedback,
        url: ""
    },
]
type SidebarProp={
    activeIndex:number
}
const Sidebar = ({activeIndex}:SidebarProp): JSX.Element => {

    return (
        <motion.div className="bottom-0 min-h-screen fixed"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.0 }}>
            <aside className="shadow-xl min-h-screen rounded-lg dark:border-gray-700 z-20 md:w-64 overflow-y-auto bg-white flex-shrink-0">
                <div className="py-4 text-gray-700 ">
                    <div className="md:hidden absolute z-30 w-16 top-2 bottom-2 left-2 flex flex-col bg-gradient-to-r from-gray-100 to-white rounded-full shadow-xl">
                        <div className="mb-2 p-4">
                            <Link
                                to="/"
                                className="flex items-center transition duration-200 transform hover:scale-105"
                            >
                                <img
                                    src={heartlock}
                                    alt="pleasurebee logo"
                                    className="rounded-full w-12 h-12 shadow-md"
                                />
                            </Link>
                        </div>
                        <hr />
                        <div className="mb-2" />
                        {
                            sideBarItems.map((item) => (
                                <Link
                                    key={item.menuTitle}
                                    to={item.url}
                                    className="inline-flex items-center px-4 py-3 transition duration-200 transform hover:scale-105"
                                >
                                    <img
                                        className="w-6 h-6 "
                                        src={item.icon}
                                        alt={item.menuTitle}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                    <div className="px-2 pt-8 hidden md:block">
                        <div className="mb-4 px-4 ">
                            <Link
                                to="/"
                                className="flex items-center transition duration-200 transform hover:scale-105"
                            >
                                <img
                                    src={heartlock}
                                    alt="kimem logo"
                                    className="rounded-full w-12 h-12 shadow-md mr-4"
                                />
                                <h1 className="hidden md:block font-black text-4xl text-gray-500">Kimem</h1>
                            </Link>
                        </div>
                        <hr />
                        {
                            sideBarItems.map((item, index) => (
                                <>
                                    <Link
                                        key={index}
                                        className={`py-2 px-4 flex items-center w-full transitions duration-150 hover:text-gray-800 ${index === activeIndex ? "bg-pink-200" : ""} hover:bg-purple-100 hover:scale-105`}
                                        to={item.url}
                                    >
                                        <img
                                            className="w-6 h-6 mr-4"
                                            src={item.icon}
                                            alt={item.menuTitle}
                                        />
                                        <span className="text-md font-semibold text-gray-800 ">
                                            {item.menuTitle}
                                        </span>
                                    </Link>
                                    {
                                        index < 7 ? <hr /> : ""
                                    }
                                </>
                            ))
                        }
                        <button
                            className="mt-8 w-full flex justify-center items-center px-4 py-2 text-white transition-colors duration-150 bg-pink-700 border border-transparent rounded-lg active:bg-pink-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple">
                            <img
                                className="w-6 h-6 mr-4"
                                src={logout}
                                alt="logout"
                            />
                            <span className="ml-0.5 text-xl">Logout</span>
                        </button>
                    </div>

                </div>
            </aside>
        </motion.div>
    )
}

export default Sidebar