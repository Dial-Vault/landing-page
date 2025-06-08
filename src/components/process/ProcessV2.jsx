const processSteps = [
    {
        id: 1,
        title: "Honesty",
        description: "We believe in honest and transparent communication, ensuring trust and long-term relationships with every client."
    },
    {
        id: 2,
        title: "Collaboration",
        description: "Our team works hand-in-hand with clients, combining ideas and expertise to deliver customized and scalable solutions."
    },
    {
        id: 3,
        title: "Innovation",
        description: "We constantly evolve by adopting modern technologies and creative strategies to meet unique client needs and stay ahead of the curve."
    }
];

const ProcessV2 = () => {
    return (
        <>
            <div className="process-style-two items default-padding bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="site-heading">
                                <h4 className="sub-title">Our Process</h4>
                                <h2 className="title">Building great future Together, Be with us</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="process-style-two-ites default-padding-bottom">
                        <div className="row">
                            {processSteps.map((step, index) => (
                                <div className="col-lg-4 col-md-6 process-style-two-item" key={step.id}>
                                    <div className="item">
                                        <span>{`0${index + 1}`}</span>
                                        <h4>{step.title}</h4>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV2;