import { Link } from 'react-router-dom';

const SingleBlogStandard = ({ blog }) => {
    const { id,author,createdAt,slug, image, title, excerpt } = blog

    return (
        <>
            <div className="item">
                <div className="thumb">
                    <Link to={`/blog/${slug}`}>
                        <img src={image} style={{width:'100%'}} alt="Image Not Found" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link to="#" ><i className="far fa-calendar-alt" /> {new Date(createdAt.seconds * 1000).toLocaleString()}</Link>
                            </li>
                            <li>
                                <Link to="#" ><i className="far fa-user-circle" />{author}</Link>
                            </li>
                        </ul>
                    </div>
                    <h2 className="title">
                        <Link to={`/blog/${slug}`}>{title}</Link>
                    </h2>
                    <p>{excerpt}</p>
                    <Link className="btn mt-10 btn-md circle btn-theme animation" to={`/blog/${slug}`}>Continue Reading</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogStandard;