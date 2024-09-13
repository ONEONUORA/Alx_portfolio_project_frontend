
import { Link } from 'react-router-dom';
import page from '../assets/react404.jpeg';
import brandlogo from "../assets/logo (1).png"


const PageNotFound = () =>{
    return(
        <>
          

                <section className='h-cover relative p-10 flex flex-col items-center gap-20 text-center' >
                   
                      <img src={page} className='select-none border-2 border-grey aspect-square w-72 object-cover rounded'/>
                          <h1 className='text-4xl font-gelasio leading-7'>Page Not Found</h1>
                           <p className='text-dark-grey text-xl leading-7 -mt-8'>The page you are searching for does not exist<br/> 
                            <Link to='/' className='text-black underline'>Back To Home</Link>
                           </p>

                        <div className='mt-auto'>
                           <img src={brandlogo}  alt='Brand Logo' className='h-20  object-contain block mx-auto select-none'/>
                           <p className='mt-5 text-dark-grey'>Dive into a World of Token Rates: Explore Millions from Across the Globe!</p>
                           <h6 className='mt-3 font-bold'>Token Flow</h6>
                        </div>
                          
            
                </section>
                
      
        </>
    )
}


export default PageNotFound