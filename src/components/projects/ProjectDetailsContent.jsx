const ProjectDetailsContent = ({ projectInfo }) => {
    const {
        title,
        client,
        date,
        address,
        socialLinks, // [{ platform: 'facebook', url: '...' }, ...]
        images, // { left: projects9, right: projects4, banner: banner19 }
        overview, // array of paragraphs
        background, // array of paragraphs
        challenges, // { description: [], highlights: [], image: '' }
        solution, // array of paragraphs
    } = projectInfo;

    return (
        <div className="project-details-area default-padding">
            <div className="container">
                <div className="project-details-items">
                    {/* Project Images */}
                    <div className="project-thumb">
                        <div className="row">
                            <div className="col-md-7">
                                <img src={images.left} alt="Project Left" />
                            </div>
                            <div className="col-md-5">
                                <img src={images.right} alt="Project Right" />
                            </div>
                        </div>
                    </div>

                    {/* Top Info Section */}
                    <div className="top-info">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 order-lg-last right-info">
                                <div className="project-info">
                                    <h4 className="title">Project Info</h4>
                                    <ul>
                                        <li>Client <span>{client}</span></li>
                                        <li>Date <span>{date}</span></li>
                                        <li>Address <span>{address}</span></li>
                                    </ul>
                                    <ul className="social">
                                        {socialLinks.map((link, index) => (
                                            <li key={index}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                    <i className={`fab fa-${link.platform}`} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7 pr-35 pr-md-15 pr-xs-15 left-info mt-md-10">
                                <h2 className="title">{title}</h2>
                                {overview.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background, Challenges, and Solution Sections */}
                <div className="project-details-items bg-gray default-padding mt-100 mt-xs-40">
                    <div className="item-grid-container">
                        {/* Background */}
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info"><h2>Background</h2></div>
                                <div className="right-info">
                                    {background.map((para, i) => <p key={i}>{para}</p>)}
                                </div>
                            </div>
                        </div>

                        {/* Challenges */}
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info"><h2>The Challenges</h2></div>
                                <div className="right-info">
                                    {challenges.description.map((para, i) => <p key={i}>{para}</p>)}
                                    {challenges.highlights?.length > 0 && (
                                        <>
                                            <h3>{challenges.heading}</h3>
                                            <ul className="list-style-two">
                                                {challenges.highlights.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {(
                                        <img src={challenges.image} alt="Challenge Visual" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Solution */}
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info"><h2>The Solution</h2></div>
                                <div className="right-info">
                                    {solution.map((para, i) => <p key={i}>{para}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsContent;
