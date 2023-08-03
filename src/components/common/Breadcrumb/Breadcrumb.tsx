import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Breadcrumb.styles.css";

const Breadcrumb = () => {
  const location = useLocation();

  const pathParts = location.pathname
    .split("/")
    .filter((part) => part.trim() !== "");

  let toPath = "";

  const linkList = pathParts.map((part, index) => {
    const hashLink = `${toPath}/#${part}`;
    toPath = `${toPath}/${part}`;

    //Check for #links.
    const isHashLink = part === "projects" ? true : false;
    const linkTo = isHashLink ? hashLink : toPath;

    const isActiveClass = index === pathParts.length - 1 ? "is-active" : "";
    const currAriaAttribute = index === pathParts.length - 1 ? "page" : false;

    return (
      <li key={index} className={isActiveClass}>
        <Link to={linkTo} aria-current={currAriaAttribute}>
          {part}
        </Link>
      </li>
    );
  });

  return (
    <nav className="breadcrumb is-medium" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {linkList}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
