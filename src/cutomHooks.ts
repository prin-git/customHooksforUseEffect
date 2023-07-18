import { useState, useEffect } from "react";

export const useTitle = () => {
  const [title, setTitle] = useState("Title ..............");

  useEffect(() => {
    setTimeout(() => setTitle("Title-Hello world"), 3000);
  }, []);

  return { title };
};
