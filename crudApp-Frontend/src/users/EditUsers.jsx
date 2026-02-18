import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUsers() {

  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = React.useState({  
    name: "",
    userName: "",
    email: ""
  })

  const {name, userName, email} = user;

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label className="form-label">Name</label>
              <input type="text" className="form-control"
                name='name' value={name} onChange={onInputChange} />
            </div>

            <div className='mb-3'>
              <label className="form-label">User Name</label>
              <input type="text" className="form-control"
                name='userName' value={userName} onChange={onInputChange} />
            </div>

            <div className='mb-3'>
              <label className="form-label">Email</label>
              <input type="text" className="form-control"
                name='email' value={email} onChange={onInputChange} />
            </div>

            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <button type="button" className="btn btn-outline-danger m-2"
              onClick={() => navigate("/")}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  )
}
