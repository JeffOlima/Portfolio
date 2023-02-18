import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu2.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar =() => {
    return <aside id="sidebar">
        <img src={Avatar} alt="jefferson O. Lima" />
        <p className='title'>Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className='btn'>Download curriculo</a>
    </aside>;
  
};

export default Sidebar