import { useQuery } from "@tanstack/react-query";
import React from "react";

const Main: React.FC = () => {
  // https://jsonplaceholder.typicode.com/posts

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Example Data not ok");
      }

      const data = await res.json();

      return data;
    } catch (err) {
      console.log("Example Data Err", err);
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["fakeData"],
    queryFn: getData,
  });

  console.log(data);
  if (isLoading) return <div>Loding ...</div>;
  if (isError) return <div>Error Fetching Data</div>;

  return <div>Main Page</div>;
};

export default Main;
