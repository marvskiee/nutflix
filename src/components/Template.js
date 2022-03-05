import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { API_KEY } from "../Request";
import Selection from "./Selection";
import axios from "../axios";
function Template({ data }) {
  const {
    id,
    backdrop_path,
    original_title,
    title,
    genres,
    overview,
    production_companies,
    poster_path,
    release_date,
    vote_average,
  } = data;

  return (
    <>
      {data != null && (
        <div className="relative sm-h-1" style={{ height: "40em" }}>
          <div className="z-10 w-full absolute top-0 flex items-center justify-between px-4 py-4">
            <Link to="/">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="h-5 cursor-pointer hover:bg-white hover:text-black transition-colors text-white rounded-full bg-zinc-900/50 p-4"
              />
            </Link>
            <img src={require("../assets/avatar.png")} className="w-10" />
          </div>
          <div className="h-full absolute w-full object-cover top-0 -z-10  bg-gradient-to-t from-gray-900">
            <LazyLoadImage
              effect="blur"
              height="100%"
              width="100%"
              alt="background"
              src={`https://www.themoviedb.org/t/p/original${backdrop_path}`}
            />
          </div>
          <div
            className="z-10 bg-gradient-to-r from-gray-900 h-full flex items-center"
            style={{
              boxShadow: "rgb(0 0 0) 24px -103px 39px -66px inset",
            }}
          >
            <div className=" flex items-end h-full">
              <div className="flex items-center">
                <div className="laptop:p-8 mobile:p-4 text-white">
                  <p className="my-3 text-5xl font-bold ">
                    {title || original_title}
                  </p>
                  <div className="flex items-center p-2">
                    <LazyLoadImage
                      effect="blur"
                      width="128"
                      src={`https://www.themoviedb.org/t/p/original${poster_path}`}
                      alt="poster"
                    />
                    <div className="mx-3">
                      <p className="my-1">
                        {`Vote Average. ${vote_average}`}
                        <FontAwesomeIcon className="ml-1" icon={faStar} />
                      </p>
                      <p className="my-1">
                        Released: {release_date?.split("-")[0] || null}
                      </p>
                      <p className="">Genres:</p>
                      <div className="flex flex-wrap">
                        {genres &&
                          genres.map(({ id, name }, index) => (
                            <p className="px-1" key={index}>
                              {name}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* overview */}
          <div className="text-white bg-black pb-10">
            <div className="laptop:px-8 py-4 px-4">
              <p className="py-3 font-semibold text-2xl">Overview:</p>
              <p className="leading-8">{overview}</p>
            </div>
            <div className="laptop:px-8 py-4 px-2 relative">
              <Selection
                title="Similar"
                fetchUrl={`/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`}
                width="210px"
              />
            </div>
            <div className="laptop:px-8 py-4 px-4">
              <p className="py-3 font-semibold text-2xl">
                Production Companies:
              </p>
              {production_companies &&
                production_companies.map(({ name, id, logo_path }, key) => (
                  <div
                    key={key}
                    className="m-2 bg-white inline-block w-32 min-w-min"
                  >
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      height="100%"
                      src={
                        logo_path
                          ? `https://www.themoviedb.org/t/p/original${logo_path} `
                          : require("../assets/netflix_logo.png")
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Template;
