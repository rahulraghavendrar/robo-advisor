import axios from "axios";

const API = axios.create({

  baseURL:"http://127.0.0.1:8000"

});

export const getDashboardData = async() => {

  return API.get(
    "/portfolio/dashboard"
  );
};

export const getPortfolio = async() => {

  return API.get(
    "/portfolio/"
  );
};

export const getValuation = async() => {

  return API.get(
    "/portfolio/valuation"
  );
};

export const getAnalytics = async() => {

  return API.get(
    "/portfolio/analytics"
  );
};

export const addStock = async(data) => {

  return API.post(
    "/portfolio/add",
    data
  );
};

export const updateStock = async(
  id,
  data
) => {

  return API.put(
    `/portfolio/update/${id}`,
    data
  );
};

export const deleteStock = async(id) => {

  return API.delete(
    `/portfolio/delete/${id}`
  );
};