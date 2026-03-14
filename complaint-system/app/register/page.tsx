import Image from "next/image";
export default function Register(){

return(
<div className="grid md:grid-cols-2 gap-6 items-center">
    <div className="flex justify-center">

        <Image
        src="/images/signup.png"
        alt="login image"
        width={350}
        height={350}
        />

    </div>

    <div className="h-[650px] w-[550px] mx-auto page-card">

<h2 className="login text-2xl font-bold text-center mb-12">Register
</h2>

<p className="inputfield-title text-1xl text-gray font-light">Enter your full name</p>
<input placeholder="Full Name" className="input-field"/><br></br> <br></br>

<p className="inputfield-title text-1xl text-gray font-light">Enter your email</p>
<input placeholder="Email" className="input-field"/><br></br> <br></br>

<p className="inputfield-title text-1xl text-gray font-light">Enter your username</p>
<input placeholder="Phone" className="input-field"/><br></br> <br></br>

<p className="inputfield-title text-1xl text-gray font-light">Enter your password</p>
<input type="password" placeholder="Password" className="input-field"/><br></br> <br></br> <br></br>

<button className="primary-btn w-full">
Sign Up
</button>

</div>

</div>
)

}

