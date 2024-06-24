import Image from 'next/image'
export default function Home() {
  return (
    <>  
     <div className="flex flex-col lg:flex-row justify-between m-5 xl:m-5">
     <div className='w-full lg:w-2/3 mx-5 xl:mx-20 my-10'>
      <h1 className="font-bold text-3xl my-3"><i>Explore your <span className="text-customVoilet">hobby</span>&nbsp;or<span className="customBlue">&nbsp;passion</span></i></h1>
      <p className='text-gray-600 text-xl tracking-wide w-5/6 leading-8 my-5'>Signin to interact with a community of fellow hobbists and an eco-system of experts,teachers,supplies clases,workshops ans places to pratice,paticipate or perform ,
        your hobby may be about visual or performing arts, sports, games, garderning, Model making ,cooking ,indoor and outdoor activities</p>
      <p className='text-gray-600 text-xl hidden lg:block tracking-wide w-5/6 leading-8 my-5'>If you are expert or seller , you can add your listing and promote yourself, youe strudent , products and services or event hop on your Hobby horse and enjoy the ride</p>
      <Image
      src='/hero-pic.png'
      alt= 'hero-banner'
      width={698}
      height={216}
      className='w-5/6 mt-10'
      />
    </div>
    <div className='w-full lg:w-1/3 mr-20 my-12'>
      <div className='font-medium'>
        <a className="text-2xl mx-4 hover:text-customVoilet hover:underline">Sign in</a> 
        <a className="text-2xl mx-4 hover:text-customVoilet hover:underline">Join in</a> 
      </div>
    
      <div className='mx-5 my-5'>

        <div className='lg:hidden'>
              <div>
                  <input type="email" placeholder=' email'  className='w-full h-20 lg:h-10 my-4 border-2 border-gray-400 rounded-xl'/>
                  <input type="password" placeholder=' password'className='w-full h-20 lg:h-10 my-4 border-2 border-gray-400 rounded-xl'/>
                    <div className='flex justify-between'>
                    <div><input type="checkbox"/>Remeber me</div> 
                      <a className='flex'>
                        <Image
                        src="/lock.png"
                        alt='lock'
                        width={16}
                        height={16}
                        className='my-auto'/>
                        Forget Password
                      </a>
                    </div>
              </div>
          </div>
        <div className='hidden lg:block'>
          <button className='w-full'>
            <Image
            src='/fb.png'
            alt='fb'
            width={410}
            height={40}
            className="w-full h-auto mx-auto my-4"/>
          </button>
          <button className='w-full'>
            <Image
            src='/google.png'
            alt='google'
            width={410}
            height={40}
            className="w-full h-auto mx-auto my-4"/>
          </button>
        </div>

        <p className='flex justify-center mx-auto my-4'>
          <span className="flex justify-center items-center mt-[12px] w-24 h-[1px] rounded bg-gray-600"></span>
          or connect with
          <span className="flex justify-center items-center mt-[12px] w-24 h-[1px] rounded bg-gray-600"></span>
        </p>
        <div className='hidden lg:block'>
        <input type="email" placeholder=' email'  className='w-full h-10 my-4 border-2 border-gray-400 rounded-xl'/>
        <input type="password" placeholder=' password'className='w-full h-10 my-4 border-2 border-gray-400 rounded-xl'/>
        <div className='flex justify-between'>
         <div><input type="checkbox"/>&nbsp;Remeber me</div> 
        <a className='flex'>
          <Image
          src="/lock.png"
          alt='lock'
          width={16}
          height={16}
          className='my-auto'/>
          Forget Password
        </a>
        </div>
        </div>

        <div className='lg:hidden'>
          <button className='w-full'>
            <Image
            src='/fb.png'
            alt='fb'
            width={410}
            height={40}
            className="w-full h-auto mx-auto my-4"/>
          </button>
          <button className='w-full'>
            <Image
            src='/google.png'
            alt='google'
            width={410}
            height={40}
            className="w-full h-auto mx-auto my-4"/>
          </button>
        </div>

        <button className='bg-customVoilet text-white my-8 w-full h-10 rounded-xl'>continue</button>
      </div>
    </div>
   </div>

   
   </>
  );
}
