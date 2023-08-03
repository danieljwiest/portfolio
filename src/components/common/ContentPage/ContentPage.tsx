import { useEffect } from "react";
import { useNavLinkContext } from "../../../contexts/NavLinkContext/NavLinkContext";
import { SectionData } from "../../../types/AppTypes";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const ContentPage = ({
  sections,
  type,
}: {
  sections: SectionData[];
  type: string;
}) => {
  const [, setNavLinks] = useNavLinkContext();

  const content = sections.map((section) => {
    return <div key={section.label}>{section.content}</div>;
  });

  const navLinkArray = sections.map((section) => {
    return { label: section.label, link: section.link };
  });

  if (type !== "homePage") {
    //add a breadcrumb
    const elementIndex =
      content[0].key === "Home" || content[0].key === "home" ? 1 : 0;

    const elementWithBreadcrumb = (
      <div key={content[elementIndex].key} className="is-relative">
        <Breadcrumb />
        {content[elementIndex]}
      </div>
    );

    content.splice(elementIndex, 1, elementWithBreadcrumb);
  }

  useEffect(() => {
    setNavLinks(navLinkArray);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div>{content}</div>;
};

export default ContentPage;
