import BlogData from '@/assets/jsonData/blog/BlogData.json'
import SingleRecentPost from './SingleRecentPost';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";

const RecentPostsWidget = () => {
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
        <>
            <div className="sidebar-item recent-post">
                <h4 className="title">Recent Post</h4>
                <ul>
                    {blogs.slice(0, 3).map(blog =>
                        <SingleRecentPost blog={blog} key={blog.id} />
                    )}
                </ul>
            </div>
        </>
    );
};

export default RecentPostsWidget;