import { useState, useEffect } from "react";

const nextPickup = {
  data: {
    expectedTime: 1710,
    expectedDeliveryTime: 1655,
    porterName: "Joe Porter",
    urgent: false // change this to test different button states
  }
};

export const fetchPost = async url => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.status !== 200) {
      return { error: true, data: null, loading: false };
    } else {
      const json = await response.json();
      return { error: false, data: json, loading: false };
    }
  } catch {
    return { error: true, data: null, loading: false };
  }
};

export const useFetchGet = (url, rerun) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      console.log('RUNNING ')
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
  }, [url, rerun]);

  return { loading, data, error };
};
