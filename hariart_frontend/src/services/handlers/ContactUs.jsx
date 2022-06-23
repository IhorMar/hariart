import axios from "../Config";

const ContactUsHelper = {
  sendContactUs(params) {
    return axios
      .post("contact_us/", {
        ...params,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
  getContacts(callbacks) {
    return axios
      .get("contacts/")
      .then(({ data }) => {
        callbacks(data.results);
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
};

export default ContactUsHelper;
