//TODO: make DataItem interface a template string array thing so that its more universal
//TODO: move to common components folder.

import { useState } from "react";
import TileBox from "./TileBox";

interface DataItem {
  id: number;
  category: string;
  title: string;
  imgURL: string;
}

const GridComponent = ({ data }: { data: DataItem[] }) => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categoryList = Array.from(new Set(data.map((item) => item.category))); // get unique categories from data
  const tabs = ["All", ...categoryList]; // add 'All' as a tab

  const filteredData = data.filter((item: DataItem) => {
    if (activeTab === "All") {
      return true;
    } else {
      return item.category === activeTab;
    }
  });

  const numItems = filteredData.length;
  const numRows = Math.ceil(numItems / 3);

  const gridRows: DataItem[][] = [];
  for (let i = 0; i < numRows; i++) {
    const rowStartIndex = i * 3;
    const rowEndIndex = Math.min(rowStartIndex + 3, numItems);
    const rowItems = filteredData.slice(rowStartIndex, rowEndIndex);
    gridRows.push(rowItems);
  }

  return (
    <div>
      <div className="tabs is-centered" role="tablist">
        <ul>
          {tabs.map((tabName, index) => (
            <li
              key={index}
              className={activeTab === tabName ? "is-active" : ""}
              onClick={() => setActiveTab(tabName)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setActiveTab(tabName);
                }
              }}
              role="tab"
              aria-selected={activeTab === tabName ? "true" : "false"}
              aria-controls={`panel-${tabName}`}
              tabIndex={0}
            >
              <a className="is-size-4">{tabName}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="tile is-ancestor is-vertical">
        {gridRows.map((row, rowIndex) => (
          <div className="tile is-ancestor" key={rowIndex}>
            {row.map((item: DataItem) => (
              <div
                className="tile is-parent is-4 is-justify-content-center"
                key={item.id}
              >
                <TileBox data={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
