import { useState,useContext } from "react";
//import { useDispatch ,useSelector} from "react-redux";
//import { login } from "../Redux/features/AuthSlice";
import { useNavigate } from "react-router-dom";
//import users from '../MokeData/users';
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  //const {user} = useSelector()
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   dispatch(login({ email, password }));
  
  //   console.log(user);
  //   if (user) {
  //     switch (user.role) {
  //       case "admin":
  //         navigate("/admin");
  //         break;
  //       case "seller":
  //         navigate("/seller");
  //         break;
  //       case "buyer":
  //         navigate("/buyer");
  //         break;
  //       default:
  //         navigate("/");
  //     }
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // };
  const { login,user } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (user) {
      switch (user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "seller":
          navigate("/seller");
          break;
        case "buyer":
          navigate("/buyer");
          break;
        default:
          navigate("/");
      }
    } else {
      alert("Invalid credentials");
  
    }
  };

  

  return (
    <div className="max-w-md mx-auto my-[80px] p-4 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-white mb-4">Login Page</h1>
      <form className="space-y-4" onSubmit={handleLogin}>
        <label className="block">
          <span className="text-gray-100">Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 mt-1 text-black rounded-lg focus:outline-none focus:ring focus:ring-primary"
          />
        </label>
        <label className="block">
          <span className="text-gray-100">Password:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 mt-1 rounded-lg focus:outline-none focus:ring focus:ring-primary"
          />
        </label>
        <button
          type="submit"
          className="bg-primary hover:bg-white text-black font-bold py-2 px-4 rounded-lg hover:text-black"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
