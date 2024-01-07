type HomeCardProp = {
    title:string,
    imgUrl:string,
}
const HomeCard:React.FC<HomeCardProp> = ({imgUrl}) => {
    return (
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
            <div className="p-3 mr-4 bg-gradient-to-r from-pink-700 to-pink-600 rounded-full shadow-lg">
                <img src={imgUrl} alt="users icon" />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Total Users
                </p>
                <p className="text-lg font-semibold text-gray-700 ">
                    1200 +
                </p>
            </div>
        </div>
    )
}

export default HomeCard