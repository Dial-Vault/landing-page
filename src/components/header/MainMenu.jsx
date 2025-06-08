import { Link } from 'react-router-dom';
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json";
import { useEffect, useState } from 'react';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        setServices(ServicesV1Data);
    },[])
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link to="/" className="active">Home</Link>
                    
                </li>
                <li className="dropdown">
                    <Link to="/projects" >Projects</Link>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li  style={{ borderBottom: "2px solid #ccc", marginBottom: "8px", paddingBottom: "5px" }}><Link to="/services">All Services</Link></li>
                        {services.map((service, id) => (
                            <li key={id}><Link to={`/services/${service.id}`}>{service.titleFirst+" "+service.titleLast} </Link></li>
                        ))}
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="/blogs" >Blog</Link>
                    
                </li>
                <li><Link to="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;