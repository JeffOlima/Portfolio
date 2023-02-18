import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Phone</h3>
                <p>+353(83)007-6813</p>
            </div>
            </div>
            <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>oliveiralima.jefferson@gmail.com</p>
            </div>
            </div>
            <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Location</h3>
                <p>Dublin/ Ireland</p>
            </div>
            </div>
        </section>
    );
};

export default InformationContainer
