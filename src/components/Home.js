import { faPlay, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../Request";
import Selection from "./Selection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [featured, setFeatured] = useState();
  const [trending, setTrending] = useState();
  // const requests_key = Object.keys(requests);
  useEffect(() => {
    const load = async () => {
      const request = await axios.get(requests[0]["url"]);
      const randomNum =
        Math.floor(Math.random() * request.data.results.length) - 1;
      // console.log(request.data.results[randomNum]);
      setFeatured(request.data.results[randomNum]);
      setTrending(request.data.results);
    };
    load();
  }, []);
  return (
    <div>
      {featured && (
        <>
          <div className="relative sm:h-1" style={{ height: "40em" }}>
            <div className="z-10 w-full absolute top-0 flex items-center justify-between px-4 py-4">
              <img
                src={require("../assets/netflix_logo.png")}
                className="object-cover h-9"
              />
              <img src={require("../assets/avatar.png")} className="w-10" />
            </div>
            <div className="h-full absolute w-full object-cover top-0 -z-10 bg-black">
              <LazyLoadImage
                height="100vh"
                width="100%"
                effect="blur"
                src={`https://www.themoviedb.org/t/p/original${featured["backdrop_path"]}`}
              />
            </div>
            <div
              className="z-10 bg-gradient-to-r from-gray-900 h-full flex items-center"
              style={{
                boxShadow: "rgb(0 0 0) 24px -103px 39px -66px inset",
              }}
            >
              <div className=" flex tablet:items-center mobile:items-end h-full">
                <div className="max-w-2xl text-white px-8 py-8 ">
                  <p className="my-3 text-5xl font-bold ">
                    {featured?.name ||
                      featured?.title ||
                      featured?.original_name}
                  </p>
                  <ul className="flex">
                    <li>
                      <span className="text-sm px-2 py-2 my-2 border mr-2 border-white inline-block font-bold ">
                        {featured.release_date?.split("-")[0] ||
                          featured.first_air_date?.split("-")[0]}
                      </span>
                    </li>
                    <li>
                      <span className="text-sm px-2 py-2 my-2 mr-2 inline-block ">
                        {featured["media_type"].toUpperCase()}
                      </span>
                    </li>
                    <li>
                      <span className="text-sm px-2 py-2 my-2 mr-2 inline-block ">
                        {`Vote Average. ${featured["vote_average"]}`}
                        <FontAwesomeIcon className="ml-1" icon={faStar} />
                      </span>
                    </li>
                  </ul>
                  <div className="flex my-2">
                    <button
                      className="border hover:border-white border-transparent mr-2 px-7 backdrop-contrast-50  py-2 "
                      style={{ background: "rgba(0,0,0,.5)" }}
                    >
                      <Link to={`/mtv/${featured.id}`}>
                        <FontAwesomeIcon icon={faPlay} className="mr-2" /> Play
                      </Link>
                    </button>
                    <button
                      className="hover:border border-white mr-2 px-7 backdrop-contrast-50  py-2 "
                      style={{ background: "rgba(0,0,0,.5)" }}
                    >
                      <FontAwesomeIcon icon={faPlus} className="mr-2" /> My List
                    </button>
                  </div>
                  <p className="my-3 leading-6 clamp">{featured["overview"]}</p>
                </div>
              </div>
            </div>
          </div>

          {requests.map(({ title, url }, index) => (
            <div
              className="bg-black mobile:px-3 laptop:px-9 py-3 relative"
              key={index}
            >
              {index == 0 ? (
                <Selection
                  title={requests[0].title}
                  fetchUrl={requests[0].url}
                  width="120px"
                />
              ) : (
                <Selection title={title} fetchUrl={url} width="210px" />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
