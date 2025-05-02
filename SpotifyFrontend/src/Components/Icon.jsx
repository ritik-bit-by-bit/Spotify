const Icon =({icon,Icontext})=>{
    return (
        <div className=" place-items-center  md:flex pb-3 pt-2">
            <div className=" sm:pb-3 md:pr-4 pl-4 ">
                {icon}
               </div>
            <div className= " text-white  hover:text-green-400 sm:pl-2.5">{Icontext}</div>
        </div>
    )
}
export default Icon;