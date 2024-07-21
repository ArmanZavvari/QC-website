// import React, { useState } from "react";
// import logo from "../../assets/logo.png";
// import { Button } from "../../components/ui/button";
// import { Label } from "../../components/ui/label";
// import { Input } from "../../components/ui/input";
// import { useNavigate } from "react-router-dom";
// import { EyeIcon, EyeOff } from "lucide-react";
// import { errorMessage, successMessage } from "../../utils/msg";

// const Login: React.FC = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username === "alborz" && password === "Alborz123") {
//       localStorage.setItem("token", "token");
//       navigate("/");
//       successMessage("ورود با موفقت انجام شد");
//     } else {
//       errorMessage("رمز عبور یا نام کاربری اشتباه است");
//     }
//   };

//   return (
//     <div id="page-container" className="rtl flex items-center justify-center min-h-screen bg-white">
//       <div
//         id="login-container"
//         className="bg-purple-200 p-10 gap-5 rounded-lg shadow-md w-full max-w-sm backdrop-blur-sm"
//       >
//         <div className="flex justify-center mb-6 border-b border-white">
//           <img src={logo} alt="Logo" className="w-30 h-10 mb-10" />
//         </div>
//         {/* <h2 className="text-2xl font-bold mb-6 text-center">ورود به پنل</h2> */}

//         <form className="flex flex-col gap-3">
//           <div className="mb-4">
//             <Label className="block text-gray-700 mb-3">نام کاربری</Label>
//             <Input
//               type="text"
//               value={username}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                 setUsername(e.target.value);
//               }}
//             />
//           </div>
//           <div className="relative">
//             <Label className="block text-gray-700 mb-3">رمز عبور</Label>
//             <Input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                 setPassword(e.target.value);
//               }}
//             />
//             {showPassword === false ? (
//               <EyeIcon
//                 className="absolute top-9 left-2 h-4 w-4 text-gray-400"
//                 onClick={() => {
//                   setShowPassword(true);
//                 }}
//               />
//             ) : (
//               <EyeOff
//                 className="absolute top-9 left-2 h-4 w-4 text-gray-400"
//                 onClick={() => {
//                   setShowPassword(false);
//                 }}
//               />
//             )}
//           </div>
//           <div className="mb-4 flex justify-between items-center">
//             <a href="#" className="text-blue-500 hover:underline text-[12px]">
//               فراموشی رمز عبور
//             </a>
//           </div>
//           <div>
//             <Button
//               type="submit"
//               className="w-full bg-purple-600 text-white py-2 px-4 rounded focus:outline-none hover:bg-purple-900"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleLogin();
//               }}
//             >
//               ورود
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
