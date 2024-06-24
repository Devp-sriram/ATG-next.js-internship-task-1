export default function testimonial(){
    return (
        <>
        <div className='mx-auto md:w-5/6 xl:w-2/3 border-2 border-gray-500 rounded-xl my-10 p-10'>
            <div className='flex mb-8 '>
                <img src="/quotes.png"/>
                <h1 className='font-bold text-lg my-auto'>Testimonial</h1> 
            </div>
            <p className='tracking-wide leading-8 my-2'> In a fast growing and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis iure tempora, distinctio, eum voluptas ut blanditiis nihil repudiandae, ducimus soluta qui aperiam. Fuga obcaecati vero ad. Debitis ut atque temporibus! Are you a teacher or Expert , can you rent out equipment, venue or event Ticket? Or you know someone who is one hobby clue then go ahead and add ypur own page Are you a teacher or Expert , can you rent out equipment, venue or event Ticket? Or you know someone who is one hobby clue then go ahead and add ypur own pageAre you a teacher or Expert , can you rent out equipment, venue or event Ticket? Or you know someone who is one hobby clue then go ahead and add ypur own pageAre you a teacher or Expert , can you rent out equipment, venue or event Ticket? Or you know someone who is one hobby clue then go ahead and add ypur own page</p>

            <div className="flex flex-col lg:flex-row justify-between my-10 "><img src="/audio.png" className='w-2/3 hidden lg:block '/><img src="/sm-audio.png" className="lg:hidden w-2/3 my-5 mx-auto"/><img src="/port.png" className="w-1/2 my-5 mx-auto"/></div>
        </div>


        <div className="lg:bg-customHero mt-10">
            <h1 className="font-bold text-3xl ml-24 my-5 mt-20"><i>Your <span className="text-customVoilet"> Hobby</span>, Your <span className="text-customBlue">Community...</span></i></h1>
            <button className="ml-24 my-5 rounded-xl text-white bg-customVoilet p-2">get Started</button>
            <img src="/footer-pic.png" className="mx-5 w-full " />
        </div>
        </>
    )
}
