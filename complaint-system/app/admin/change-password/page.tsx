export default function ChangePassword() {
  return (

    <div className="changePassword">

      <h2 className="chngPasswordHeading">
    Change your password
    </h2>
    
    {/* Form Section */}
    
    <div className="page-card grid md:grid-cols-2 mx-auto gap-5">
    
    
    <p className="inputfield-title text-1xl text-gray font-light">Current Password</p>
    <input
    type="password"
    placeholder="********"
    className="input-field"
    />
    
    <p className="inputfield-title text-1xl text-gray font-light">New password</p>
    <input
    type="password"
    placeholder="********"
    className="input-field"
    />

    <p className="inputfield-title text-1xl text-gray font-light">Confirm password</p>
    <input
    type="password"
    placeholder="********"
    className="input-field"
    /><br></br><br></br>
    
    </div>

    <div className="changePassword-btn">
      <button className="greenBtn w-100px">
    Change Password
    </button>
    </div>

    
    
    
    </div>
  
    
  );
}