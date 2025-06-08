import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';

const SingleBlogV1 = ({ blog }) => {
    const { id, image, slug, createdAt, category, title } = blog

    return (
        <>
            <Animation className='animate__animated animate__fadeInUp' delay={0.5}>
                <div className="home-blog-style-one-item">
                    <div className="home-blog-thumb">
                        <Link to={`/blog/${slug}`}>
                            <img src={image} alt="Thumb" style={{width:'100%', height: '300px'}} />
                        </Link>
                        <ul className="home-blog-meta">
                            <li>
                                <Link to="#">{category}</Link>
                            </li>
                            <li>{new Date(createdAt.seconds * 1000).toLocaleString()}</li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h4 className="blog-title">
                                <Link to={`/blog/${slug}`}>{title}</Link>
                            </h4>
                            <Link to={`/blog/${slug}`} className="btn-read-more">Read more <i className="fas fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </Animation>
        </>
    );
};

export default SingleBlogV1;