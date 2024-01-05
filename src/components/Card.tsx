import { BiUserMinus } from "react-icons/bi"
type CardProp = {
    title:string,
    amount:number,
}
const Card:React.FC<CardProp> = ({title, amount}) => {
    return (
        <div className="bg-gradient-to-r from-[#8076C6] to-[#60A4F9] w-[280px] h-28 rounded-xl">
            <h1 className="m-3 text-sm flex gap-3 items-center">
                <BiUserMinus size={25} />
                {title}
            </h1>
        <h1 className="text-3xl mx-5">{amount}</h1>
        <div className="flex justify-end mx-5">
                <select className="bg-transparent text-sm outline-0 border-0">
                  <option value=">18" className={`bg-[#60A4F9]`}>
                    18 - 25
                  </option>
                  <option value=">18" className={`bg-[#60A4F9]`}>
                    26 - 40
                  </option>
                  <option value=">18" className={`bg-[#60A4F9]`}>
                    {"41 > "}
                  </option>
                </select>
              </div>
        </div>
    )
}

export default Card