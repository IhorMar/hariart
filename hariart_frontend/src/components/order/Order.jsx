import React, { useEffect, useState } from "react";
import "./Order.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import PictureImg from "../../../templates/frontend/images/no_image.png";
import Select from "../inputs/Select";
import { isTimeout } from "../../reducers/Time";
import {
  removeOrder,
  updateOrder,
  predefineOrder,
} from "../../reducers/Orders";

const countries = [
  {
    id: 0,
    name: "Lithuania",
  },
  {
    id: 1,
    name: "Ukraine",
  },
  {
    id: 2,
    name: "Russia",
  },
];

export default function Order() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state);

  const navigate = useNavigate();

  const [value, setValue] = useState(1);
  const [selectedValue, setSelectedValue] = useState(null);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [surname, setSurname] = useState("");
  const [surnameError, setSurnameError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    dispatch(predefineOrder());

    return () => dispatch(isTimeout({ timeout: false }));
  }, []);

  useEffect(() => {
    dispatch(updateOrder(value));
  }, [value]);

  const validate = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!surname) {
      setSurnameError(true);
    } else {
      setSurnameError(false);
    }
    if (
      !/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(phone)
    ) {
      setPhoneError(
        <label className="error-message">
          {phone ? (
            <>Invalid billing telephone number</>
          ) : (
            <>
              <strong>Billing Phone</strong> is a required field
            </>
          )}
        </label>
      );
    } else {
      setPhoneError(false);
    }
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
      )
    ) {
      setEmailError(
        <label className="error-message">
          {email ? (
            <>Invalid billing email adress</>
          ) : (
            <>
              <strong>Billing Email</strong> is a required field
            </>
          )}
        </label>
      );
    } else {
      setEmailError(false);
    }
  };

  return (
    <>
      <div className="order">
        {selected.timeout.timeout ? (
          <div className="error-message">Sorry, your session has expired.</div>
        ) : (
          <>
            <div className="order--error">
              {nameError && (
                <label className="error-message">
                  <strong>Billing Name</strong> is a required field
                </label>
              )}
              {surnameError && (
                <label className="error-message">
                  <strong>Billing Surname</strong> is a required field
                </label>
              )}
              {emailError}
              {phoneError}
            </div>
            {selected.orders.orders.length ? (
              <>
                <button
                  className="button"
                  onClick={() => navigate("/paintings")}
                >
                  Back to paintings
                </button>
                <div className="order__info">
                  <div className="order__info-header">
                    <div className="small-name" style={{ width: "12.5%" }}>
                      Product
                    </div>
                    <div className="small-name" style={{ width: "37%" }}>
                      Name
                    </div>
                    <div className="small-name" style={{ width: "25%" }}>
                      Qty
                    </div>
                    <div className="small-name">Remove</div>
                  </div>
                  <div className="order__info-items">
                    {selected.orders.orders.map(({ ref, amount, name }, i) => (
                      <div key={i} className="order__info-item">
                        <div style={{ width: "12.5%" }}>
                          <img className="small-img" src={PictureImg} />
                        </div>
                        <div style={{ width: "37%" }}>{name}</div>
                        <div className="quantity" style={{ width: "25%" }}>
                          <button
                            className="quantity__button"
                            onClick={() =>
                              amount > 1 &&
                              dispatch(updateOrder({ ref: ref, act: "dec" }))
                            }
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="quantity__input-box"
                            value={amount}
                            onChange={(e) =>
                              setValue({ ref: ref, val: e.target.value })
                            }
                          ></input>
                          <button
                            className="quantity__button"
                            onClick={() =>
                              dispatch(updateOrder({ ref: ref, act: "inc" }))
                            }
                          >
                            +
                          </button>
                        </div>
                        <div
                          className="remove"
                          onClick={() => dispatch(removeOrder({ ref: ref }))}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order__form">
                  <input
                    className="input order-form__input"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                  />
                  <input
                    className="input order-form__input"
                    type="text"
                    placeholder="Surname"
                    onChange={(e) => setSurname(e.target.value)}
                    required={true}
                  />
                  <input
                    className="input order-form__input"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                  <input
                    className="input order-form__input"
                    type="text"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="choose-country">
                  <div>Country</div>
                  <Select
                    options={countries}
                    id="id"
                    label="name"
                    defaultValue={countries[0]}
                    selectedValue={selectedValue}
                    onChange={(val) => setSelectedValue(val)}
                  />
                </div>
                <button className="button" onClick={() => validate()}>
                  Place order
                </button>
              </>
            ) : (
              <p className="order__text">
                Hari Art site offers you beautiful canvas pictures printing in
                large digital format.&nbsp;Choose a picture you want to order,
                go to menu <strong>order </strong>and click the button{" "}
                <strong>request for the price</strong> fill the form and we will
                contact you.
              </p>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
