import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import about1 from "../../assets/img/home/dylvault-landing-video-thumbnail.png";
import icon4 from "/assets/img/icon/4.png";
import { Link } from 'react-router-dom';

// === Constants ===
const VIDEO_ID = "aTC_RNYtEb0";

const SECTION_TITLE = "Your safety, Our mission – Delivered instantly";
const SECTION_DESCRIPTION = `Dyl Vault is redefining security services with a modern approach. 
Whether it's personal protection, event security, or emergency SOS services — 
we are just one tap away through our Quick Dial and Mobile App. Our trained 
professionals ensure reliable and rapid protection when and where it matters most.`;

const FEATURE_LIST = [
    {
        icon: icon4,
        heading: "Trusted by 120+ Clients in Gurgaon"
    },
    {
        stat: "24/7",
        heading: "On-Demand Protection"
    }
];

const AboutV1 = ({ sectionClass }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={`about-style-one-area default-padding-top ${sectionClass || ""}`}>
                <div className="container">
                    <div className="about-style-one-items">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="thumb-style-one">
                                    <img src={about1} alt="Security Team" />
                                    <Link onClick={() => setOpen(true)} to="#" className="popup-youtube video-play-button">
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">{SECTION_TITLE}</h2>
                                        <p>{SECTION_DESCRIPTION}</p>
                                    </div>
                                    <ul className="card-list">
                                        {FEATURE_LIST.map((item, index) => (
                                            <li key={index}>
                                                {item.icon && <img src={item.icon} alt="Feature Icon" />}
                                                {item.stat && <h2>{item.stat}</h2>}
                                                <h5>{item.heading}</h5>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={VIDEO_ID} onClose={() => setOpen(false)} />
        </>
    );
};

export default AboutV1;
