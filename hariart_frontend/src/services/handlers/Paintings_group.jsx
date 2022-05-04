import axios from "../Config";

const PaintingsGroupHandler = {
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

export default PaintingsGroupHandler;