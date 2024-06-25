export default function Connect(){
    return (
        <>
        <div className='grid lg:grid-cols-2 gap-2 mx-auto'>


            <div className="mx-auto lg:mx-0 md:w-5/6 xl:w-2/3 lg:ml-auto h-72 border-2 border-gray-400 rounded-md hover:bg-customVoilet hover:text-white group">
                <div className='flex'> 
                    <img src='/group.png' className="px-5 my-2 transition-all duration-300 ease-in-out group-hover:hidden"/>
                    <img src='/light-group.png' className="px-5 my-2 transition-all duration-300 ease-in-out hidden group-hover:block"/>

                    <h1 className="my-auto text-xl">People</h1> 
                    
                </div>
                <p className="p-5 tracking-wide w-5/6 leading-8">Find a teacher,coach or Expert for your hobby interest in your locality ,Find a partner ,teammate,acomponishand collabration</p>
                <button className="border-2 ring-1 ring-white border-customVoilet hover:border-white text-lg rounded-xl mx-5 px-5 my-2">connect</button>
            </div>

            <div className="mx-auto lg:mx-0 md:w-5/6 xl:w-2/3 lg:mr-auto h-72 border-2 border-gray-400 rounded-md hover:bg-customGreen hover:text-white group">
                <div className='flex'> 

                    <img src='/location.png' className="px-5 my-2 transition-all duration-300 ease-in-out group-hover:hidden"/> 
                    <img src='/light-location.png' className="px-5 my-2 transition-all duration-300 ease-in-out hidden group-hover:block"/> 
                    <h1 className="my-auto text-xl ">Place</h1> 
                    
                </div>
                <p className="p-5 tracking-wide w-5/6 leading-8">Find a class,school,playgroound auditorium studio,shop or an event venue book a slot at venues that allow booking though hobby cue </p>
                <button className="border-2 ring-1 ring-white border-customGreen hover:border-white  text-lg rounded-xl mx-5 px-5 my-2">Meet up</button>
            </div>

            <div className="mx-auto lg:mx-0 md:w-5/6 xl:w-2/3 lg:ml-auto h-72 border-2 border-gray-400 rounded-md hover:bg-customRed hover:text-white group">
                <div className='flex'> 

                    <img src='/bag.png' className="px-5 my-2 transition-all duration-300 ease-in-out group-hover:hidden"/> 
                    <img src='/light-bag.png' className="px-5 my-2 transition-all duration-300 ease-in-out hidden group-hover:block"/> 
                    <h1 className="my-auto text-xl">Product</h1> 
                    
                </div>
                <p className="p-5 tracking-wide w-5/6 leading-8">Find a class,school,playgroound auditorium studio,shop or an event venue book a slot at venues that allow booking though hobby cue </p>
                <button className="border-2 ring-1 ring-white border-customRed hover:border-white text-lg rounded-xl mx-5 px-5 my-2">get it </button>
            </div>

            <div className="mx-auto lg:mx-0 md:w-5/6 xl:w-2/3 lg:mr-auto h-72 border-2 border-gray-400 rounded-md hover:bg-customBlue hover:text-white group">
                <div className='flex'>

                    <img src='/event.png' className="px-5 my-2 transition-all duration-300 ease-in-out group-hover:hidden"/> 
                    <img src='/light-event.png' className="px-5 my-2 transition-all duration-300 ease-in-out hidden group-hover:block"/> 
                    <h1 className="my-auto text-xl">Program</h1> 
                    
                </div>
                <p className="p-5 tracking-wide w-5/6 leading-8">Find a class,school,playgroound auditorium studio,shop or an event venue book a slot at venues that allow booking though hobby cue </p>
                <button className="border-2 ring-1 ring-white border-customBlue hover:border-white text-lg rounded-xl mx-5 px-5 my-2">Join now</button>
            </div>
        </div>
        </>
    )
}