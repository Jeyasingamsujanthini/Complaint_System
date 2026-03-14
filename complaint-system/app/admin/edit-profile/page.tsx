export default function EditProfile() {
  return (
    <div className="profileCard">

      <h3>Edit Profile</h3>

      <input placeholder="Full Name" />
      <input placeholder="Email Address" />
      <input placeholder="Role" />
      <input placeholder="Username" />
      <input placeholder="Password" />
      <input placeholder="Contact Number" />

      <button className="greenBtn">
        Save Changes
      </button>

    </div>
  );
}