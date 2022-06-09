import { concat, pipe, take, takeRight, map, join } from "@fxts/core";

interface ImageCardProps {
  index: number;
  src: string;
  sx: {height: number};
}

const reduceImageSize = (src: string) => {
  return pipe(
    src.split("/"),
    takeRight(2),
    map((s: string) => parseInt(s) / 3),
    map(Math.floor),
    map((n: number) => n + ""),
    concat(pipe(
      src.split("/"),
      take(5)
    )),
    join("/")
  )
}

const ImageCard = ({index, src, sx}: ImageCardProps) => {

  return (
    <div>
      <img src={reduceImageSize(src)} height={sx.height} alt={index + ""} className="w-full object-contain rounded-sm shadow-md" />
    </div>
  )
}

export default ImageCard;