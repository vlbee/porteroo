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

  // const data = [{ location: 0, time: 10 }, { location: 1, time: 30 }, { location: 3, time: 40 }]

  useEffect(() => {
    if (rerun) return { loading: false, data: [{ location: "Lab", time: 30 }, { location: "Ward Blue", time: 40 }], error: false }
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
          // const json = await response.json();
          setData([{ location: "Ward Green", time: 10 }, { location: "Lab", time: 30 }, { location: "Ward Blue", time: 40 }]);
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

  return { loading, data: data || [], error };
};
