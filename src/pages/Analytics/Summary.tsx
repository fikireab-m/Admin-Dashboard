const Summary = () => {
    return (

        <section className="w-[92%] mb-10 bg-gradient-to-b from-transparent from-[5%] to-white to-50% shadow-sm rounded-xl mx-5">
            <header className="lg:flex lg:justify-between lg:mx-10">
                <h1 className="mt-16 text-2xl mx-10 text-sky-950 font-semibold">
                    Detailed Summary
                </h1>

                <div className="md:flex grid lg:mt-16 mt-5 lg:mx-0 mx-10">
                    <span className="flex">
                        <h1 className="relative top-3 text-sm">Country: </h1>
                        <select name="" id="" className="bg-transparent my-3">
                            <option value="">All</option>
                            <option value="">Canada</option>
                            <option value="">Ethiopia</option>
                            <option value="">India</option>
                            <option value="">USA</option>
                        </select>
                    </span>

                    <span className="flex">
                        <h1 className="relative top-3 text-sm">Region: </h1>
                        <select className="bg-transparent text-sm my-3">
                            <option value=">18" className="bg-inherit">
                                All
                            </option>
                            <option value=">18" className="bg-inherit">
                                Region 1
                            </option>
                            <option value=">18" className="bg-inherit">
                                Region 2
                            </option>
                            <option value=">18" className="bg-inherit">
                                Region 3
                            </option>
                        </select>
                    </span>

                    <span className="flex">
                        <h1 className="relative top-3 text-sm">Time: </h1>
                        <select name="" id="" className="bg-transparent my-3">
                            <option value="">Weekly</option>
                            <option value="">Quarterly</option>
                            <option value="">Monthly</option>
                            <option value="">Half Yearly</option>
                            <option value="">Yearly</option>
                        </select>
                    </span>

                    <span className="flex">
                        <h1 className="relative top-3 text-sm">Age: </h1>
                        <select className="bg-transparent text-sm my-3">
                            <option value=">18" className="bg-inherit">
                                18 - 25
                            </option>
                            <option value=">18" className="bg-inherit">
                                26 - 40
                            </option>
                            <option value=">18" className="bg-inherit">
                                {"41 > "}
                            </option>
                        </select>
                    </span>
                </div>
            </header>

            <div className="grid lg:flex lg:justify-between">
                <div className="lg:mx-20 mx-10 mt-10 self-center lg:w-[40%] md:w-[80%]">
                    <span className="flex justify-between my-3">
                        <h1>Total Users</h1>
                        <h2>0</h2>
                    </span>
                    <span className="flex justify-between my-3">
                        <h1>New Users</h1>
                        <h2>0</h2>
                    </span>
                    <span className="flex justify-between my-3">
                        <h1>Active Users</h1>
                        <h2>0</h2>
                    </span>
                    <span className="flex justify-between my-3">
                        <h1>Deactivated Users</h1>
                        <h2>0</h2>
                    </span>
                    <span className="flex justify-between my-3">
                        <h1>Total Subscription</h1>
                        <h2>0</h2>
                    </span>
                    <hr className="bg-gray-200 rounded-full h-1" />
                    <span className="flex justify-between my-3">
                        <h1>Total Revenue Generated</h1>
                        <h2>0.00</h2>
                    </span>
                    <span className="flex justify-between my-3">
                        <h1>Total Generated from NFT Marketplace</h1>
                        <h2>0.00</h2>
                    </span>
                    <span className="flex justify-between my-3">
                        <h1>Total Revenue Generated from Advertising</h1>
                        <h2>0.00</h2>
                    </span>
                    <span className="flex justify-between my-3">
                        <h1>Total Generated from Partnership</h1>
                        <h2>0.00</h2>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Summary