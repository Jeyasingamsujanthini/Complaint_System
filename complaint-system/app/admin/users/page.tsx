import { FaEdit, FaTrash } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

export default function UsersPage() {
  return (
    <div>

      <h2 className="manageUserHead"> Manage Users</h2><br></br>

      <table className="adminTable">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>001</td>
            <td>Kamal</td>
            <td>kamal@email.com</td>
            <td>User</td>
            <td className="actionCell">
              <FaEdit className="editIcon" />
              <FaTrash className="deleteIcon" />
            </td>
          </tr>

          <tr>
            <td>002</td>
            <td>Mathan</td>
            <td>mathan@email.com</td>
            <td>User</td>
            <td className="actionCell">
              <FaEdit className="editIcon" />
              <FaTrash className="deleteIcon" />
            </td>
          </tr>

          <tr>
            <td>003</td>
            <td>Kanthan</td>
            <td>kanthan@email.com</td>
            <td>Officer</td>
            <td className="actionCell">
              <FaEdit className="editIcon" />
              <FaTrash className="deleteIcon" />
            </td>
          </tr>

          <tr>
            <td>004</td>
            <td>Rahman</td>
            <td>rahmnmohamed@email.com</td>
            <td>Admin</td>
            <td className="actionCell">
              <FaEdit className="editIcon" />
              <FaTrash className="deleteIcon" />
            </td>
          </tr>
        </tbody>

      </table>

      <button className="addUserBtn">
          <FaUserPlus className="addUserIcon" />
          Add User
      </button>

    </div>
  );
}