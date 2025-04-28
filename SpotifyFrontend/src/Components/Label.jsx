const Label = ({type,title, inputmessage})=>{
    return (
       <div className="w-full pt-5 ">
          <div className="text-md font-bold pl-3 ">
            {title}
          </div>
          <div className="pt-0.5 pb-2 pl-3 pr-6 ">
            <input type={type} required={true} placeholder={inputmessage} className="border border-solid border-gray-300 w-full pt-1 pb-1 rounded-sm"></input>
          </div>
       </div>
    )
}
export default Label;