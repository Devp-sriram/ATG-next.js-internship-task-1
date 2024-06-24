export default function Add(){
    return (
        <>
        <div className='mx-auto md:w-5/6 xl:w-2/3 border-2 border-gray-500 rounded-xl my-10 p-10'>
            <div className='flex mb-8 '>
                <img src="/add.png"/>
                <h1 className='font-bold text-lg my-auto'>Add your own</h1> 
            </div>
            <p className='tracking-wide leading-8 my-2'>Are you a teacher or Expert , can you rent out equipment, venue or event Ticket? Or you know someone who is one hobby clue then go ahead and add ypur  own page</p>

            <button className="border-2 border-gray-400 p-4 m-4 rounded-xl">Add now</button>
        </div>
        </>
    )
}