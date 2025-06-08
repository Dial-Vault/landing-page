import { Link } from "react-router-dom";
import Animation from "../animation/Animation";

const SinglePortfolioV3 = ({ portfolio }) => {
    const { category, year, title, images, slug } = portfolio;

    return (
        <Animation className="animate__animated animate__fadeInUp">
            <div className="portfolio-style-one">
                <Link to={`/projects/${slug}`} className="cursor-target">
                    <div className="thumb-zoom">
                        <img className="img-reveal" src={images.left} alt={title || "Image Not Found"} />
                    </div>
                    <div className="pf-item-info">
                        <div className="content">
                            <div className="pf-tags">
                                {category && <span>{category}</span>}
                                {year && <span>{year}</span>}
                            </div>
                            <h2>{title}</h2>
                        </div>
                    </div>
                </Link>
            </div>
        </Animation>
    );
};

export default SinglePortfolioV3;
