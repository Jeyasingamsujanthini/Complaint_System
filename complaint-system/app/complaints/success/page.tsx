import Image from "next/image";

export default function Success(){

return(

<div className="text-center">

<Image
src="/images/success.png"
alt="success"
width={400}
height={350}
className="mx-auto"
/>

<h1 className="text-5xl font-bold text-green-600 mt-4">
Complaint Added Successfully
</h1>

<p className="mt-5">
Your complaint has been submitted.
</p><br></br>

<div className="grid md:grid-cols-2 gap-150">
    <button className="primary-btn">
    Back Home
    </button>
    
    <button className="primary-btn">
    Chat with us
    </button>
</div>



</div>

)

}