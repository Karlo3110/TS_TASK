import AxiosInstance from "../api/axios";

async function getArticleList(name) {
  try {
    const response = await AxiosInstance.get(`/artikli/naziv/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching article list:", error);
    throw error;
  }
}

export default getArticleList;
