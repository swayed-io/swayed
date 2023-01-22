import React from 'react'
import cogoToast from "cogo-toast";
import { getAuth } from "firebase/auth";

export default function TechnicalForm({page, setPage,formData, setFormData,saveinfo}) {
    const [disable,setDisable] =React.useState(false)
    let au = getAuth();
  let user = au.currentUser;
  const [data,setData] = React.useState({
    email : user.email,
      
  })

  let emailWelcome = ()=>{
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json', 
      }
    
      fetch('/api/server', {
        method: 'POST',
        headers: headers,
          body: JSON.stringify(data),
      }).then((res)=>{{
        console.log(res.status)
       
      }}).catch((err)=>{
        console.log(err)
      })

  }

    const [validation,setValidation] = React.useState({
        computer_with_webcam : '',
        internet_browser : '',
        computer_os : '',
        smarthphone_os : '',
        tablet_os : '',
    })
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-lg">
            
                <h1 className="text-center text-2xl font-bold text-[#413F9D] sm:text-3xl">
                    Technical
                </h1>
                


                <div action=""
                    className={`mt-6 mb-0 space-y-4 -lg p-8 shadow-2xl `}>
                    <p className="text-2xl font-medium text-[#413F9D]">Technical
                    </p>
                    <div className=''>
                        <label htmlFor="name" className="sm:text-lg text-md font-normal text-[#413F9D]">Do you have a computer with webcam? <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <select id="" name="" value={formData.computer_with_webcam} onChange={(e) =>setFormData({ ...formData, computer_with_webcam: e.target.value }) } className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${validation.computer_with_webcam}`}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>


                        </div>
                    </div>
                    <div className='flex flex-col py-4'>
                        <p className="sm:text-lg text-md font-normal text-[#413F9D]">Wich internet browser do you use? <span className="text-red-600">*</span></p>
                        <div><input type="radio" id="radio_browser" name="radio_browser" onChange={(e) =>setFormData({ ...formData, internet_browser: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.internet_browser}`} value="Chrome"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio1">
                                Chrome</label>
                        </div>
                        <div>
                            <input type="radio" id="radio_browser" name="radio_browser" onChange={(e) =>setFormData({ ...formData, internet_browser: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.internet_browser}`} value="Edge"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio2">
                                Edge</label>
                        </div>
                        <div>
                            <input type="radio" id="radio_browser" name="radio_browser" onChange={(e) =>setFormData({ ...formData, internet_browser: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.internet_browser}`} value="Firefox"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio3">
                                Firefox</label>
                        </div>
                        <div>
                            <input type="radio" id="radio_browser" name="radio_browser" onChange={(e) =>setFormData({ ...formData, internet_browser: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.internet_browser}`} value="Safari"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio4">
                                Safari</label>
                        </div>
                        <div>
                            <input type="radio" id="radio_browser" name="radio_browser" onChange={(e) =>setFormData({ ...formData, internet_browser: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.internet_browser}`} value="Other"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                Other</label>
                        </div>


                    </div>
                    <div className='flex flex-col py-4'>
                        <p className="sm:text-lg text-md font-normal text-[#413F9D]">What computer operating system do you use? <span className="text-red-600">*</span></p>
                        <div><input type="radio" id="radio1" name="computer_os" onChange={(e) =>setFormData({ ...formData, computer_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.computer_os}`} value="Chrome OS"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio1">
                                Chrome OS</label>
                        </div>
                        <div>
                            <input type="radio" id="radio2" name="computer_os" onChange={(e) =>setFormData({ ...formData, computer_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.computer_os}`} value="macOS"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio2">
                                macOS</label>
                        </div>
                        <div>
                            <input type="radio" id="radio3" name="computer_os" onChange={(e) =>setFormData({ ...formData, computer_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.computer_os}`} value="Windows"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio3">
                                Windows</label>
                        </div>
                        <div>
                            <input type="radio" id="radio4" name="computer_os" onChange={(e) =>setFormData({ ...formData, computer_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.computer_os}`} value="GNU/Linux or Unix"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio4">
                                GNU/Linux or Unix</label>
                        </div>
                        <div>
                            <input type="radio" id="radio5" name="computer_os" onChange={(e) =>setFormData({ ...formData, computer_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.computer_os}`} value="Other"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                Other</label>
                        </div>
                        <div>
                            <input type="radio" id="radio5" name="computer_os" onChange={(e) =>setFormData({ ...formData, computer_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.computer_os}`} value="I don&apos;t own a computer"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                I don&apos;t own a computer</label>
                        </div>
                    </div>

                    <div className='flex flex-col py-4'>
                        <p className="sm:text-lg text-md font-normal text-[#413F9D]">What smartphone operating system do you use? <span className="text-red-600">*</span></p>
                        <div><input type="radio" id="radio1" name="smartphone_os" onChange={(e) =>setFormData({ ...formData, smarthphone_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.smarthphone_os}`} value="Android"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio1">
                                Android</label>
                        </div>
                        <div>
                            <input type="radio" id="radio2" name="smartphone_os" onChange={(e) =>setFormData({ ...formData, smarthphone_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.smarthphone_os}`} value="iOS"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio2">
                                iOS</label>
                        </div>
                        <div>
                            <input type="radio" id="radio3" name="smartphone_os" onChange={(e) =>setFormData({ ...formData, smarthphone_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.smarthphone_os}`} value="Windows"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio3">
                                Windows</label>
                        </div>
                        <div>
                            <input type="radio" id="radio4" name="smartphone_os" onChange={(e) =>setFormData({ ...formData, smarthphone_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.smarthphone_os}`} value="Other"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio4">
                                Other</label>
                        </div>
                        <div>
                            <input type="radio" id="radio5" name="smartphone_os" onChange={(e) =>setFormData({ ...formData, smarthphone_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.smarthphone_os}`} value="I don&apos;t own a smartphone"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                I don&apos;t own a smartphone</label>
                        </div>

                    </div>
                    <div className='flex flex-col py-4'>
                        <p className="sm:text-lg text-md font-normal text-[#413F9D]">What tablet operating system do you use? <span className="text-red-600">*</span></p>
                        <div><input type="radio" id="radio1" name="tablet_os" onChange={(e) =>setFormData({ ...formData, tablet_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.tablet_os}`} value="Amazon Fire"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio1">
                                Amazon Fire</label>
                        </div>
                        <div>
                            <input type="radio" id="radio2" name="tablet_os" onChange={(e) =>setFormData({ ...formData, tablet_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.tablet_os}`} value="Android"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio2">
                                Android</label>
                        </div>
                        <div>
                            <input type="radio" id="radio3" name="tablet_os" onChange={(e) =>setFormData({ ...formData, tablet_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.tablet_os}`} value="iOS"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio3">
                                iOS</label>
                        </div>
                        <div>
                            <input type="radio" id="radio4" name="tablet_os" onChange={(e) =>setFormData({ ...formData, tablet_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.tablet_os}`} value="Windows"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio4">
                                Windows</label>
                        </div>
                        <div>
                            <input type="radio" id="radio5" name="tablet_os" onChange={(e) =>setFormData({ ...formData, tablet_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.tablet_os}`} value="Other"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                Other</label>
                        </div>
                        <div>
                            <input type="radio" id="radio5" name="tablet_os" onChange={(e) =>setFormData({ ...formData, tablet_os: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.tablet_os}`} value="I don&apos;t own a tablet"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                I don&apos;t own a tablet</label>
                        </div>
                    </div>


                    <button onClick={()=>{
                            let validate = true;
                            let message = ""
                            setDisable(true)

                            if(formData.computer_with_webcam === ''){
                                message = 'Please tell us if you have a webcam'
                                validate = false;
                                setValidation({computer_with_webcam : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.internet_browser === ''){
                                message = 'Please tell us what is your Internet browser '
                                validate = false;
                                setValidation({internet_browser : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.computer_os === ''){
                                message = 'Please tell us what is your computer OS'
                                validate = false;
                                setValidation({computer_os : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.smarthphone_os === ''){
                                message = 'Please tell us what is your Smarthphone OS'
                                validate = false;
                                setValidation({smarthphone_os : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.tablet_os === ''){
                                message = 'Please tell us what is your Tablet OS'
                                validate = false;
                                setValidation({tablet_os : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }


                        if(validate){
                            
                            saveinfo(formData)
                            emailWelcome();
                            setDisable(false)

                        }else{
                            cogoToast.warn(message)
                            validate = true;
                            setDisable(false)
                        }
                    }}  
                    disabled={disable} className="block w-full -lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50">
                        
                        Save
                    </button>
                    <button  className="block w-full border-2 border-gray-200 -lg bg-white px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-black   disabled:opacity-50" onClick={
                        () => {
                            setPage(page - 1);
                        }
                    }>
                        Back
                    </button>
                    


                </div>
            </div>
        </div>
    )
}
