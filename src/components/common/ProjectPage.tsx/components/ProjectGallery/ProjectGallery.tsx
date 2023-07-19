//TODO: Implement an image modal when clicking on an image.

interface GalleryData {
  folderUrl: string;
  fileNameStart: string;
  fileExt: string;
  numOfPics: number;
}

const ProjectGallery = ({
  title,
  galleryData,
}: {
  title: string;
  galleryData: GalleryData;
}) => {
  const galleryTitle = `${title} Project Gallery`;
  const {
    numOfPics: numItems,
    folderUrl,
    fileNameStart,
    fileExt,
  } = galleryData;

  const galleryArray = [];
  for (let i = 1; i <= numItems; i++) {
    const index = `${i}`;
    const imgUrl = folderUrl.concat(fileNameStart, index, fileExt);
    console.log(imgUrl);
    galleryArray.push(imgUrl);
  }

  const NUM_OF_COLUMNS = 3;
  const numRows = Math.ceil(numItems / NUM_OF_COLUMNS);

  const gridRows: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    const rowStartIndex = i * NUM_OF_COLUMNS;
    const rowEndIndex = Math.min(rowStartIndex + NUM_OF_COLUMNS, numItems);
    const rowItems = galleryArray.slice(rowStartIndex, rowEndIndex);
    gridRows.push(rowItems);
  }

  return (
    <section
      id="projectGallery"
      className="section is-large has-background-link-light py-6"
    >
      <div className="container ">
        <div className="title is-2 is-flex is-justify-content-center pb-6">
          {galleryTitle}
        </div>
        <div className="tile is-ancestor is-vertical">
          {gridRows.map((row, rowIndex) => (
            <div className="tile is-ancestor" key={rowIndex}>
              {row.map((item: string) => (
                <div
                  className="tile is-parent is-4 is-justify-content-center"
                  key={item}
                >
                  <figure className="image is-square">
                    <img src={item} alt={fileNameStart}></img>
                  </figure>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
