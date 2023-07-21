//TODO: fix navbar target to only be placed when we dont have navBarOffset

import { HeroProps } from "../../../types/AppTypes";
import "./Hero.styles.css";

const Hero = ({
  // key = "noKeyProvided",
  background = "",
  size = "is-fullheight",
  title = "",
  subtitle = "",
  navBarOffset = false,
}: HeroProps) => {
  const navBarOffsetHero = (
    //Empty div to shift hero below navbar when navBarOffset property is true. The bulma framework has a "with-navbar" modifier for fullheight hero's but does not for any other size.
    <div className="navBarOffset"></div>
  );
  const navBarObserverTarget = navBarOffset ? "" : "navBarObserverTarget"; //Target for NavBar inersection Observer.

  const scrollMarginTopClass = navBarOffset ? "heroSMT" : "";

  return (
    <div>
      {navBarOffset ? navBarOffsetHero : null}
      <section
        id="home"
        className={`hero is-dark ${size} ${scrollMarginTopClass}`}
        style={{
          backgroundImage: background,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-head"></div>
        <div id={navBarObserverTarget} className="hero-body">
          <div className="is-flex is-flex-direction-column">
            <p className="title has-text-light is-size-1">{title}</p>
            <p className="subtitle has-text-light is-size-4">{subtitle}</p>
          </div>
        </div>
        <div className="hero-foot borderBottom"></div>
      </section>
    </div>
  );
};

export default Hero;
