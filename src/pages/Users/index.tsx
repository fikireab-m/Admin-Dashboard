import Layout from "../../components/Layout";
const Users = (): JSX.Element => {
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
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>
        </Layout>
    )
}

export default Users