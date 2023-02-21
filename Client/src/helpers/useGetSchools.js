import axios from "axios";
import React, { useState, useEffect } from "react";

export const useGetSchools = (path) => {
  const API = axios.create({ baseURL: "http://localhost:5000" });
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get(`/schools${path}`);
      setSchools(response.data);
    };

    fetchData();
  }, []);

  return { schools, setSchools };
};
