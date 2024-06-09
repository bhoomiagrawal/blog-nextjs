import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchBlogBySlug = async (slug) => {
  const response = await axios.get(`${API_URL}/${slug}`);
  return response.data;
};
