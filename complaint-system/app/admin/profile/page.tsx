import Image from "next/image";

export default function AdminProfile() {
  return (
    <div className="profileContainer">

      <div className="profileHeader">

        <Image
          src="/images/admin.png"
          alt="admin"
          width={80}
          height={80}
          className="avatar"
        />

        <div>
          <h3>Charles Doe</h3>
          <p>Admin Officer</p>
        </div>

      </div>

      <div className="profileCard">

        <h3>Admin Profile Details</h3>

        <input defaultValue="Charles Doe" />
        <input defaultValue="admin@gmail.com" />
        <input defaultValue="Admin Officer" />
        <input defaultValue="admin123" />
        <input type="password" defaultValue="******" />
        <input defaultValue="0771234567" />

      </div>

    </div>
  );
}