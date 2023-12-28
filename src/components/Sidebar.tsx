const sideBarItems = [
    {
        menuTitle: "Dashboard",
        url: "/"
    },
    {
        menuTitle: "Users",
        url: "/users"
    },
    {
        menuTitle: "Subscriptions",
        url: "/plans"
    },
    {
        menuTitle: "Analytics",
        url: "/analytics"
    },
  
    {
        menuTitle: "Settings",
        url: ""
    },
    {
        menuTitle: "Help",
        url: ""
    },
    {
        menuTitle: "Feedback",
        url: ""
    },
]
const Sidebar = (): JSX.Element => {
    return (
        <div className="bottom-0 min-h-screen fixed">
            <aside className="shadow-xl min-h-screen rounded-lg dark:border-gray-700 z-20 md:w-64 overflow-y-auto bg-white flex-shrink-0">
                <div className="py-4 text-gray-700 ">
                    <div className="md:hidden absolute w-16 top-2 bottom-2 left-2 flex flex-col bg-gradient-to-r from-gray-100 to-white rounded-full shadow-xl">
                        <div className="mb-2 p-4">
                            <a
                                href="/"
                                className="flex items-center transition duration-200 transform hover:scale-105"
                            >
                            </a>
                        </div>
                        <hr />
                        <div className="mb-2" />
                        {
                            sideBarItems.map((item) => (
                                <a
                                    key={item.menuTitle}
                                    href={item.url}
                                    className="inline-flex items-center px-4 py-3 transition duration-200 transform hover:scale-105"
                                >
                                </a>
                            ))
                        }
                    </div>
                    <div className="px-2 pt-8 hidden md:block">
                        <div className="mb-4 px-4 ">
                            <a
                                href="/"
                                className="flex items-center transition duration-200 transform hover:scale-105"
                            >
                                <h1 className="hidden text-4xl md:block font-bold">Kimem</h1>
                            </a>
                        </div>
                        <hr />
                        {
                            sideBarItems.map((item, index) => (
                                <>
                                    <a
                                        key={index}
                                        className="ml-2 py-2 px-4 flex items-center w-full rounded-md transitions duration-150 hover:text-gray-800 hover:bg-purple-100 hover:scale-105"
                                        href={item.url}
                                    >
                                        <span className="text-md font-semibold text-gray-800 ">
                                            {item.menuTitle}
                                        </span>
                                    </a>
                                    {
                                        index < 7 ? <hr /> : ""
                                    }
                                </>
                            ))
                        }
                        <button
                            className="mt-8 w-full flex justify-center items-center px-4 py-2 text-white transition-colors duration-150 bg-pink-700 border border-transparent rounded-lg active:bg-pink-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple">
                            <span className="ml-0.5 text-xl">Logout</span>
                        </button>
                    </div>

                </div>
            </aside>
        </div>
    )
}

export default Sidebar