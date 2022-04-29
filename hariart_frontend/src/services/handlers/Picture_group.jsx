import axios from "../Config";

const PictureGroupHandler = {
  getPictureGroup(params, callbacks) {
    return axios
      .get("paintings/", {
        params: { ...params },
      })
      .then(({data}) => {
        callbacks(data)
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
};

export default PictureGroupHandler;