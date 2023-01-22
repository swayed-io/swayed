import React from 'react'
import {InlineShareButtons} from 'sharethis-reactjs';
import { getAuth, signOut } from "firebase/auth";
import cogoToast from "cogo-toast";

const auth = getAuth();

export default function Thankyou(){
   

     
       
    
         return (
      
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-[#413F9D] sm:text-3xl">
          
          </h1>
          <div className={`mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl `}>
         
         <h3 className='text-xl font-medium'>Uh-Oh! We were so excited to have you on board with us that we didn&apos;t notice our servers were melting from all the unexpected volume . Our apologies!</h3>
         
         <p className='text-xl font-medium'>But don&apos;t worry! We value our new participants 🙌</p>
         <p className='text-xl font-medium'>Please stay tuned to your email while we fix this. We&apos;ll be sending  you our best opportunities as of yet to make up for it 😊.<br/><br/>Share this link with a friend so you both can earn! 🤜🤛</p>
         
        </div>
         <InlineShareButtons
         config={{
           alignment: 'center',  // alignment of buttons (left, center, right)
           color: 'social',      // set the color of buttons (social, white)
           enabled: true,        // show/hide buttons (true, false)
           font_size: 16,        // font size for the buttons
           labels: 'cta',        // button labels (cta, counts, null)
           language: 'en',       // which language to use (see LANGUAGES)
           networks: [           // which networks to include (see SHARING NETWORKS)
             'facebook',
             'twitter',
             'whatsapp',
             'linkedin',
             'messenger'
           ],
           padding: 12,          // padding within buttons (INTEGER)
           radius: 4,            // the corner radius on each button (INTEGER)
           show_total: false,
           size: 40,             // the size of each button (INTEGER)

           // OPTIONAL PARAMETERS
           url: 'https://swayed.io/', // (defaults to current url)
           image: 'https://swayed.io/thumb.png',  // (defaults to og:image or twitter:image)
           description: 'Tired of expressing your opinion without getting paid? Try Swayed today and earn up to $400 per hour!',       // (defaults to og:description or twitter:description)
           title: 'Swayed',            // (defaults to og:title or twitter:title)
           message: 'Tired of expressing your opinion without getting paid? Try Swayed today and earn up to $400 per hour!',     // (only for email sharing)
           subject: 'Tired of expressing your opinion without getting paid? Try Swayed today and earn up to $400 per hour!',  // (only for email sharing)
           username: '' // (only for twitter sharing)
         }}
       />
       <button className='sm:mt-4 mt-2 block w-full rounded-lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50' onClick={()=>{
        signOut(auth).then(() => {
          // Sign-out successful.
          cogoToast.success("See you soon!");
        }).catch((error) => {
          // An error happened.
          cogoToast.error("Error!");
        })
       }}>Log out</button>

         
      
        </div>
      </div>
      )
}