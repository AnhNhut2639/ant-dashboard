// import { getToken, saveToken } from '@/helpers/local-storage';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const ClientID = "NADELIMA";

const interceptors = {
  request: [
    (config: AxiosRequestConfig) => {
      //   const token = getToken();
      //   if (token) {
      //     config = {
      //       ...config,
      //       headers: { Authorization: `Bearer ${token}` },
      //     };
      //   }
      //   if (ClientID) {
      //     config = {
      //       ...config,
      //       headers: {
      //         'Client-ID': ClientID,
      //       },
      //     };
      //   }
      //   if (ClientID && token) {
      //     config = {
      //       ...config,
      //       headers: {
      //         'Client-ID': ClientID,
      //         Authorization: `Bearer ${token}`,
      //       },
      //     };
      //   }

      config = {
        ...config,
        headers: {
          "Client-ID": ClientID,
        },
      };

      return config;
    },
  ],
  response: [
    async (response: AxiosResponse) => {
      //   if ('/v1/users/sign_in' === response.config.url) {
      //     saveToken(response.data?.data?.access_token);
      //   }
      return response;
    },
  ],
  error: [
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        console.error("Un-Authorize");
      }
      throw error;
    },
  ],
};

export default interceptors;
