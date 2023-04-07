import { AxiosRequestConfig } from "axios";
import instance from "../../configs/axios";

/**
 * A Proxy for Requests, to limits changes in requesters affect
 * to other services.
 */
export default class RequestService {
  async get(config: AxiosRequestConfig) {
    const response = await instance({ method: "GET", ...config });
    return response;
  }

  async post(config: AxiosRequestConfig) {
    const response = await instance({ method: "POST", ...config });
    return response;
  }
  async put(config: AxiosRequestConfig) {
    const response = await instance({ method: "PUT", ...config });
    return response;
  }
  async patch(config: AxiosRequestConfig) {
    const response = await instance({ method: "PATCH", ...config });
    return response;
  }
}
