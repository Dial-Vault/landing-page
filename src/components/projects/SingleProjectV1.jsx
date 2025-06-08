import { Link } from "react-router-dom";

const SingleProjectV1 = ({ project, expanded }) => {
    const { id, slug, title, subtitle, images } = project;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={id}>
                <button
                    className={`accordion-button ${expanded ? "" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${slug}`}
                    aria-expanded={expanded}
                    aria-controls={slug}
                >
                    <span>{title}</span>
                    <b>{subtitle}</b>
                </button>
            </h2>
            <div
                id={slug}
                className={`accordion-collapse collapse ${expanded ? "show" : ""}`}
                aria-labelledby={id}
                data-bs-parent="#projectAccordion"
            >
                <div className="accordion-body">
                    <div className="portfolio-style-one-thumb">
                        <img src={`${images.banner}`} alt="Image Not Found" />
                        <Link to={`/projects/${slug}`}>
                            <i className="fas fa-link" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectV1;
