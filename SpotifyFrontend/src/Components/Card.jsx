const Card = ({ title, description,image }) => {
  return (
    <div className="bg-black bg-opacity-40 rounded-xl  items-center shadow-lg shadow- hover:shadow-green-400 ml-3 mr-5 mb-1 ">
        <div className=" w-full rounded-sm pl-4 pr-4 pt-4" >
            <img src="https://wallpapers.com/images/hd/spotify-background-tivxyhllzpcm2xkz.jpg"></img>
        </div>
      <div className=" pl-4 pr-4 pb-3 pt-5 text-white font-semibold shadow-2xs hover:text-green-400">{title}</div>
      <div className="pl-4 pr-4 pb-1 text-gray-500">{description}</div>
    </div>
  );
};
export default Card;
