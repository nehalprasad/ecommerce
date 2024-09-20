import axios from 'axios';

// Create a base Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/', // Base URL for the API
  timeout: 10000, // Set a timeout for requests
});

// Common function to fetch data
export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data; // Return the response data
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error; // Rethrow error to be handled in the saga
  }
};
