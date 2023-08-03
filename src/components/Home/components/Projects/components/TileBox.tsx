//TODO: rename component

import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import toKebabCase from "../../../../../utils/toKebabCase";

//TODO rename data item. it is not clear.
interface DataItem {
  id: number;
  title: string;
  category: string;
  imgURL: string;
}

const TileBox = ({ data }: { data: DataItem }) => {
  const [hoverClass, setHoverClass] = useState("");

  const title = (
    <p className="is-size-3 has-text-white has-text-centered">{data.title}</p>
  );
  const subtitle = <p className="is-size-5 has-text-white">{data.category}</p>;
  const routeId = toKebabCase(data.title);

  return (
    <article
      className={`tile is-child  is-flex is-flex-direction-column is-align-items-center  is-justify-content-center imgZoomWrapper`}
      style={{ "--imgURL": data.imgURL } as CSSProperties}
      onMouseEnter={() => {
        setHoverClass("hover");
      }}
      onMouseLeave={() => {
        setHoverClass("");
      }}
    >
      <Link
        to={`/projects/${routeId}`}
        className={`is-flex is-flex-direction-column is-align-items-center  is-justify-content-center square tileImage ${hoverClass}`}
      >
        {hoverClass === "hover" ? title : null}
        {hoverClass === "hover" ? subtitle : null}
      </Link>
    </article>
  );
};

export default TileBox;

// style={{
//   background: "url('img/shed_final.jpg')",
// }}
