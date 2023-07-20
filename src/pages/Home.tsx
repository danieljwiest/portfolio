import About from "../components/Home/components/About/About";
import Projects from "../components/Home/components/Projects/Projects";
import Resume from "../components/Home/components/Resume/Resume";
import ContentPage from "../components/common/ContentPage/ContentPage";
import Hero from "../components/common/Hero/Hero";

const Home = () => {
  const heroProps = {
    title: "I'm Daniel Wiest",
    subtitle: "An Entry Level Software Engineer",
    background: "url(../../../public/img/hero_img_example.jpg)",
  };

  const sections = [
    { label: "Home", link: "#home", content: <Hero {...heroProps} /> },
    { label: "About", link: "#about", content: <About /> },
    { label: "Projects", link: "#projects", content: <Projects /> },
    { label: "Resume", link: "#resume", content: <Resume /> },
  ];

  return <ContentPage sections={sections} />;
};

export default Home;
