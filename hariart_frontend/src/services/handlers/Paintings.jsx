import axios from "../Config";

const PaintingsHandler = {
  getPictureByParams(params, callbacks) {
    return axios
      .get("paintings/", {
        params: { ...params },
      })
      .then(({ data }) => {
        callbacks(data);
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
  getSizeOfPictureByRef(ref, callbacks) {
    return axios
      .get("painting_sizes/", {
        params: { painting: ref },
      })
      .then(({ data }) => {
        callbacks(data);
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
};

export default PaintingsHandler;
