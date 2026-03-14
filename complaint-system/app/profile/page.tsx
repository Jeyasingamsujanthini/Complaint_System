import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export default function ProfilePage() {
  return (
    <div className="profile">
        <h1 className="welcome-user">Welcome M.M. Ishan</h1><br></br><br></br>

        <div className="page-card">
            <div className="profileTop grid md:grid-cols-3 gap-10">

                {/*Avatar*/}
                <div className="flex justify-center">
                    <Image
                    src="/images/avatar.png"
                    alt="profile"
                    width={120}
                    height={120}
                    />
                    
                </div>

                <div className="profileInfo">
                    
                    <input
                    type="name"
                    placeholder="Your name"
                    className="input-field"
                    />   

                   <input
                    type="email"
                    placeholder="Email Address"
                    className="input-field"
                    />    
                </div>

                <div className="profileInfo">
                    <input
                    type="addres"
                    placeholder="Home Address"
                    className="input-field"
                    />    

                   <input
                    type="nic"
                    placeholder="NIC no"
                    className="input-field"
                    />  
                     
                </div>
                <div className="save-btn">
                    <button className="primary-btn w-[120px]">Save</button>
                </div>
                
            </div>

            <div className="divider-line">
                <hr className="divider"></hr>
            </div>

            {/*complaint detail*/}
            <div className="complaints">
                <h3 className="complaintDetail">Complaint Details</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Content</th>
                            <th className="status">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>01/01/2026</td>
                            <td>Street light issue</td>
                            <td>The street light near my house is not working properly.
                            It has been off for the past few days.
                            </td>
                            <td >
                                <span className="pending">Pending</span>
                            </td>
                        </tr>

                        <tr>
                            <td>10/12/2025</td>
                            <td>Waste management</td>
                            <td>The garbage of my lane is not clean for past few weeks.
                            It has been getting smell.
                            </td>
                            <td>
                                <span className="processing">Processing</span>
                            </td>
                        </tr>

                        <tr>
                            <td>01/01/2026</td>
                            <td>Drainage issue</td>
                            <td>The street light near my house is not working properly.
                            It has been off for the past few days.
                            </td>
                            <td>
                                <span className="finished">Finished</span>
                            </td>
                        </tr>

                        <tr>
                            <td>01/01/2026</td>
                            <td>Waste management</td>
                            <td>The street light near my house is not working properly.
                            It has been off for the past few days.
                            </td>
                            <td>
                                <span className="finished">Finished</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
        </div>

        {/*Chat Button*/}
        <div className="chat">
            <h1 className="chatTitle">Chat with Officer</h1>
            <div className="chatButton"><BsChatDotsFill/></div>
            
        </div>
        
    </div>
  );
}