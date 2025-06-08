import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

const ServicesDetailsContent = ({ serviceInfo }) => {
    const {
        title,
        heading,
        mainImage,
        mainDescription,
        process,
        executives,
        executivesImage,
        videoId,
        highlights,
        growthMultiplier,
        faq,
    } = serviceInfo;

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Service Details</h4>
                                <h2 className="title">{heading}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-12 services-single-content">
                                <div className="thumb mb-50">
                                    <img src={mainImage} alt="Thumb" />
                                </div>
                                <p>{mainDescription}</p>
                                <div className="process-style-one-items mt-50">
                                    <div className="choose-us-one-thumb">
                                            {/* <div className="left-info">
                                                <h2 className="title">{title}</h2>
                                                </div> */}
                                            <div className="process-style-one">
                                                {process.map((step, index) => (
                                                    <div className="process-style-one-item" key={index}>
                                                        <span>{`0${index + 1}`}</span>
                                                        <h4>{step.title}</h4>
                                                        <p>{step.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-content bg-gray default-padding">
                <div className="container">
                    <div className="about-style-one-items">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="thumb-style-one">
                                    <img src={executivesImage} alt="Image Not Found" />
                                    <Link onClick={() => setOpen(true)} to="#" className="popup-youtube video-play-button">
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">{executives.title}</h2>
                                        <p>{executives.description}</p>
                                    </div>
                                    <ul className="card-list">
                                        <li>
                                            <img src={highlights.icon} alt="Image Not Found" />
                                            <h5>{highlights.label}</h5>
                                        </li>
                                        <li>
                                            <h2>{growthMultiplier.value}</h2>
                                            <h5>{growthMultiplier.label}</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-content default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="title">Service Process</h2>
                            <p>{faq.intro}</p>
                            <div className="accordion mt-50" id="faqAccordion">
                                {faq.questions.map((item, idx) => (
                                    <div className="accordion-item accordion-style-one" key={idx}>
                                        <h2 className="accordion-header" id={`heading${idx}`}>
                                            <button
                                                className={`accordion-button ${idx > 0 ? 'collapsed' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${idx}`}
                                                aria-expanded={idx === 0 ? "true" : "false"}
                                                aria-controls={`collapse${idx}`}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${idx}`}
                                            className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                                            aria-labelledby={`heading${idx}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                <p>{item.answer}</p>
                                                <ul className="list-style-two">
                                                    {item.points.map((point, i) => (
                                                        <li key={i}>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default ServicesDetailsContent;
