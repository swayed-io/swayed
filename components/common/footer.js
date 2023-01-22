import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import cogoToast from "cogo-toast";
import React from 'react'
import { useRouter } from "next/router";


export default function Footer(){
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    message : "",
   
    
  });
  const router = useRouter();

  const [disable,setDisable] =React.useState(false)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveinfo = async (e) => {
    e.preventDefault();
    setDisable(true)
    let validate = true;
    let message = '';

    if(user.name == ''){
      message = 'Please write your Name!'
      validate = false;

    }
    if(user.email == ''){
      message = 'Please write your email!'
      validate = false;

    }
   
if(validate){
  
    var payload = {
      records: [
        {
          fields: {
            name: user.name,
            email: user.email,
            message : user.message,
          
           
          },
        },
      ],
    };

    
    //upload count for code root
  cogoToast.loading("Sending...").then(async () => {
    await fetch("https://api.airtable.com/v0/app5jVJuOzdd1mrQe/contact", {
      body: JSON.stringify(payload),
      headers: {
        Authorization: "Bearer keyS46GYLYKR3YNPk",
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .catch((error) => cogoToast.error("Error "))
      .then((response)=>{
        
        cogoToast.success("Sent!");
        setDisable(false)
       

  }); 
  });
}else{
  cogoToast.warn(message)
  validate = true;
  setDisable(false)
}
};

 
    return (<footer className="text-white body-font bg-gradient-to-r from-[#3e2e81] via-[#3e67ac] to-[#3e80be] ">
    <div className="container px-5 py-4 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first mt-12" >
        
        <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-white">
          <img src="/img/logo_white.png" className="sm:justify-start justify-center sm:mx-0 mx-auto" alt="Logo in white"/>
          <h3 className="sm:text-3xl text-2xl mt-2 font-semibold">
          Share your opinion with the people who value it.
          </h3>
          <p className="sm:text-base text-sm mt-2 font-medium">
          It’s a free to signup and you could be applying to your first study in under 5 minutes.
          </p>
          <button className="rounded-full px-4 py-2 bg-secondary-100 font-bold text-white sm:mt-4 mt-2 sm:text-xl text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >Sign up</Link></button>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-white">
          <h2 className="title-font font-semibold text-center text-white tracking-widest sm:text-3xl text-2xl mt-12 mb-3">Important Links</h2>
          <nav className="list-none mb-10  text-center">
            <li>
            {router.pathname == '/' ? (<AnchorLink className="text-white hover:text-gray-800 text-base font-medium" href="#home" >Home</AnchorLink>) :  (<Link className="text-white hover:text-gray-800 text-base font-medium" href="/#home" >Home</Link>) }
          
            </li>
            <li className="mt-4">
            {router.pathname == '/' ? (<AnchorLink className="text-white hover:text-gray-800 text-base font-medium" href="#works" >How it Works</AnchorLink>) :  (<Link className="text-white hover:text-gray-800 text-base font-medium" href="/#works" >How it Works</Link>) }
        
            </li>
            <li className="mt-4">
            {router.pathname == '/' ? (<AnchorLink className="text-white hover:text-gray-800 text-base font-medium" href="#listings" >Current Projects</AnchorLink>) :  (<Link className="text-white hover:text-gray-800 text-base font-medium" href="/#listings" >Current Projects</Link>) }
  
            </li>
            <li className="mt-4">
            {router.pathname == '/' ? (<AnchorLink className="text-white hover:text-gray-800 text-base font-medium" href="#testimonial" >Testimonials</AnchorLink>) :  (<Link className="text-white hover:text-gray-800 text-base font-medium" href="/#testimonial" >Testimonials</Link>) }
       
            </li>
            <span className="inline-flex sm:ml-auto sm:mt-16 mt-8 justify-center sm:justify-start" >
          <a className="text-white">
            <img src="/img/fb_icon.svg" alt="fb"/>
          </a>
          <a className="ml-3 text-white">
            <img src="/img/ig_icon.svg" alt="ig"/>
          </a>
          <a className="ml-3 text-white">
            <img src="/img/twitter_icon.svg" alt="twitter" />
          </a>
         
          </span>
          </nav>
         
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-col flex-col justify-center items-end md:justify-start sm:mt-12 mt-0">
            <div className="relative  w-full xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <h3 className="font-semibold text-2xl mb-4 sm:invisible visible">Contact Us</h3>
              <input type="text" name="name"
                  value={user.name}
                  onChange={handleChange} id="footer-field" placeholder="Name"  className="sm:mt-2 mt-2 w-full bg-gray-100 bg-opacity-25 rounded-full placeholder-white text-opacity-60  focus:bg-transparent focus:ring-2 focus:ring-indigo-200  border-0 focus:border-indigo-500 text-base font-medium outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "/>
              <input type="text"  name="email"
                  value={user.email}
                  onChange={handleChange} id="footer-field" placeholder="Email"  className="sm:mt-2 mt-4 w-full bg-gray-100 bg-opacity-25 rounded-full placeholder-white text-opacity-60  focus:bg-transparent focus:ring-2 focus:ring-indigo-200 border-0 focus:border-indigo-500 text-base font-medium outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              <input type="text"  name="message"
                  value={user.message}
                  onChange={handleChange} id="footer-field" placeholder="Write a message"  className="sm:mt-2 mt-4 w-full bg-gray-100 bg-opacity-25 placeholder  placeholder-white rounded-xl h-24 text-opacity-60    focus:bg-transparent border-0  focus:ring-indigo-200 focus:border-indigo-500 font-medium text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <button onClick={saveinfo}
              disabled={disable} className="lg:mt-2 xl:mt-2 mt-4 w-full rounded-full text-xl font-semibold text-white bg-secondary-100 active:bg-green-500  py-2 px-6 focus:outline-none transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 disabled:opacity-50">Send</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className="bg-primary-100 flex flex-col">
      <div className="container px-5 py-2 mx-auto justify-center flex items-center sm:flex-row flex-col">
        
        <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4 sm:text-start text-center font-normal">Copyright © 2022, Shape the Future. All Rights Reserved.
         
        </p>
       
      </div>
    </div>
  </footer>)
}