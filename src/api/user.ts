import { API_ENDPOINT, postData } from "./commons";

export const callAPI = (data: any) => {
  try {
    // return getData("/get");
    return postData(data, API_ENDPOINT + "/post");
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
