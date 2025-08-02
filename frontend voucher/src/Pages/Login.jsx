import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'





function Login({label}) {
const [checked, setChecked] = useState(false)

  return (
    <div className='bg-emerald-900 w-[1440px] h-[812px] '>
        <div className='bg-white '>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <form action="">
             <div className=''>
              <label className='block' htmlFor="">Name</label>
              <input className='border-1 w-[381px] rounded-[12px] p-[12px] gap-[10px] h-[42px] ' type="text" placeholder='janedoe@gmail.com' />
             </div>
             <div>
              <label className='block' htmlFor=""> Password</label>
              <input className='border-1 w-[381px] rounded-[12px] p-[12px] gap-[10px] h-[42px] ' type="password" placeholder='Input your password' required />
             </div>
              <p className='text-[#F24B09]'>Forgot password?</p>
              <div className='flex'>
                <label className="flex items-center space-x-3 cursor-pointer select-none">
                  <div
                    className={`w-5 h-5 flex items-center justify-center rounded border transition 
                      ${checked ? 'bg-white border-black' : 'bg-white border-gray-300'}`}
                    onClick={() => setChecked(!checked)}>
                    {checked && <FaCheck className="text-black text-sm" />}
                  </div>
                  <span className="text-gray-800">{label}</span>
                </label>
                <p>Remember me</p>
              </div>

            </form>
          </div>
        </div>
    </div>
  )
}

export default Login