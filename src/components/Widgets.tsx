import { ReactNode } from "react"

type BtnProp = {
    children: ReactNode,
    onclick: React.MouseEventHandler<HTMLButtonElement>
}


export const IconButton: React.FC<BtnProp> = ({ children, onclick }): JSX.Element => {
    return (
        <button
            onClick={onclick}
            className="flex justify-center items-center p-3 bg-transparent text-md text-pink-700 outline-0 transition-colors duration-200 border-2 border-pink-300 rounded-full hover:bg-gradient-to-r from-pink-700 to-pink-400 hover:text-white hover:border-0 shadow-xl">
            {
                children
            }
        </button>
    )
}
