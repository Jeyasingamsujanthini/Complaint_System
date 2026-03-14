export default function AddComplaint(){

return(

<div className="page-card">

<h1 className="text-xl font-bold text-center mb-4">
Add Your Complaint
</h1><br></br><br></br>

<div className="addComplaintForm grid md:grid-cols-2 gap-5">
    <h3>Your name:</h3>
    <input placeholder="Your Name" className="input-field"/>

    <h3>Your NIC number:</h3>
    <input placeholder="Your NIC" className="input-field"/>

    <h3>Your complaint category:</h3>
    <select className="input-field">

    <option>Select Complaint Category</option>
    <option>Road Damage</option>
    <option>Garbage Issue</option>
    <option>Water Problem</option>

    </select>

    <h3>Brief of your complaint:</h3>
    <textarea
    placeholder="Description"
    className="input-field"
    />

    <h3>Your address / complaint area address:</h3>
    <input placeholder="Address" className="input-field"/>

    <h3>Select the location:</h3>
    <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
    Pin Map
    </button>
</div>
<br></br><br></br><br></br>

<div className="buttons">
    <button className="primary-btn">
    Add Complaint
    </button>
</div>






</div>

)

}