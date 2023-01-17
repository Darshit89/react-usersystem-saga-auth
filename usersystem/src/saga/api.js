import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Gets the headers.
 *
 */
const getHeaders = () => {
  let authToken = localStorage.auth_token ? localStorage.auth_token : null;

  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  if (authToken) {
    config.headers.authorization = authToken;
  }

  return config;
};

export const CreateData = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      userData,
      getHeaders()
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
