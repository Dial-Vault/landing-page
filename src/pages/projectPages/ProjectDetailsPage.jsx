import LayoutV5 from '@/components/layouts/LayoutV5';
import ProjectDetailsContent from '@/components/projects/ProjectDetailsContent';
import { useParams } from 'react-router-dom';
import Preloader from '@/components/utilities/Preloader';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';

const ProjectDetailsPage = () => {

    const { slug } = useParams();
    const [projectInfo, setProjectInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const q = query(collection(db, "projects"), where("slug", "==", slug));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    setProjectInfo(doc.data());
                } else {
                    setProjectInfo(null);
                }
            } catch (error) {
                console.error("Error fetching project:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [slug]);

    if (loading) return <Preloader/>;
    if (!projectInfo) return <div className="container py-5"><h2>Project not found</h2></div>;

    return (
        <>
            <LayoutV5>
                <ProjectDetailsContent projectInfo={projectInfo} />
            </LayoutV5>
        </>
    );
};

export default ProjectDetailsPage;