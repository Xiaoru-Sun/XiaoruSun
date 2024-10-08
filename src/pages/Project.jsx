import projects from "../../data/project_data.json";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  return (
    <>
      <div className="md:mt-[80px] mt-10 w-[80%]">
        <SectionHeader title="Project" />
        <div className="flex flex-col items-center justify-evenly">
          {projects.data.map((project, index) => (
            <div
              key={index}
              className="mt-4 w-full border border-solid-2px rounded-lg"
            >
              <Fade direction="right" duration={300 * (index + 1)}>
                <ProjectCard project={project} />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
