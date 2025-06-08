import SocialShare from '../utilities/SocialShare';
import BlogPostComments from './BlogPostComments';
import BlogCommentForm from '../form/BlogCommentForm';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchiveWidget from '../widgets/ArchiveWidget';
import FollowWidget from '../widgets/FollowWidget';
import TagsWidget from '../widgets/TagsWidget';
import team1Thumb from '/assets/img/team/v1.jpg'
import { Link } from 'react-router-dom';

const BlogSingleWithSidebarContent = ({ blogInfo }) => {
    const {author,createdAt,slug, image, title, content } = blogInfo

    return (
        <>
            <div className="blog-area single full-blog right-sidebar full-blog default-padding-bottom">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-style-two item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                            <Link to="#">
                                                <img src={image} style={{width:'100%'}} alt="Thumb" />
                                            </Link>
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        {/* <Link to="#"><i className="far fa-calendar-alt"></i> {new Date(createdAt.seconds * 1000).toLocaleString()}</Link> */}
                                                    </li>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-user-circle" /> {author}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* Post Author */}
                                <div className="post-author">
                                    {/* <div className="thumb">
                                        <img src={team1Thumb} alt="Thumb" />
                                    </div> */}
                                    <div className="info">
                                        {/* <h5><Link to="#">{author}</Link></h5> */}
                                        <h2>
                                            {title}
                                        </h2>
                                        <div dangerouslySetInnerHTML={{ __html: content }} />
                                    </div>
                                </div>
                                {/* Post Author */}

                                {/* Post Tags Share */}
                                <div className="post-tags share">
                                    <div className="tags">
                                        <h4>Tags: </h4>
                                        <Link to="#">Algorithm</Link>
                                        <Link to="#">Data science</Link>
                                    </div>
                                    <div className="social">
                                        <h4>Share:</h4>
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                                {/* Post Tags Share */}

                                {/* Start Post Pagination */}
                                <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link to="#">
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Previus Post <h5>Discovery incommode</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link to="#">
                                            <div className="nav-title">Next Post <h5>Discovery incommode</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                {/* End Post Pagination */}

                                {/* Start Blog Comment */}
                                {/* <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                            <BlogPostComments />
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h3>Leave a comments</h3>
                                            </div>
                                            <BlogCommentForm />
                                        </div>
                                    </div>
                                </div> */}
                                {/* End Comments Form */}

                            </div>
                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    {/* <SearchWidget /> */}
                                    <RecentPostsWidget />
                                    {/* <CategoryWidget /> */}
                                    {/* <GalleryWidget /> */}
                                    {/* <ArchiveWidget /> */}
                                    <FollowWidget />
                                    {/* <TagsWidget /> */}
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleWithSidebarContent;