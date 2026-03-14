import Image from "next/image";

export default function Unauthorized(){

return(

<div className="min-h-[80vh] grid md:grid-cols-2 items-center gap-50">
    
    {/* Content Section */}
    <div className="card max-w-md mx-auto text-center">

        <h1 className="text-5xl font-bold text-red-600 mt-5">
        SORRY!
        </h1><br></br><br></br>

        <p className="unauthorized-acces">You are not authorizes to  access this page.
        Check your login  credentials or contact the 
        administrator for access.</p><br></br>

        <button className="secondary-btn w-[200px] h-[50px] font-bold">Back to Home</button>
    </div>

    {/* Illustration Section */}
    <div className="flex justify-center">
    <Image
    src="/images/unauthorized.png"
    alt="unauthorized"
    width={600}
    height={400}
    className="mx-auto"
    />
    </div>

</div>

)

}