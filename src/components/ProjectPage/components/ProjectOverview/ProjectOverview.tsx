//TODO: Implement a "builder" which composes the various sections (project overview, goals, etc) and adds to an array. Then spread the array in the return instead of copy/pasting code. The builder can check for empty sections and filter those out
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { ProjectLink } from "../../../../../types/AppTypes";

const ProjectOverview = ({
  title,
  overview,
  goals,
  techUsed,
  hurdles,
  projectLinks,
}: {
  title: string;
  overview: JSX.Element;
  goals: string[];
  techUsed: string[];
  hurdles: string[];
  projectLinks?: ProjectLink[];
}) => {
  const goalList = goals.map((goal, index) => {
    return (
      <div key={`Goal-${index}`} className="is-flex pb-2">
        <span className="icon is-flex-shrink-0 ml-2 pt-3">
          <FontAwesomeIcon icon={faMinus} size="xs" />
        </span>
        <span className="is-size-5">{goal}</span>
      </div>
    );
  });

  const techUsedList = techUsed.map((tech, index) => {
    return (
      <div key={`Tech-${index}`} className="is-flex  pb-2">
        <span className="icon is-flex-shrink-0 ml-2 pt-3">
          <FontAwesomeIcon icon={faMinus} size="xs" />
        </span>
        <span className="is-size-5">{tech}</span>
      </div>
    );
  });

  const hurdlesList = hurdles.map((hurdle, index) => {
    return (
      <div key={`Hurdle-${index}`} className="is-flex  pb-2">
        <span className="icon is-flex-shrink-0 ml-2 pt-3 ">
          <FontAwesomeIcon icon={faMinus} size="xs" />
        </span>
        <span className="is-size-5">{hurdle}</span>
      </div>
    );
  });

  const projectLinkList = !projectLinks
    ? null
    : projectLinks.map((link, index) => {
        return (
          <div key={`Hurdle-${index}`} className="is-flex  pb-2">
            <span className="icon is-flex-shrink-0 ml-2 pt-1 ">
              <FontAwesomeIcon icon={faMinus} size="xs" />
            </span>
            <span>
              <a href={link.url}>{link.text}</a>
            </span>
          </div>
        );
      });

  return (
    <section
      id="overview"
      className="section is-large has-background-light py-6 "
    >
      <div className="navBarOffset"></div>
      <div className="container">
        <div className="title is-1 is-flex is-justify-content-center mb-6">
          {title}
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical px-6">
            <div className="mb-5">
              <h1 className="title is-3"> Project Overview</h1>
              <div className="is-size-5"> {overview}</div>
            </div>
            <div className="mb-5">
              <h1 className="title is-3">Goals</h1>
              {...goalList}
            </div>
          </div>
          <div className="tile is-parent is-vertical px-6">
            <div className="mb-5">
              <h1 className="title is-3">Technologies Used</h1>
              {...techUsedList}
            </div>
            <div className="mb-5">
              <h1 className="title is-3">Project Hurdles</h1>
              {...hurdlesList}
            </div>
            {!projectLinkList ? null : (
              <div>
                <h1 className="title is-3">Project Links</h1>
                {...projectLinkList}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
