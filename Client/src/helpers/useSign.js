import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useSign = (path, nav) => {
  const API = axios.create({ baseURL: "http://localhost:5000" });
  const navigate = useNavigate();

  const makePost = async (data) => {
    const response = await API.post(path, data);
    localStorage.setItem("user", JSON.stringify(response.data));
    navigate(nav);
  };

  return makePost;
};
