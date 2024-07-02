import axios from "axios";

export const getResponse = async (url, transformer,params = {}) => {
  const response = await axios.get(url,{
    params: params
  });
  return transformer(response)
}