import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeftPanel from './leftPanel';
import { useNavigate , Link} from 'react-router-dom'
function UserList() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/user-all'); // Update the endpoint URL
        setUsers(response.data);

      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/user/${userId}`);
      navigate('/user-list');
      window.alert("User has been deleted successfully");

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <>
        <LeftPanel />
      </>
      <div className="color">

      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            {/* Sidebar button */}
            <span className="dashboard">
              <p style={{ color: 'red', fontWeight: 'bold', fontSize: '30px'}}>User Control Panel</p>
            </span>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes"></div>
          <div className="sales-boxes">
            <div className="recent-sales box">
            <Link to="/sign-up" >
                  <button  className="button button5">++ Add New User</button>
                </Link>
              <h3 className="text-muted mb-3">All Registered Users</h3>
              <br />
              <table >

                <thead className="thead-light">
                  <tr>
                    <th className="text-muted mb-0">Name</th>
                    <th className="text-muted mb-0">Email</th>
                    <th className="text-muted mb-0">Phone</th>
                    <th className="text-muted mb-0">Occupation</th>
                    <th colSpan={3} className="text-muted mb-0">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td><p className="text-muted mb-0">{user.name}</p></td>
                      <td><p className="text-muted mb-0">{user.email}</p></td>
                      <td><p className="text-muted mb-0">{user.phone}</p></td>
                      <td><p className="text-muted mb-0">{user.occupation}</p></td>
                      <td>
                        <button className="button button3" onClick={() => deleteUser(user._id)}>Delete</button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserList;
