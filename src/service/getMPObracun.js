import AxiosInstance from "../api/axios";

async function getMPObracun(pj_uid, fromDate, toDate) {
  try {
    const endpoint = toDate
      ? `/mpobracun/artikli/${pj_uid}/${fromDate}/${toDate}`
      : `/mpobracun/artikli/${pj_uid}/${fromDate}`;

    const response = await AxiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching article list:", error);
    throw error;
  }
}

export default getMPObracun;
