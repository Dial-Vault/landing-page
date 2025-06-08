    import { useEffect, useState } from "react";
    import Animation from '../animation/Animation';
    import partnersData from '../../assets/jsonData/clients/clients-logo.json'; // adjust the path as per your structure

    const PartnerV2 = () => {
        const [partners, setPartners] = useState([]);

        useEffect(() => {
            // Simulate fetching local JSON
            setPartners(partnersData);
        }, []);

        return (
            <div className="partner-style-two-area default-padding bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 partner-style-one">
                            <div className="partner-style-one-item bg-theme text-light" style={{ backgroundImage: 'url(/assets/img/shape/22.png)' }}>
                                <h4 className="sub-title">Our Partners</h4>
                                <h2 className="title">Worked with <br /> Largest Brands</h2>
                            </div>
                        </div>

                        {partners.map((partner, index) => (
                            <Animation
                                key={partner.id}
                                className="animate__animated animate__fadeInLeft"
                                delay={`${100 + index * 100}ms`}
                            >
                                <div className="col-lg-3 col-md-6 partner-style-one">
                                    <div className="partner-style-one-item">
                                        <img src={partner.image} alt={partner.alt} style={{ width: "150px", maxWidth: "100%", height: "auto" }} />
                                    </div>
                                </div>
                            </Animation>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    export default PartnerV2;
