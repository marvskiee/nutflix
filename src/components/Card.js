import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

function Card({ data, width, title }) {
  return (
    <Link to={`/mtv/${data.id}`}>
      <div
        className={` 
      inline-block 
      my-1 
      mx-1 
      relative
      custom-card-hover 
       border-transparent 
      transition-transform 
      hover:scale-105
      cursor-pointer
      bg-black`}
        style={{ width }}
      >
        <LazyLoadImage
          effect="blur"
          src={`https://www.themoviedb.org/t/p/original${
            title != "Popular in Netflix"
              ? data?.backdrop_path || data?.poster_path
              : data?.poster_path || data?.backdrop_path
          }`}
          width={width}
        />
        <div className="hover:border-1 hidden-info p-3 w-full absolute -bottom-11 z-20 bg-gradient-to-t from-zinc-700">
          <p className="text-white break-words">
            {data?.name || data?.title || data?.original_name}
          </p>
          <p className="text-white text-sm px-2 my-1 border border-white inline-block font-bold ">
            {data.release_date?.split("-")[0] ||
              data.first_air_date?.split("-")[0]}
          </p>
          <p className="text-white text-sm my-1 ">
            {`Vote Avg. ${data["vote_average"]}`}
            <FontAwesomeIcon className="ml-1" icon={faStar} />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
