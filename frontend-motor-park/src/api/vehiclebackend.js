import axios from "axios";
import { url, config } from "../constants/usual";

export function getData(callback, errorcallback) {
  axios
    .get(url, config)
    .then(res => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch(err => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export const getDataId = id =>
  axios.get(url + id).then(response => response.data);
