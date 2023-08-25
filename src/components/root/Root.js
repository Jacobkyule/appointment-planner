import {  Outlet, NavLink } from "react-router-dom";
import Logo from './android-chrome-192x192.png';
export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
            <div className="logo">
            <img src={Logo} alt="logo" />
            </div>
            <h1 className="heading">Appointment Planner</h1>
            <nav className="heading">
                <NavLink to={ROUTES.CONTACTS} >
                Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} >
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
            <p>@2023 | All Rights Reserved</p>
      </>
    );

}

export default Root;