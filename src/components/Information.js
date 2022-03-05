import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { API_KEY } from "../Request";
import Template from "./Template";

const Information = (props) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const mounted = useRef();
  const prevProps = useRef(id);
  useEffect(() => {
    let isCancelled = false;
    const load = async () => {
      const request = await axios.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      setData(request.data);
      mounted.current = true;
    };
    if (!mounted.current) {
      load();
    } else {
      if (prevProps.current != id) {
        load();
        prevProps.current = id;
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [id]);
  return <>{data && <Template data={data} />}</>;
};

export default Information;
