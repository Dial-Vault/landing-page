import { Link } from 'react-router-dom';

const SingleRecentPost = ({ blog }) => {
    const { id, slug, image, title, createdAt } = blog

    const truncateString = (str) => {
        if (str.length <= 47) {
            return str;
        }
        return `${str.slice(0, 47)} ...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <>
            <li>
                <div className="thumb">
                    <Link to={`/blog/${slug}`}>
                        <img src={`${image}`} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta-title">
                        <span className="post-date">{new Date(createdAt.seconds * 1000).toDateString()}</span>
                    </div>
                    <Link to={`/blog/${slug}`}>{truncatedTitle}</Link>
                </div>
            </li>
        </>
    );
};

export default SingleRecentPost;