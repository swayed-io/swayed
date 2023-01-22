
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  return (
    <div className=" top-0 bg-white  ">
    <nav className="w-full ">
  <div className="py-5 md:py-2  mx-auto px-6  flex items-center justify-between">
  
    <img src="/img/logo_blue.png" className='sm:ml-12 ml-0 sm:w-24 w-36' alt="logo"/>
  
    <div>
      
      <button  onClick={() => setNavbarOpen(!navbarOpen)} className="sm:inline md:hidden ">
      <img src="/img/hamburguer_icon.svg" className='ml-48' />
      </button>
      <div id="menu" className="md:inline sm:inline lg:inline hidden">
      
        <ul className="flex text-3xl md:text-base items-center  py-2 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
          
          <li className="mr-5  text-black   hover:text-secondary-100 cursor-pointer text-base">
          {router.pathname == '/' ? (<AnchorLink href="#home" >Home</AnchorLink>) :  (<Link href="/#home" >Home</Link>) }
          </li>
          <li className="mr-5  text-black  hover:text-secondary-100 cursor-pointer text-base">
          {router.pathname == '/' ? (<AnchorLink href="#works" >How it Works</AnchorLink>) :  (<Link href="/#works" >How it Works</Link>) }

          </li>
          <li className="mr-5  text-black  hover:text-secondary-100 cursor-pointer text-base">
          {router.pathname == '/' ? (<AnchorLink href="#listings" >Current Projects</AnchorLink>) :  (<Link href="/#listings" >Current Projects</Link>) }

           
          </li>
          <li className="mr-5  text-black  hover:text-secondary-100 cursor-pointer text-base">
          {router.pathname == '/' ? (<AnchorLink href="#testimonial" >Testimonials</AnchorLink>) :  (<Link href="/#testimonial" >Testimonials</Link>) }
           
          </li>
         
        </ul>
      </div>
    </div>
    <div className="flex gap-2">
    <button className="inline-flex items-center sm:visible invisible  px-6 py-2 bg-white  text-black rounded-full border-2 border-black border-opacity-60  focus:outline-none   text-base  md:mt-0 transition ease-in-out delay-150 0 hover:-translate-y-1 hover:scale-110"><Link href="/signin" >SigIn
       
       </Link></button>
    <button className="inline-flex items-center sm:visible invisible  px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  text-base  md:mt-0 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110"><Link href="/signup" >Get Started
       
       </Link></button>
    </div>
    
  </div>
  
</nav>
<div className={!navbarOpen ? "hidden" : " inline"}>
        <nav className=" flex flex-col   text-base sm:hidden bg-secondary py-2 shadow-md border-b-2 border-gray-700   ">

          <ul className="ml-8">
        <li className="text-black  cursor-pointer text-lg lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
        {router.pathname == '/' ? (<AnchorLink href="#home" >Home</AnchorLink>) :  (<Link href="/#home" >Home</Link>) }
          </li>
          <li className="text-black  cursor-pointer text-lg lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
          {router.pathname == '/' ? (<AnchorLink href="#works" >How it Works</AnchorLink>) :  (<Link href="/#works" >How it Works</Link>) }
          </li>
          <li className="text-black  cursor-pointer text-lg lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
          {router.pathname == '/' ? (<AnchorLink href="#listings" >Current Projects</AnchorLink>) :  (<Link href="/#listings" >Current Projects</Link>) }
          </li>
          <li className="text-black  cursor-pointer text-lg lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
          {router.pathname == '/' ? (<AnchorLink href="#testimonial" >Testimonials</AnchorLink>) :  (<Link href="/#testimonial" >Testimonials</Link>) }
          </li>
          </ul>
          <button className=" mt-4 inline-flex items-center text-center justify-center w-full  px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  text-base  md:mt-0"><Link href="/signup" >Get Started
       
       </Link></button>
        </nav>
      </div>
  </div>
  );
}


