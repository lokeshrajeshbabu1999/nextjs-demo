import axiosGuide from "@/pages/api/axiosGuide";
import { useEffect, useState } from "react";

const useCrew = () => {
  const [userGuide, setUserGuide] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadUserGuides = () => {
    setIsLoading(true);
    axiosGuide
      .get("https://api.spacexdata.com/v4/crew")
      .then((response) => {
        setUserGuide(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadUserGuides();
  }, []);

  return [userGuide, isLoading];
};

export default useCrew;