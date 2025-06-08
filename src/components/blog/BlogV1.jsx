
import SingleBlogV1 from './SingleBlogV1';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
// Constants
const SECTION_TITLE = {
    subTitle: "Blog Insight",
    mainTitle: "Valuable insights to change your startup idea"
};

const BlogV1 = ({ sectionClass }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const blogCollection = collection(db, "blogs");
            const blogSnapshot = await getDocs(blogCollection);
            const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBlogs(blogList);
        };
        fetchPosts();
    }, []);
    return (
        <div className={`blog-area home-blog bottom-less ${sectionClass || ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{SECTION_TITLE.subTitle}</h4>
                            <h2 className="title">{SECTION_TITLE.mainTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {blogs.slice(0, 3).map(blog => (
                        <div className="col-xl-4 col-md-6 col-lg-6 mb-30" key={blog.id}>
                            <SingleBlogV1 blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogV1;
