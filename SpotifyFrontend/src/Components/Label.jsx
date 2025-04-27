const Label = ({type,title, inputmessage})=>{
    return (
       <div className="w-full className='pt-5'">
          <div className="text-md font-bold pl-2 ">
            {title}
          </div>
          <div className="pt-0.5 pb-2 pl-2 pr-16 ">
            <input type={type} required={true} placeholder={inputmessage} className="border border-solid border-gray-300 w-full pt-1 pb-1 rounded-sm"></input>
          </div>
       </div>
    )
}
export default Label;