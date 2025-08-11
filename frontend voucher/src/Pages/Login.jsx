// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { FaCheck } from 'react-icons/fa';
// import { Eye, EyeOff } from 'lucide-react';

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [checked, setChecked] = useState(false);
//   const [visible, setVisible] = useState(false);

//   const onSubmit = (data) => {
//     const formData = {
//       ...data,
//       rememberMe: checked
//     };
//     console.log("Submitted Data:", formData);
//     // TODO: Replace with real authentication logic
//   };

//   return (
//     <div className="bg-emerald-900 min-h-screen flex items-center justify-center px-4">
//       <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md space-y-6">
//         {/* Header */}
//         <div className="text-center space-y-2">
//           <img src="govlogo.png" alt="logo" className="mx-auto h-12" />
//           <h1 className="text-lg font-bold text-gray-700 uppercase">Office of the Accountant General</h1>
//           <h2 className="text-sm text-gray-500">Account and Finance</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="janedoe@gmail.com"
//               autoComplete="email"
//               {...register("email", { required: "Email is required" })}
//               className={`w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 ${
//                 errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#F24B09]'
//               }`}
//             />
//             {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
//           </div>

//           {/* Password */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <div className="relative">
//               <input
//                 id="password"
//                 type={visible ? 'text' : 'password'}
//                 placeholder="Enter your password"
//                 autoComplete="current-password"
//                 {...register("password", { required: "Password is required" })}
//                 className={`w-full border rounded-lg p-3 text-sm pr-10 focus:outline-none focus:ring-2 ${
//                   errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#F24B09]'
//                 }`}
//               />
//               <span
//                 onClick={() => setVisible(!visible)}
//                 className="absolute top-3 right-3 text-gray-500 cursor-pointer"
//               >
//                 {visible ? <EyeOff size={18} /> : <Eye size={18} />}
//               </span>
//             </div>
//             {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
//           </div>

//           {/* Remember Me + Forgot Password */}
//           <div className="flex justify-between items-center">
//             <div
//               className="flex items-center space-x-2 text-sm cursor-pointer"
//               onClick={() => setChecked(!checked)}
//             >
//               <div
//                 className={`w-5 h-5 flex items-center justify-center rounded border transition ${
//                   checked ? 'bg-white border-black' : 'bg-white border-gray-300'
//                 }`}
//               >
//                 {checked && <FaCheck className="text-black text-sm" />}
//               </div>
//               <span className="text-gray-800 select-none">Remember me</span>
//             </div>
//             <p className="text-sm text-[#F24B09] cursor-pointer">Forgot password?</p>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#F24B09] text-white py-2 rounded hover:opacity-90 transition duration-150"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

 function Voucherinputfields() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
   <div className="bg-emerald-900 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg  space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <img src="govlogo.png" alt="logo" className="mx-auto h-12" />
          <h1 className="text-lg font-bold text-gray-700 uppercase">Office of the Accountant General</h1>
          <h2 className="text-sm text-gray-500">Account and Finance</h2>
        </div>
      <form
        onSubmit={handleSubmit}>
          
          {/* Full Name */}
        <div className="mb-1">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 bg-[#f5f2f2] rounded mt-1"
            placeholder="Jane Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-[#f5f2f2] rounded mt-1"
            placeholder="janedoe@gmail.com"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <label className="block text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 bg-[#f5f2f2] rounded mt-1 pr-10"
            placeholder="*******"
            required
          />
          <span
            className="absolute right-3 top-10 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="mb-4 relative">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 bg-[#f5f2f2] rounded mt-1 pr-10"
            placeholder="*******"
            required
          />
          <span
            className="absolute right-3 top-10 cursor-pointer text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Remember Me */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className=" mr-2"
          />
          <label className="text-gray-700">Remember Me</label>
        </div>


 {/* Submit Button */}
        <button
            type="submit"
            className="w-69 h-10 ml-14 bg-[#F24B09] text-white py-2 rounded-xl hover:opacity-90 transition duration-150"
          >
            Sign Up
          </button>

       
       
      </form>
    </div>
    </div>
  );
}


export default Voucherinputfields
