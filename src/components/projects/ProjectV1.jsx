import { Link } from 'react-router-dom';
import ProjectV1Data from "@/assets/jsonData/projects/ProjectV1Data.json";
import SingleProjectV1 from './SingleProjectV1';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; // update path based on your project

// Text constants
const HEADING = "View our security operations in action";
const DESCRIPTION = "Take a look at some of the key deployments we've successfully executed across residential, corporate, and event security domains.";
const FEATURES = [
    "24/7 Response Readiness",
    "Client-Centric Execution"
];
const BUTTON_LABEL = " Key Projects";

const ProjectV1 = () => {
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
        <>
            <div className="project-style-one-area default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pr-60 pr-md-15 pr-xs-15">
                            <div className="project-style-one-info bg-cover text-light" style={{ backgroundImage: 'url(/assets/img/shape/1.jpg)' }}>
                                <h3>{HEADING}</h3>
                                <p>{DESCRIPTION}</p>
                                <ul className="list-style-two mt-20">
                                    {FEATURES.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <Link className="btn-style-two" to="/project">
                                    <i className="fas fa-arrow-right" /> {BUTTON_LABEL}
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="project-style-one-items">
                                <div className="accordion" id="projectAccordion">
                                    {projects.map(project =>
                                        <SingleProjectV1 project={project} key={project.id} expanded = {true} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV1;
