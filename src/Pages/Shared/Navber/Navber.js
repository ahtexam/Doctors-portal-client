import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navber = () => {
  const {user, logOut}= useContext(AuthContext);

  const handleSignOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err=> console.log(err))
  }

  const menuItame= <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Appointment">Appointment</Link></li>
       { user?.uid?
       <>
       <li><Link to="/Dashboard">Dashboard</Link></li>
       <li><button onClick={handleSignOut}>Sign Out</button></li>
       </>
        :<li><Link to="/Login">Login</Link></li>}
  </>
    return (
        <div>
            <div className="navbar bg-base-100 text-accent flex justify-between">
                <div className="navbar-start">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItame}
                    </ul>
                  </div>
                  <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    {menuItame}
                  </ul>
                </div>
          </div>
        </div>
    );
};

export default Navber;



