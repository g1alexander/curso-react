import { useEffect, useState } from "react";
import { getGifApi } from "../helpers/getGifApi";

export function useFetchGif(category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifApi(category).then((data) => {
      setState({
        data,
        loading: false,
      });
    });
  }, [category]);

  return state;
}
