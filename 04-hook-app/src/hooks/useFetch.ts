import { useEffect, useState } from "react";

interface State<T> {
  data: T | null;
  isLoading: boolean;
  hasError: null | string;
}

export function useFetch<T = unknown>(url: string): State<T> {
  const [state, setstate] = useState<State<T>>({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setstate({
      ...state,
      isLoading: true,
    });

    const response = await fetch(url);
    const data = await response.json();

    setstate({
      hasError: null,
      data,
      isLoading: false,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state,
  };
}
