import ImageCard from "./imageCard";
import Masonry from "react-masonry-css";
import { ImageItem } from "../interfaces";
import "../css/masonry.css";

interface ImageContainerProps {
  imageList: ImageItem[];
}

const ImageContainer = ({ imageList }: ImageContainerProps) => {
  return (
    <Masonry
      breakpointCols={{ default: 3, 800: 2, 640: 1 }}
      className="masonry-grid gap-4 px-4"
      columnClassName="masonry-grid_column"
    >
      {imageList?.map(({ src, height }, index) => {
        const imageProps = {
          key: index,
          src,
          index,
          sx: { height },
        };
        if (src)
          return <ImageCard {...imageProps} />;
      })}
    </Masonry>
  );
};

export default ImageContainer;
