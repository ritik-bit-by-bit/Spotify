const Icon =({icon,Icontext})=>{
    return (
        <div className=" justify-items-center-safe flex hover:shadow-lg shadow-green-500">
            <div className="pr-4 pb-3 pl-4 pt-3 group-hover:fill-green-400">
                {icon}
               </div>
            <div className="text-white pt-5 hover:text-green-400">{Icontext}</div>
        </div>
    )
}
export default Icon;