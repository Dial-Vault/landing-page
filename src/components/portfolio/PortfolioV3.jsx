import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; // update path based on your project
import SinglePortfolioV3 from "./SinglePortfolioV3";

const PortfolioV3 = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
    const fetchProjects = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsList = querySnapshot.docs
                .map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .filter(project => project.slug !== "test"); // <-- filter out "test" slug
            setProjects(projectsList);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    fetchProjects();
}, []);


    return (
        <div className="portfolio-style-three-area default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Recent Work</h4>
                            <h2 className="title">Featured Works.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt--100 mt-md--50 mt-xs--50">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row gutter-xl">
                            {projects.map((project) => (
                                <div className="col-lg-6 col-md-6 item-center" key={project.id}>
                                    <SinglePortfolioV3 portfolio={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioV3;
