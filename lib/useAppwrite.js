import React, { useEffect, useState } from "react";
import { getAllPosts } from "./appwrite";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      let response = await fn();
      setData(response);
    } catch (error) {
      // throw new Error(error);
      Alert.alert(error.message, "this is the error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data, "this is the datad....");

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};
export default useAppwrite;
