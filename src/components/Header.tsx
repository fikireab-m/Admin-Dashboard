import { motion } from "framer-motion";

type HeaderProp = {
  title: string
}
const Header: React.FC<HeaderProp> = ({ title }): JSX.Element => {
  return (
    <motion.div className="fixed mt-2 top-0 left-16 md:left-64 right-0 mx-4 bg-gradient-to-r from-pink-700 to-blue-400 px-16 py-3 rounded-md shadow-xl flex justify-between items-center z-10"
      initial={{ y:-200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease:"easeOut" }}>
      <span className="text-md lg:text-xl font-bold text-white ">{title}</span>
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src="https://media.licdn.com/dms/image/D4E03AQHCGdpUaJ9dng/profile-displayphoto-shrink_200_200/0/1701841320858?e=2147483647&v=beta&t=zJSfGYJ5HIFo2ds16L06oZKUqIUaL1253mEHCvPCdl0"
        alt=""
      />
    </motion.div>
  );
}

export default Header
