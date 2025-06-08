import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutV5 breadCrumb="Blogs" title="Latest Blogs">
                <BlogWithSidebarContent />
                {/* <BodyClassV2 /> */}
            </LayoutV5>
        </>
    );
};

export default BlogWithSidebarPage;