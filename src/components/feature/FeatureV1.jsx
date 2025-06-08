import CountUp from 'react-countup';

const TOTAL_CLIENTS = 120;
const CUSTOMER_TITLE = "Clients served by Dyl Vault";
const SERVICE_POINTS = [
    "Personal / Executive Security",
    "Event Security Management",
    "Armed Personal Guarding",
    "Mobile Patrol Services",
    "Residential / Corporate Security",
    "Emergency SOS Response"
];

const FEATURE_CARDS = [
    {
        icon: "/assets/img/icon/1.png",
        title: "Approach",
        description: "We take a strategic approach tailored to your environment—discreet when needed, assertive when necessary, with full compliance and licensed personnel."
    },
    {
        icon: "/assets/img/icon/2.png",
        title: "Information",
        description: "Clients receive real-time updates and incident reports. All guards follow a documented protocol for tracking and documentation of incidents."
    },
    {
        icon: "/assets/img/icon/3.png",
        title: "Goal",
        description: "To provide visible safety, prevent incidents before they occur, and ensure peace of mind through professional manpower deployment and rapid response systems."
    }
];

const FeatureV1 = () => {
    return (
        <div className="feature-style-one-area">
            <div className="container container-stage">
                <div className="feature-style-one-items">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="feature-style-one-info">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer">
                                            <CountUp end={TOTAL_CLIENTS} enableScrollSpy={true} />
                                        </div>
                                        <div className="operator">+</div>
                                    </div>
                                </div>
                                <h3>{CUSTOMER_TITLE}</h3>
                                <ul className="list-style-one mt-25">
                                    {SERVICE_POINTS.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                <div className="path" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 feature-style-one-content text-light">
                            <div className="feature-style-one-cards">
                                <div className="path" />
                                {FEATURE_CARDS.map((card, index) => (
                                    <div className="feature-style-one-item" key={index}>
                                        <div className="icon">
                                            <img src={card.icon} alt="Icon" />
                                        </div>
                                        <div className="info">
                                            <h4>{card.title}</h4>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureV1;
