import { NavLink, useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { useDispatch } from "react-redux";
import { login1 } from "../redux/userSlice";
const { useState } = require("react");
const Login = () => {
  const nav=useNavigate();
  const dispatch = useDispatch();
  const [errors,setErrors] = useState({});
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };
  const notify=(e)=>{
        e.preventDefault();
        toast.success("Reset Password link sent to your mail");
  }
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login1({
      email:login.email
     } ))
    const validationErrors={}
    if(!login.email.trim()){
      validationErrors.email="Email is required";
      toast.error("Enter email");
    }
    else if(!/\S+@\S+\.\S+/.test(login.email)){
      validationErrors.email="Email is invalid";
    }
    if(!login.password.trim()){
      validationErrors.password="Password is required";
    }
    setErrors(validationErrors);
    if(Object.keys(validationErrors).length===0){
      toast.success('Login Successful');
      nav('/home');
  }
  };

  return (
    <div class="flex  items-center justify-center  min-h-screen bg-yellow-100">
      
      <form
        onSubmit={handleClick}
        class="relative flex flex-col m-6 space-y-8 w-[400px]  bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        <div class="flex flex-col justify-center align-items-center p-8 md:p-14">
        <Toaster/>
          <span className="mb-3 text-4xl font-bold text-yellow-600">Welcome Back!</span>
          <span class="font-light text-gray-400 mb-8 text-2xl">
            Please Enter your details
          </span>
          <div class="py-4  justify-between">
            <label class="mb-2 text-md text-xl font-serif">Email:</label>
            <input
              type="text"
              placeholder="Enter email"
              id="email"
              onChange={handleChange}
              class="w-full p-2 border border-white hover:placeholder:text-black ouline-none hover:outline-none hover:bg-yellow-100  rounded-md"
            ></input>
            {errors.email && <span class="text-red-500">{errors.email}</span>}
          </div>
          <div class="py-4  justify-between">
            <label class="mb-2 text-md text-xl font-serif">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              class=" w-full p-2 border border-white  rounded-md
                    hover:placeholder:text-black
                    hover:text-black  hover:bg-yellow-100  hover:outline-none ouline-none"
              onChange={handleChange}
            ></input>
            {errors.password && <span class="text-red-500">{errors.password}</span>}
          </div>
           <div class="flex justify-between w-ful ">
          {/*  <div class="mr-24">
              <label class="text-md" htmlFor="ch">
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  class="mr-2 "
                  onChange={handleCheck}
                ></input>
                Remember me
              </label>
            </div> */}
            <span class="font-serif text-md cursor-pointer hover:text-blue-500 hover:underline" onClick={notify}>
              Forget password ?
            </span>
          </div>
          <div class="flex flex-col space-y-2">
                    <button
              class="w-full bg-black text-white p-2 rounded-lg mt-5
                 font-bold font-serif hover:text-black hover:bg-yellow-100"
            >
              Sign in
            </button>
           


            <span class="flex justify-center items-center">or</span>
            <button class=" flex gap-4 justify-center w-full bg-black  font-serif text-white font-bold p-2 rounded-lg hover:bg-yellow-100  hover:text-black ">
              <FcGoogle class="mt-1" />
              Sign in with Google
            </button>
          </div>
          <span className="hover:underline hover:text-blue-400 font-serif cursor-pointer" onClick={()=>nav('/signup')}>Doesn't have an account? Signup</span>
        </div>
      </form>
    </div>
  );
};
export default Login;
