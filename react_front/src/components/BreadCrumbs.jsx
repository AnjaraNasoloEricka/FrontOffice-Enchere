// ** React Imports

// ** Third Party Components
import Proptypes from 'prop-types'
import { Grid, CheckSquare, MessageSquare, Mail, Calendar } from 'react-feather'
import { BrowserRouter, Link, Routes, useNavigate } from 'react-router-dom';
import {FaArrowRight,FaPercentage,FaMoneyCheck,FaHandshake,FaClock,FaHome,FaPowerOff,FaUpload, FaBezierCurve, FaGrin, FaDatabase} from 'react-icons/fa';
import {
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import { useEffect, useState } from 'react';

const BreadCrumbs = () => {
    const history=useNavigate();
    const [partlogin,setPartLogin]=useState();
  // ** Props

  function deleteSession(){
    localStorage.removeItem('user');
    history('/loginClient');
  }

  const setPartLoginHtml=()=>{
    if(localStorage.getItem('user') == undefined){    
        return(
          <li className="dropdown nav-item sidebar-group-active" data-menu="dropdown">
          <Link to="/loginClient" className="nav-link d-flex align-items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>Login</span></Link>

          </li>
        );
    }
    else{
        return(
          <li className="dropdown nav-item sidebar-group-active" data-menu="dropdown">
          <Link onClick={deleteSession} className="nav-link d-flex align-items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>Deconnexion</span></Link>

          </li>
        );
    }
    
  }


  return (
 
    <div className="horizontal-menu-wrapper">
         <div className="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed floating-nav navbar-light navbar-shadow container-xxl" >
         <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item me-auto"><a className="navbar-brand" href="../../../html/ltr/horizontal-menu-template/index.html"><span className="brand-logo">
                               </span>
                            <h2 className="brand-text mb-0"><FaHandshake/> Enchere </h2>
                        </a></li>
                    <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x d-block d-xl-none text-primary toggle-icon font-medium-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a></li>
                </ul>
         </div>
         <div className="shadow-bottom"></div>
         <div className="navbar-container main-menu-content" data-menu="menu-container">
                <ul className="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
                    <li className="dropdown nav-item sidebar-group-active active" data-menu="dropdown">
                        <Link to="/" className="nav-link d-flex align-items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span>Accueil</span></Link>

                    </li>
                    <li className="dropdown nav-item sidebar-group-active active" data-menu="dropdown">
                        <Link to="/list" className="nav-link d-flex align-items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span>Liste Enchere</span></Link>

                    </li>
                    
                    {setPartLoginHtml()}
                    <li className="dropdown nav-item sidebar-group-active" data-menu="dropdown">
                        <Link to="/historique" className="nav-link d-flex align-items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span>Historique</span></Link>
                    </li>
                </ul> 
        </div>
         </div>
    </div>
  )
}
export default BreadCrumbs