import { Component } from "react";
import {FaHandshake} from 'react-icons/fa';



class Top extends Component{
    render(){
        return(
            <nav className="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center" data-nav="brand-center">
                <div className="navbar-header d-xl-block d-none">
                <ul className="nav navbar-nav">
                <li className="nav-item"><a className="navbar-brand" href="../../../html/ltr/horizontal-menu-template/index.html"><span class="brand-logo">
                            
                            </span>
                        <h2 className="brand-text mb-0"> <FaHandshake/> Enchere</h2>
                    </a></li>
                </ul>
                </div>
                <div className="navbar-container d-flex content">
                    
                <div className="bookmark-wrapper d-flex align-items-center">
                    <ul className="nav navbar-nav">
                        <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star ficon text-warning"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></a>
                            <div className="bookmark-input search-input">
                                <div className="bookmark-input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                                <input className="form-control input" type="text" placeholder="Bookmark" tabindex="0" data-search="search"/>
                                <ul className="search-list search-list-bookmark ps"><div className="ps__rail-x"><div className="ps__thumb-x" tabindex="0"></div></div><div className="ps__rail-y"><div className="ps__thumb-y" tabindex="0"></div></div></ul>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav> 
        );
    };
}

export default Top;