import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Label from "../Components/Label";
import makeUnauthenticatePOSTrequest from "../utils/serverHelper";
import { Cookies, useCookies } from 'react-cookie';


const SignUpComponent = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmEmail,setconfirmEmail]=useState("");
  const [cookies, setCookie] = useCookies(['token'])
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };
  
  const Signup = async ()=>{
    if(email != confirmEmail)
    {
      alert("email and confirm email must match , Please check again");
      return;
    }
    const data1 = {
      email,
      password,
      username,
      firstName,
      lastName
    }
    const response= await makeUnauthenticatePOSTrequest("/auth/register",data1);
    console.log(response);
    if(response && !response.error)
    {
      const date = new Date();
      date.setDate(date.getDate() + 30);
      const token = response.token;
      setCookie('token',token, { path: '/',expires: date, });
     alert("Success");
     navigate("/home");
    }
  else{
    alert(response.error);
  }
}


  return (
    <div className="w-full h-screen md:flex ">
      {/* Left Section: Video */}
      <div className=" md:w-2/3 relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          className="w-full h-full object-cover"
        >
          <source src="./public/bg.mp4" type="video/mp4" />
        </video>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>

      {/* Right Section: Signup Form */}
      <div className="md:w-1/3 flex flex-col justify-center items-center bg-white bg-opacity-80">
        {/* Your Logo */}

        {/* Form Box */}
        <div
          className="w-2/3  h-full p-6 bg-white rounded-2xl shadow-2xl"
          style={{ fontFamily: "Roboto" }}
        >
          <div className="font-bold text-2xl text-center text-black mb-4">
            Sign up and Explore free!
          </div>

          <hr className="my-4 border-gray-700" />

          {/* Labels */}
          <Label
            type="email"
            title="What's your email?"
            inputmessage="Enter your email."
            value={email}
            setValue={setEmail}
          />
          <Label
            type="email"
            title="Confirm your email"
            inputmessage="Enter your email again."
            value={confirmEmail}
            setValue={setconfirmEmail}
          />
          <Label
            type="password"
            title="Create a password"
            inputmessage="Enter a strong Password."
            value={password}
            setValue={setPassword}
          />
          <Label
            type="text"
            title="What should we call you?"
            inputmessage="Enter a profile name."
            value={username}
            setValue={setUsername}
          />
          <Label
            type="text"
            title="FirstName"
            inputmessage="Enter your first name."
            value={firstName}
            setValue={setFirstName}
          />
          <Label
            type="text"
            title="LastName"
            inputmessage="Enter your last name."
            value={lastName}
            setValue={setLastName}
          />
          {/* Sign Up Button */}
          <div className="mt-4">
            <button
              type="button"
              className="w-full font-medium text-black bg-green-400 p-2 rounded-full shadow-lg hover:bg-white hover:text-green-400"
              onClick={(e)=>{
                e.preventDefault();
                Signup();
              }}
            >
              Sign Up
            </button>
          </div>

          <hr className="my-4 border-gray-700" />

          {/* Already have account */}
          <div className="text-center text-black">Already have an account?</div>
          <div className="mt-2">
            <Link to="/login">
              <button
                type="button"
                className="w-full font-medium text-black bg-green-400 p-2 rounded-full shadow-lg hover:bg-white hover:text-green-400"
              >
                Login Spotify
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
