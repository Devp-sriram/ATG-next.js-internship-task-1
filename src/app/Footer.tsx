export default function footer(){
    return (
        <>
        <div className="m-12 flex flex-col md:flex-row">
        <div className='flex flex-col md:flex-row justify-evenly w-full  lg:w-2/3'>
            <div>
                <ul className="my-5">
                    <li className="font-bold my-4">Hobbycue</li>
                    <li className="my-2 text-gray-500">About us</li>
                    <li className="my-2 text-gray-500">Our Servies</li>
                    <li className="my-2 text-gray-500">FAQ</li>
                    <li className="my-2 text-gray-500">Contact Us</li>
                </ul>
            </div>

            <div>
                <ul className="my-5">
                    <li className="font-bold my-4">How Do I</li>
                    <li className="my-2 text-gray-500">Sign up</li>
                    <li className="my-2 text-gray-500">Add a Listing</li>
                    <li className="my-2 text-gray-500">Claim Listing</li>
                    <li className="my-2 text-gray-500">Post a Query</li>
                    <li className="my-2 text-gray-500">Add a Blog Post</li>
                    <li className="my-2 text-gray-500">Other Queries</li>
                </ul>
            </div>

            <div>
                <ul className="my-5">
                    <li className="font-bold my-4">Quick Links</li>
                    <li className="my-2 text-gray-500">Listing</li>
                    <li className="my-2 text-gray-500">Blog Post</li>
                    <li className="my-2 text-gray-500">Shop / Store</li>
                    <li className="my-2 text-gray-500">Community</li>
                </ul>
            </div>
        </div>

        <div className="my-5 ">
            <h1 className="font-bold">Social Media</h1>
            <img src="/socials.png" className='my-4'/>

            <h1>Invite Friend</h1>
            <div className='flex'><input type="email"  className="relative border-2 border-gray-400 rounded-l-md my-4"/><button className="my-4 right-0 text-white bg-customVoilet rounded-r-md w-12">Invite</button></div>
        </div>

        </div>
        </>
    )
}