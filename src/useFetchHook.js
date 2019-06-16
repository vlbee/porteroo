import { useState, useEffect } from "react";

const nextPickup = {
  data: {
    expectedTime: 1710,
    expectedDeliveryTime: 1655,
    porterName: "Joe Porter",
    urgent: false // change this to test different button states
  }
};

export const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (response.status !== 200) {
          setError(true);
          setData(null);
          setLoading(false);
        } else {
          const json = await response.json();
          setData(json);
          setLoading(false);
        }
      } catch {
        setError(true);
        // setData(null);
        setData(nextPickup.data);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { loading, data, error };
};
