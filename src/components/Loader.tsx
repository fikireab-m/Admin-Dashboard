type LoaderProp = {
    openloader: boolean
}
const Loader = ({ openloader }: LoaderProp) => {
    return (
        <>
            {/* {openloader && <div className="absolute top-0 bottom-0 right-0 left-0 z-50 w-full bg-gray-100 h-screen flex items-center justify-center">
                
            </div>} */}
            {openloader && <div
                className="inline-block text-pink-700 h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_2.0s_linear_infinite]"
                role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>

            </div>}
        </>
    )
}
export default Loader

export const SmallLoader = ({ openloader }: LoaderProp) => {
    return (
        <>
            {/* {openloader && <div className="absolute top-0 bottom-0 right-0 left-0 z-50 w-full bg-gray-100 h-screen flex items-center justify-center">
                
            </div>} */}
            {openloader && <div
                className="inline-block text-pink-700 h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_2.0s_linear_infinite]"
                role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>

            </div>}
        </>
    )
}