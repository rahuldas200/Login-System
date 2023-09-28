import React, { useState ,useRef} from 'react'

export default function Otp() {
    const [values ,setValues] = useState(['','','','','','','']);
    const inputRefs = [
        useRef(), useRef(), useRef(), useRef(), useRef(), useRef()
    ];
    // console.log(key);

    const handleChange = (e, index) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue) && newValue.length <= 1) {
          const newValues = [...values];
          newValues[index] = newValue;
          setValues(newValues);
    
          if (newValue.length === 1) {
            // Automatically move focus to the next input field
            if (index < 5) {
              inputRefs[index + 1].current.focus();
            }
          } 
          else if (newValue.length === 0) {
            // Handle Backspace key to move focus to the previous input field
            if (index > 0) {
              inputRefs[index - 1].current.focus();
            }
          }
        }
        console.log(e.key);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const otp = values.join('');
        // Handle OTP verification or submission here
        if(otp.length != 6){
            alert("Enter the 6 digit otp");
        }
        console.log('Entered OTP:', otp);
    };


  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-slate-600'>
        <div className='max-w-[30rem] bg-gray-800 rounded-md p-6'>
            <h3 className='text-white text-center text-3xl'>Verify</h3>
            <p className='text-center text-white m-4'>Your code was send to your email</p>

            <form className='flex flex-col'
                onSubmit={handleSubmit}>
               <div className='flex flex-grow gap-3'>
                    <input className='max-w-[3rem] bg-slate-400 rounded-md text-center h-10 mb-2 text-black font-bold text-lg'
                      maxLength={1}
                      type='text'
                      value={values[0]}
                      onChange={(e) => handleChange(e,0)}
                      ref={inputRefs[0]}             
                    />

                    <input className='max-w-[3rem] bg-slate-400 rounded-md text-center h-10 mb-2 text-black font-bold text-lg '
                        maxLength={1}
                        type='text'
                        value={values[1]}
                        onChange={(e) => handleChange(e,1)}

                        ref={inputRefs[1]}    
                    />

                    <input className='max-w-[3rem] bg-slate-400 rounded-md text-center h-10 mb-2 text-black font-bold text-lg '
                        maxLength={1}
                        type='text'
                        value={values[2]}
                        onChange={(e) => handleChange(e,2)}
                        ref={inputRefs[2]}
                    />

                    <input className='max-w-[3rem] bg-slate-400 rounded-md text-center h-10 mb-2 text-black font-bold text-lg '
                        maxLength={1}
                        type='text'
                        value={values[3]}
                        onChange={(e) => handleChange(e,3)}
                        ref={inputRefs[3]}   
                    />

                    <input className='max-w-[3rem] bg-slate-400 rounded-md text-center h-10 mb-2 text-black font-bold text-lg '
                         maxLength={1}
                         type='text'
                         value={values[4]}
                         onChange={(e) => handleChange(e,4)}
                         ref={inputRefs[4]}
                    />

                    <input className='max-w-[3rem] bg-slate-400 rounded-md text-center h-10 mb-2 text-black font-bold text-lg '
                        maxLength={1}
                        type='text'
                        value={values[5]}
                        onChange={(e) => handleChange(e,5)}
                        ref={inputRefs[5]} 
                    />
               </div>
               <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300
                     dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3"
                    type='submit'
                    >
                    Verify
               </button>
            </form>

            <p className='text-white mt-5 text-center'>Didn't received code?<span className="text-blue-900 cursor-pointer">   Request again</span></p>

        </div>
      
    </div>
  )
}
