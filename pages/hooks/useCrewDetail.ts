import { useEffect, useState } from "react";
import axiosGuide from "../api/axiosGuide";

const useCrewDetail = (id) => {
  const [crewMember, setCrewMember] = useState(null); // Use null for single crew member
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Track potential errors

  const loadCrewDetail = async (id) => {
    setIsLoading(true);
    setError(null); // Reset error before each request

    try {
      const response = await axiosGuide.get(`https://api.spacexdata.com/v4/crew/${id}`);
      setCrewMember(response.data);
    } catch (error) {
      console.error("Error fetching crew member:", error);
      setError(error); // Store error for handling
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) { // Only fetch if id is provided
      loadCrewDetail(id);
    }
  }, [id]); // Dependency array for id

  return [crewMember, isLoading, error]; // Return all relevant data
};

export default useCrewDetail;