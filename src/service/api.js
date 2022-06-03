import Axios from "axios";
const defaultAxios = Axios.create({
  headers: { "Content-type": "application/json" },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export const postLogin = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://2e70fb-tapi-sandbox.dhiwise.co/admin/auth/login`,
    method: "post",
    params,
    headers,
    data: { username: "Frank.Jacobi84", password: "iKOBIScy773rF3l", ...data },
  });
};
