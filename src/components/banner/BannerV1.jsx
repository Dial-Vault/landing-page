import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';

// String constants
const SUBTITLE = "Security Partner";
const TITLE = "Protect your business with professional guards";
const DESCRIPTION = "Trusted by businesses across Gurgaon, Vault Securities ensures 24/7 protection with trained bouncers, guards, and PSOs.";
const BUTTON_TEXT = "Book Now";
const BUTTON_LINK = "/contact-us";

const STATS = [
    {
        icon: "fa-user-shield",
        percentage: "100%",
        label: "Client Trust",
        delay: "800ms"
    },
    {
        icon: "fa-clock",
        percentage: "24/7",
        label: "Availability",
        delay: "500ms"
    }
];

const HighlightStat = ({ icon, percentage, label, delay }) => (
    <Animation className="animate__animated animate__fadeInUp" delay={delay}>
        <div className="item">
            <div className="icon">
                <i className={`fas ${icon}`} />
            </div>
            <div className="info">
                <p><strong>{percentage}</strong> {label}</p>
            </div>
        </div>
    </Animation>
);

const BannerV1 = () => {
    return (
        <div className="banner-style-one-area overflow-hidden bg-gray">
            <div className="shape-blury" />

            <div className="banner-style-one">
                <div className="container">
                    <div className="content">
                        <div className="row align-center">

                            {/* Left Column: Text Content */}
                            <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                <div className="information">

                                    <div className="animation-shape">
                                        <img src="/assets/img/shape/anim-2.png" alt="Shape" />
                                    </div>

                                    <Animation className="animate__animated animate__fadeInUp" delay="2000ms" duration="400ms">
                                        <h4>{SUBTITLE}</h4>
                                    </Animation>

                                    <Animation className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                        <h2>
                                            {TITLE.split("with")[0]}<br /><strong>with</strong> {TITLE.split("with")[1]}
                                        </h2>
                                    </Animation>

                                    <Animation className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                        <p>{DESCRIPTION}</p>
                                    </Animation>

                                    <Animation className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                        <div className="button mt-40">
                                            <Link className="btn btn-md circle btn-gradient animation" to={BUTTON_LINK}>
                                                {BUTTON_TEXT}
                                            </Link>
                                        </div>
                                    </Animation>

                                </div>
                            </div>

                            {/* Right Column: Image + Stats */}
                            <div className="banner-one-thumb col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                <div className="thumb">

                                    <Animation className="animate__animated animate__fadeInUp">
                                        <img src="/assets/img/headshots/dylvault-bouncerheadshot.png" alt="Banner Thumb" />
                                    </Animation>

                                    <div className="strategy">
                                        {STATS.map((stat, index) => (
                                            <HighlightStat
                                                key={index}
                                                icon={stat.icon}
                                                percentage={stat.percentage}
                                                label={stat.label}
                                                delay={stat.delay}
                                            />
                                        ))}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerV1;
