import axiosInstance from "./api";
import TokenService from "./token.service";

const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      if(!window.location.href.includes('/auth/login')) {
        document.body.classList.add('loading-indicator');
        const token = TokenService.getLocalAccessToken();
        console.log(token);
        if (token) {
          config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        }
      }
      return config;
    },
    (error) => {
      document.body.classList.remove('loading-indicator');
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;
  axiosInstance.interceptors.response.use(
    (res) => {
      document.body.classList.remove('loading-indicator');

      return res;
    },
    async (err) => {
      document.body.classList.remove('loading-indicator');
      console.log(err);
      const originalConfig = err.config;

      if (originalConfig.url !== "/auth/signin" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post("/auth/refreshtoken", {
              refreshToken: TokenService.getLocalRefreshToken(),
            });

            const { accessToken } = rs.data;
            TokenService.updateLocalAccessToken(accessToken);

            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;