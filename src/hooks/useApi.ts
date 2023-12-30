import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface UseApiParams {
  method: "get" | "post" | "put" | "delete"; // Add other HTTP methods if needed
  url: string;
  headers?: Record<string, string>;
  body?: any;
  cache?: any;
}

const useApi = ({ method, url, headers, body, cache }: UseApiParams) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const config: AxiosRequestConfig = {
        method,
        url,
        headers: headers || {},
      };

      if (body) {
        config.data = body;
      }

      try {
        const response = await axios(config);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [body, cache]); // Dependencies based on parameters passed

  return { data, loading, error };
};

export default useApi;
