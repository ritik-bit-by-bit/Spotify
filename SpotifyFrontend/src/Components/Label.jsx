const Label = ({type,title, inputmessage,textcolor})=>{
    return (
       <div className="w-full pt-2 ">
      {iscolor({color:textcolor})? <div className="text-md font-bold pl-3 text-white">
            {title}
          </div>:
          <div className="text-md font-bold pl-3 ">
            {title}
          </div>
          }
         
          {iscolor({color:textcolor})?<div className="pt-0.5 pb-2 pl-3 pr-6 ">
            <input type={type} required={true} placeholder={inputmessage} className="text-white border border-solid border-gray-300 w-full pt-1 pb-1 rounded-sm hover:bg-white hover:text-green-400 hover: shadow-lg hover:shadow-green-400"></input>
          </div>:
          <div className="pt-0.5 pb-2 pl-3 pr-6 ">
            <input type={type} required={true} placeholder={inputmessage} className=" border border-solid border-gray-300 w-full pt-1 pb-1 rounded-sm hover:bg-white hover:text-green-400 hover: shadow-lg hover:shadow-green-400"></input>
          </div>
          }
       </div>
    )
}
const iscolor=({color})=>{
  if(color=="white")
  {
    return true;
  }
  else{
    return false;
  }
}
export default Label;