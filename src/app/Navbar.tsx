import Image from 'next/image'
export default function navbar(){

   

    return(
        <>
        <div className="flex justify-between w-full h-20 border-2 border-gray-300 ">
            <Image
            src='/icon.png'
            alt='icon'
            width={298}
            height={60}
            className='ml-2 lg:block xl:ml-16'
            />
    
   
            <Image
            src='/sm-icon.png'
            alt='icon'
            width={60}
            height={60}
            className='hidden ml-2'
            />
    
            <div className='hidden md:flex my-auto rounded-2xl border-2 border-gray-200'>
                <input 
                    type="search"
                    placeholder='  search here' 
                    className='h-11 rounded-l-2xl'
                />
                <button>
                    <Image
                    src='/search.png'
                    alt='search'
                    width={40}
                    height={40}
                    />
                </button>
            </div>

            <div className='flex gap-2 xl:gap-4 mr-1 xl:mr-12'>
                <div className='hidden lg:flex my-auto'>
                        <Image
                        src='/explore.png'
                        alt='icon'
                        width={24}
                        height={24}
                        className='my-auto'
                        />
                        <h1 className='ml-1'>Explore</h1>
                        <Image
                        src='/drop.png'
                        alt='icon'
                        width={12}
                        height={8}
                        className='my-auto ml-2'
                        />
                </div>


                <div className='hidden lg:flex my-auto'>
                        <Image
                        src='/explore.png'
                        alt='icon'
                        width={24}
                        height={24}
                        className='my-auto'
                        />
                        <h1 className='ml-1'>Hobies</h1>
                        <Image
                        src='/drop.png'
                        alt='icon'
                        width={12}
                        height={8}
                        className='my-auto ml-2 mr-4'
                        />
                </div>
                
                <div className='flex justify-between gap-8 mr-4'>

                <Image
                src='/sm-search.png'
                alt='search'
                width={14}
                height={18}
                className='my-auto md:hidden'
                />

                <Image
                src='/save.png'
                alt='save'
                width={14}
                height={18}
                className='my-auto hidden md:block'
                />

                <Image
                src='/notification.png'
                alt='notification'
                width={24}
                height={24}
                className='my-auto'
                />

                <Image
                src='/shop.png'
                alt='shop'
                width={24}
                height={24}
                className='my-auto hidden md:block'
                />

                <Image
                src='/menu.png'
                alt='menu'
                width={24}
                height={24}
                className='my-auto md:hidden'
                />
                </div>

                <button className='hidden md:block text-customVoilet border-2 border-customVoilet rounded-xl h-10 my-auto w-16 xl:w-28'>Signin</button>


            </div>

        </div>
    
        </>
    )
}