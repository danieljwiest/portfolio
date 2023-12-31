import { useState } from "react";
import { useNavLinkContext } from "../../../contexts/NavLinkContext/NavLinkContext";
import { NavLinkData } from "../../../contexts/NavLinkContext/NavLinkContext.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.styles.css";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [navLinkData] = useNavLinkContext(); //NavLinkData currently set in the ContentPage componenents.
  const [navOverHero, setNavOverHero] = useState(false);
  const navColor = navOverHero ? "" : "is-dark";
  const textColor = navOverHero && !burgerActive ? "has-text-white" : "";

  //Observer used to update navBar styling on Scroll for Navbars that overlap a Hero.
  const observer = new IntersectionObserver(
    (entries) => {
      // console.log(entries[0].intersectionRatio > 0.7);
      if (entries[0].intersectionRatio > 0.75) {
        setNavOverHero(true);
      } else {
        setNavOverHero(false);
      }
      // console.log(entries[0].intersectionRatio);
    },
    { threshold: [0.75] }
  );

  const target = document.querySelector("#navBarObserverTarget"); //Target is a Hero with a NavBar overlapping the Hero. The ID is located in the Hero Component;

  if (target) {
    observer.observe(target);
  }

  const navLinks =
    navLinkData === null
      ? null
      : navLinkData.map((item: NavLinkData) => {
          let linkDisplay: string | JSX.Element = item.label;
          if (item.label === "home" || item.label === "Home") {
            linkDisplay = burgerActive ? (
              "Top"
            ) : (
              <FontAwesomeIcon icon={faChevronCircleUp} size="lg" />
            );
          }
          return (
            <a
              key={item.label}
              href={item.link}
              className={`navbar-item is-size-4 ${textColor}`}
            >
              {linkDisplay}
            </a>
          );
        });

  return (
    <nav
      className={`navbar ${navColor} is-transparent is-fixed-top`}
      role="navigation"
      aria-label="main navigation"
    >
      {/* Brand */}
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <p
            className={`logo has-text-white is-size-3 has-text-centered has-text-justified`}
          >
            DW
          </p>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => {
            setBurgerActive(!burgerActive);
          }}
          className={`navbar-burger ${burgerActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={burgerActive ? "true" : "false"} //FIX: update this when active?
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      {/* Main */}

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${burgerActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          {navLinks}

          {/* DROP DOWN EXAMPLE */}
          {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-light is-responsive"
                href="/Daniel_Wiest_Software_Engineer_Resume.pdf"
                download="Daniel_Wiest_Software_Engineer_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Download Resume</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
