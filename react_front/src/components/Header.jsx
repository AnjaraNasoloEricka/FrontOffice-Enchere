import Top from './Top';

import { Component } from "react";
import BreadCrumbs from './BreadCrumbs';


class Header extends Component{
    render(){
        return(
            <div>
                <Top/>
                <BreadCrumbs/>

            </div>
        );
    };
}

export default Header;