import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "72a823d7-94b2-4ecd-891f-657d921d168c"
  }
});

export const userAPI = {
  getUsers(currentPage = 1, pageUsersCount = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageUsersCount}`)
      .then(response => {
        return response.data;
      });
  }
};
