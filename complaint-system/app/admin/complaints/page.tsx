import { FaClipboardList } from "react-icons/fa";

export default function ComplaintsPage() {
  return (
    <div>
        
      <h2 className="mngComp">Manage Complaints</h2>

      <table className="adminTable">

        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>101</td>
            <td>Kamal</td>
            <td>Road Damage</td>
            <td>
              <span className="processing">In progress</span>
            </td>
          </tr>

          <tr>
            <td>102</td>
            <td>Wickramasinghe</td>
            <td>Drainage Issue</td>
            <td>
              <span className="processing">In progress</span>
            </td>
          </tr>

          <tr>
            <td>103</td>
            <td>Vinothini</td>
            <td>Road Damage</td>
            <td>
              <span className="pending">Pending</span>
            </td>
          </tr>

          <tr>
            <td>104</td>
            <td>Rahman</td>
            <td>Street light not working</td>
            <td>
              <span className="finished">Finished</span>
            </td>
          </tr>
        </tbody>

      </table>

      <button className="addUserBtn">
        <FaClipboardList />
        Add Complaint
      </button>

    </div>
  );
}