import BlogData from '@/assets/jsonData/blog/BlogData.json';
import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useEffect, useState } from 'react';

const BlogSingleWithSidebarPage = () => {

    const { slug } = useParams()
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            const blogCollection = collection(db, "blogs");
            const blogSnapshot = await getDocs(blogCollection);
            const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const matchedPost = blogList.find(b => b.slug === slug || b.id === slug);
            setPost(matchedPost);
        };

        fetchPost();
    }, [slug]);

    return (
        <>
            <LayoutV5 breadCrumb="Blogs" title={post.title}>
                <BlogSingleWithSidebarContent blogInfo={{...post}} />
                <BodyClassV2 />
            </LayoutV5>
        </>
    );
};

export default BlogSingleWithSidebarPage;