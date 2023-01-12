import { useEffect, useState } from "react";

const useFetch = (apiAddress) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [connError, setConnError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(apiAddress)
        .then((res) => {
          if (!res.ok) {
            setConnError(`Tidak bisa mengakses resourcess pada ${apiAddress}`);
            throw Error(connError);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
        });
    }, 1000);
  }, [apiAddress]);

  return { data, isPending, connError };
};

export default useFetch;
