import { useInfiniteQuery } from "react-query";
import { pipe, map, concat, toArray } from "@fxts/core";
import { fetchImages } from "../functions";
import ImageContainer from "./imageContainer";
import { useEffect, useRef, useState } from "react";
import { ImageItem } from "../interfaces";
import LoadingSpin from "react-loading-spin";

const Template = () => {
  const [imageList, setImageList] = useState<ImageItem[]>([]);
  const [page, setPage] = useState(1);

  const query = useInfiniteQuery(["getImage"], fetchImages, {
    refetchOnWindowFocus: false,
    retry: 0,
    getNextPageParam: (lastPages) => {
      // setPage(lastPages.pageParam);
      return lastPages.pageParam;
    },
    onSuccess: (data: any) => {
      data.pages[page - 1].response
        .json()
        .then((list: any) => {
          console.log(list);
          pipe(
            list,
            map(
              (item: any): ImageItem => ({
                src: item.download_url,
                height: item.height,
              })
            ),
            concat(imageList),
            toArray,
            setImageList
          );
        })
        .catch((e: Error) => console.log(e.message));
      setPage(page + 1);
    },
    onError: (e: Error) => {
      console.log(e.message);
    },
  });

  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) query.fetchNextPage();
    });
    observer.observe(target.current as Element);
  }, [target]);

  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] px-2 md:px-4 lg:px-0 relative">
      <ImageContainer {...{ imageList }} />
      <div className="absolute bottom-0">
        <LoadingSpin animationDuration={"2s"} primaryColor="#000" />
      </div>
      <div
        ref={target}
        className="absolute w-full h-[300px] lg:h-[700px] bottom-0"
      />
    </div>
  );
};

export default Template;
