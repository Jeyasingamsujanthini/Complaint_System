import Image from "next/image";

export default function Login() {

return(

<div className=" grid md:grid-cols-2 w-[1500px] h-[600px] gap-0 items-auto">

{/* Left side Image Section */}

<div className="flex justify-center">

<Image
src="/images/login.png"
alt="login image"
width={1000}
height={550}
/>

</div>

{/* Form Section */}

<div className="page-card w-[400px] h-[500px] mx-auto">

<h2 className="login text-3xl font-blue font-bold mb-18 text-center">
Login
</h2>

<p className="inputfield-title text-1xl text-gray font-light">Enter your username</p>
<input
type="email"
placeholder="Email"
className="input-field"
/> <br></br> <br></br>

<p className="inputfield-title text-1xl text-gray font-light">Enter your password</p>
<input
type="password"
placeholder="Password"
className="input-field"
/><br></br> <br></br><br></br>

<button className="primary-btn w-full">
Login
</button>

</div>

</div>

);

}