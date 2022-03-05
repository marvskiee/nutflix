import axios from "../axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Selection({ fetchUrl, title, width }) {
  const container = useRef();
  let scroll_amount = 0;
  const slideHandler = async (direction) => {
    const el = container.current;
    const scroll_per_click = 240;
    direction === "left"
      ? scroll_amount < 0
        ? (scroll_amount = 0)
        : (scroll_amount -= scroll_per_click)
      : scroll_amount > el.scrollWidth
      ? (scroll_amount = el.scrollWidth)
      : (scroll_amount += scroll_per_click);
    el.scroll(scroll_amount, 0);
  };

  const [data, setData] = useState();
  useEffect(() => {
    const load = async () => {
      const request = await axios.get(fetchUrl);
      setData(request.data.results);
    };
    load();
  }, []);
  return (
    <>
      {data && (
        <>
          <p className="font-semibold text-2xl py-2 px-2 text-white">{title}</p>
          <div
            ref={container}
            className={`overflow-hidden scroll-smooth whitespace-nowrap custom-scroll py-2 px-2 custom-right-shadow ${
              title == "Popular in Netflix" ? "h-60" : "h-44"
            }`}
          >
            {data &&
              data.map((item, key) => (
                <Card key={key} data={item} title={title} width={width} />
              ))}
          </div>
          <button
            onClick={() => slideHandler("left")}
            className="hover:bg-white hover:text-black transition-all text-white absolute left-2 text-md p-3 top-2/4 z-10 rounded-full bg-zinc-900/50"
            style={{ width: "3em" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={() => slideHandler("right")}
            className="hover:bg-white hover:text-black transition-all text-white absolute right-2 text-md p-3 top-2/4 z-10 rounded-full bg-zinc-900/50"
            style={{ width: "3em" }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </>
      )}
    </>
  );
}

export default Selection;
