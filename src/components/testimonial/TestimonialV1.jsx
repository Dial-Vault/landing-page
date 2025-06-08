import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import illustration5 from "/assets/img/headshots/dylvault-securityheadshot.png";
import shape16 from "/assets/img/shape/16.png";
import shape17 from "/assets/img/shape/17.png";

// Testimonials data
const TESTIMONIALS = [
    {
        title: "The best service ever",
        quote: `“Their response time is excellent and their guards are very professional. Highly recommend Dyl Vault for any security service needs!”`,
        name: "Matthew J. Wyman",
        role: "Senior Consultant"
    },
    {
        title: "Awesome opportunities",
        quote: `“Dyl Vault gave us confidence with quick deployment and top-notch patrols. It’s more than a service, it’s true peace of mind.”`,
        name: "Anthom Bu Spar",
        role: "Marketing Manager"
    }
];

const TestimonialV1 = ({ sectionClass }) => {
    const sliderSettings = {
        direction: "horizontal",
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    };

    return (
        <div className={`testimonial-style-one-area ${sectionClass || ""}`}>
            <div className="container">
                <div className="testimonial-style-one-items bg-gray-secondary">
                    <div className="row align-center">
                        <div className="col-xl-5 pr-80 pr-md-15 pr-xs-15">
                            <div className="testimonial-style-one-thumb">
                                <img src={illustration5} alt="Illustration" />
                                <div className="shape">
                                    <img src={shape16} alt="Shape 16" />
                                    <img src={shape17} alt="Shape 17" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <Swiper
                                {...sliderSettings}
                                className="testimonial-style-one-carousel"
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                            >
                                {TESTIMONIALS.map((item, index) => (
                                    <SwiperSlide className="swiper-slide" key={index}>
                                        <div className="testimonial-style-one">
                                            <div className="item">
                                                <div className="content">
                                                    <div className="top">
                                                        <h2>{item.title}</h2>
                                                    </div>
                                                    <p>{item.quote}</p>
                                                </div>
                                                <div className="provider">
                                                    <div className="info">
                                                        <h4>{item.name}</h4>
                                                        <span>{item.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                                <div className="swiper-nav-left">
                                    <div className="swiper-button-prev" />
                                    <div className="swiper-button-next" />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialV1;
