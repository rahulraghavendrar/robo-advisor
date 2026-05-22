import axios from "axios";

const API = axios.create({

  baseURL:"http://127.0.0.1:8000"

});

export const loginUser = async(data) => {

  return API.post(
    "/auth/login",
    data
  );
};

export const registerUser = async(data) => {

  return API.post(
    "/auth/register",
    data
  );
};