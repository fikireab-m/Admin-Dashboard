import { ReactNode } from "react"
import { BiUserMinus } from "react-icons/bi"
type CardProp = {
    title:string,
    amount:number,
    children:ReactNode
}
const Card:React.FC<CardProp> = ({title, children, amount}) => {
    return (
        <div className="bg-gradient-to-r from-[#8076C6] to-[#60A4F9] w-[280px] h-28 rounded-xl">
            <h1 className="m-3 text-sm flex gap-3 items-center">
                <BiUserMinus size={25} />
                {title}
            </h1>
        <h1 className="text-3xl mx-5">{amount}</h1>
            {
                children
            }
        </div>
    )
}

export default Card