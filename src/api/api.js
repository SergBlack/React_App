import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '72a823d7-94b2-4ecd-891f-657d921d168c'
  }
});

export const userAPI = {
  getUsers(currentPage = 1, pageUsersCount = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageUsersCount}`)
      .then(response => {
        return response.data;
      });
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => {
      return response.data;
    });
  }
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  setUserStatus(status) {
    return instance.put(`profile/status`, { status });
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    });
  },
  login(email, password, rememberMe, captcha) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then(response => {
        return response.data;
      });
  },
  logout() {
    return instance.delete(`/auth/login`).then(response => {
      return response.data;
    });
  },
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`).then(response => {
      return response.data;
    });
  }
};
