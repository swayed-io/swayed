import cogoToast from "cogo-toast";
import React from 'react'
export default function PersonalForm({page, setPage,formData, setFormData}) {

    const [validation,setValidation] = React.useState({
        birth:  '',
        city: '',
        gender: '',
        ethnicity : '',
        household_income : '',
        level_education : '',
        marital_status : '',
        Children : '',
        living_situation : '',
        home_owner : '',
    })

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-[#413F9D] sm:text-3xl">
                    Personal Form
                </h1>
                <h3 className="text-center text-xl font-semibold text-black sm:text-2xl"></h3>


                <div action=""
                    className={`mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl `}>
                    <p className="text-2xl font-medium text-[#413F9D]">Personal Form
                    </p>


                    <div>
                        <label htmlFor="password" className="sm:text-lg text-md font-normal text-[#413F9D]">Date of Birth <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <input type='date' id="birth" name="birth"  onChange={(e) =>setFormData({ ...formData, birth: e.target.value }) } className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.birth}`}/>


                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor="name" className="sm:text-lg text-md font-normal text-[#413F9D]">Current City <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <input type="text" id="city" name="city" onChange={(e) =>setFormData({ ...formData, city: e.target.value }) } className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter your Cityv ${validation.city}`}/>


                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor="name" className="sm:text-lg text-md font-normal text-[#413F9D]">Gender <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <select id="" name="" value={formData.gender} onChange={(e) =>setFormData({ ...formData, gender: e.target.value }) } className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${validation.gender}`}>
                                <option value="">Select...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>


                        </div>
                    </div>
                    <div className='flex flex-col py-4'>
                        <p className="sm:text-lg text-md font-normal text-[#413F9D]">Race / Ethnicity <span className="text-red-600">*</span></p>
                        <div><input type="radio" id="radio1" name="race" onChange={(e) =>setFormData({ ...formData, ethnicity: e.target.value }) } className={`form-radio border-primary-100 border-2 ${validation.ethnicity}`} value="White"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio1">
                                White</label>
                        </div>
                        <div>
                            <input type="radio" id="radio2" name="race" onChange={(e) =>setFormData({ ...formData, ethnicity: e.target.value }) } className={`form-radio border-primary-100 border-2 ${validation.ethnicity}`} value=" Black or African American"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio2">
                                Black or African American</label>
                        </div>
                        <div>
                            <input type="radio" id="radio3" name="race" onChange={(e) =>setFormData({ ...formData, ethnicity: e.target.value }) } className={`form-radio border-primary-100 border-2 ${validation.ethnicity}`} value="American Indian or Alaska Native"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio3">
                                American Indian or Alaska Native</label>
                        </div>
                        <div>
                            <input type="radio" id="radio4" name="race" onChange={(e) =>setFormData({ ...formData, ethnicity: e.target.value }) } className={`form-radio border-primary-100 border-2 ${validation.ethnicity}`} value="Asian"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio4">
                                Asian</label>
                        </div>
                        <div>
                            <input type="radio" id="radio5" name="race" onChange={(e) =>setFormData({ ...formData, ethnicity: e.target.value }) } className={`form-radio border-primary-100 border-2 ${validation.ethnicity}`} value="Native Hawaiian or Pacific Islander"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                Native Hawaiian or Pacific Islander</label>
                        </div>
                        <div>
                            <input type="radio" id="radio5" name="race" onChange={(e) =>setFormData({ ...formData, ethnicity: e.target.value }) } className={`form-radio border-primary-100 border-2 ${validation.ethnicity}`} value="Hispanic or Latino"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                Hispanic or Latino</label>
                        </div>
                        <div>
                            <input type="radio" id="radio5" name="race" onChange={(e) =>setFormData({ ...formData, ethnicity: e.target.value }) } className={`form-radio border-primary-100 border-2 ${validation.ethnicity}`} value="Self-Identify"/>
                            <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="radio5">
                                Self-Identify</label>
                        </div>
                        <input type="text" name="other" onChange={(e) =>setFormData({ ...formData, ethnicity: 'Self-Identify '+e.target.value }) } className={`w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm ${validation.ethnicity}`} placeholder='type...'/>
                    </div>
                    <div className=''>
                        <label htmlFor="name" className="sm:text-lg text-md font-normal text-[#413F9D]">Household income per year <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <select id="" name="" value={formData.household_income} onChange={(e) =>setFormData({ ...formData, household_income: e.target.value }) } className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${validation.household_income}`}>
                                <option value="">Select...</option>
                                <option value="$20,000 - $39,999">$20,000 - $39,999</option>
                                <option value="$40,000 - $59,999">$40,000 - $59,999</option>
                                <option value="$60,000 - $79,999">$60,000 - $79,999</option>
                                <option value="$80,000 - $99,999">$80,000 - $99,999</option>
                                <option value="$100,000 - $149,999">$100,000 - $149,999</option>
                                <option value="$150,000 - $199,999">$150,000 - $199,999</option>
                                <option value="$200,000+">$200,000+</option>

                            </select>


                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor="name" className="sm:text-lg text-md font-normal text-[#413F9D]">Highest level of education <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <select id="" name="" value={formData.level_education} onChange={(e) =>setFormData({ ...formData, level_education: e.target.value }) }  className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${validation.level_education}`}>
                                <option value="">Select...</option>
                                <option value="Bachelor's degree">Bachelor&apos;s degree</option>
                                <option value="Master’s degree">Master&apos;s degree</option>
                                <option value="Professional degree">Professional degree</option>
                                <option value="Doctorate degree">Doctorate degree</option>

                            </select>


                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor="name" className="sm:text-lg text-md font-normal text-[#413F9D]">Marital Status <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <select id="" name="" value={formData.marital_status} onChange={(e) =>setFormData({ ...formData, marital_status: e.target.value }) } className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${validation.marital_status}`}>
                                <option value="">Select...</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Widowed">Widowed</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Separated">Separated </option>

                            </select>


                        </div>
                    </div>
                    <div className='py-4'>
                        <p className="sm:text-lg text-md font-normal text-[#413F9D]">Children <span className="text-red-600">*</span></p>
                        <input type="radio" id="checkbox1" name="children" onChange={(e) =>setFormData({ ...formData, children: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.children}`} value="No children"/>
                        <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="checkbox1">
                            No children</label><br/>
                        <input type="radio" id="checkbox2" name="children" onChange={(e) =>setFormData({ ...formData, children: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.children}`} value="Infant"/>
                        <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="checkbox2">
                            Infant</label><br/>
                        <input type="radio" id="checkbox3" name="children" onChange={(e) =>setFormData({ ...formData, children: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.children}`} value="Toddler"/>
                        <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="checkbox3">
                            Toddler</label><br/>
                        <input type="radio" id="checkbox4" name="children" onChange={(e) =>setFormData({ ...formData, children: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.children}`} value="Preschooler"/>
                        <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="checkbox4">
                            Preschooler</label><br/>
                        <input type="radio" id="checkbox4" name="children" onChange={(e) =>setFormData({ ...formData, children: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.children}`} value="School aged"/>
                        <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="checkbox4">
                            School aged</label><br/>
                        <input type="radio" id="checkbox4" name="children" onChange={(e) =>setFormData({ ...formData, children: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.children}`} value="Adolescent"/>
                        <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="checkbox4">
                            Adolescent</label><br/>
                        <input type="radio" id="checkbox4" name="children" onChange={(e) =>setFormData({ ...formData, children: e.target.value }) } className={`form-radio  border-primary-100 border-2 ${validation.children}`} value="Adult"/>
                        <label className='sm:ml-2 font-medium sm:text-lg text-sm' htmlFor="checkbox4">
                            Adult</label><br/>


                    </div>
                    <div className=''>
                        <label htmlFor="name" className="sm:text-lg text-md font-normal text-[#413F9D]">Living situation <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <select id="" name="" value={formData.living_situation} onChange={(e) =>setFormData({ ...formData, living_situation: e.target.value }) } className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${validation.living_situation}`}>
                                <option value="">Select...</option>
                                <option value="Live alone">Live alone</option>
                                <option value="Live in household with other people">Live in household with other people</option>
                                <option value="Live in residential facility where meals and household help">Live in residential facility where meals and household help</option>
                                <option value="Live in facility such as nursing home">Live in facility such as nursing home</option>
                                <option value="Temporarily staying with a relative or friend">Temporarily staying with a relative or friend</option>
                                <option value="Temporarily staying in a shelter or homeless">Temporarily staying in a shelter or homeless</option>

                            </select>


                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor="name" className="sm:text-lg text-md font-normal text-[#413F9D]">Home Owner <span className="text-red-600">*</span></label>

                        <div className="relative mt-1">
                            <select id="" name="" value={formData.home_owner} onChange={(e) =>setFormData({ ...formData, home_owner: e.target.value }) } className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                                <option value="">Select...</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>

                            </select>


                        </div>
                    </div>


                    <button  className="block w-full rounded-lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50" onClick={
                        () => {
                            let validate = true;
                            let message = ""

                            if(formData.birth === ''){
                                message = 'Please set your birth'
                                validate = false;
                                setValidation({birth : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.city === ''){
                                message = 'Please write your city'
                                validate = false;
                                setValidation({city : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                 
                            }
                            if(formData.gender === ''){
                                message = 'Please set your gender'
                                validate = false;
                                setValidation({gender : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.ethnicity === ''){
                                message = 'Please set your race'
                                validate = false;
                                setValidation({ethnicity : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.household_income === ''){
                                message = 'Please set your household income'
                                validate = false;
                                setValidation({household_income : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.level_education === ''){
                                message = 'Please set your level of education'
                                validate = false;
                                setValidation({level_education : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.marital_status === ''){
                                message = 'Please set your marital status'
                                validate = false;
                                setValidation({marital_status : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.children === ''){
                                message = 'Please tell us about your children'
                                validate = false;
                                setValidation({children : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.living_situation === ''){
                                message = 'Please set your living situation'
                                validate = false;
                                setValidation({living_situation : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }
                            if(formData.home_owner === ''){
                                message = 'Please tell us if you are a home owner'
                                validate = false;
                                setValidation({home_owner : 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'})
                                
                            }

                            if(validate){
                                setPage(page + 1);

                            }else{
                                cogoToast.warn(message)
                                validate = true;
                            }
                            
                        }
                    }>
                        Next
                    </button>
                    <button  className="block w-full border-2 border-gray-200 rounded-lg bg-white px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-black   disabled:opacity-50" onClick={
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
