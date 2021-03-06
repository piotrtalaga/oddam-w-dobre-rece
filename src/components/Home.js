import React, {Component} from "react";
import ReactDOM from "react-dom";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import HomeHeader from "./HomeComponents/HomeHeader";
import HomeThreeColumns from "./HomeComponents/HomeThreeColumns";
import HomeBasicSteps from "./HomeComponents/HomeBasicSteps";
import HomeAboutUs from "./HomeComponents/HomeAboutUs";
import HomeWhoWeHelp from "./HomeComponents/HomeWhoWeHelp";
import HomeContact from "./HomeComponents/HomeContact";

class Home extends Component {
    render() {
        return (
         <>
             <HomeHeader/>
             <HomeThreeColumns  bagsGiven='0' organizationsSupported='0' collectionsOrganized='0'/>
             <HomeBasicSteps name='HomeBasicSteps'/>
             <HomeAboutUs/>
             <HomeWhoWeHelp/>
             <HomeContact/>

         </>
        )
    }

}

export default Home;