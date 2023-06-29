import { useEffect } from "react";
import { useNavLinkContext } from "../../../contexts/NavLinkContext/NavLinkContext";
import { SectionData } from "../../../types/AppTypes";

const ContentPage = ({ sections }: { sections: SectionData[] }) => {
  const [, setNavLinks] = useNavLinkContext();
  // let hasHero = false;
  // let heroSize: HeroProps["size"];
  // let heroNavBarOffset: HeroProps["navBarOffset"];

  const content = sections.map((section) => {
    return <div key={section.label}>{section.content}</div>;
  });

  // for (const item of sections) {
  //   if (isValidElement(item.content)) {
  //     const element = item.content;
  //     // eslint-disable-next-line
  //     if (element.props && (element.type as any).name === "Hero") {
  //       const heroProps = item.content.props as HeroProps;
  //       hasHero = true;
  //       heroSize = heroProps.size;
  //       heroNavBarOffset = heroProps.navBarOffset;
  //       break;
  //     }
  //   }
  // }

  const navLinkArray = sections.map((section) => {
    return { label: section.label, link: section.link };
  });

  useEffect(() => {
    setNavLinks(navLinkArray);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div>{content}</div>;
};

export default ContentPage;
