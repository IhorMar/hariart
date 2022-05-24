import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { isTimeout } from "../../reducers/Time";

const TIME_LIMIT = 1.8 * 10 ** 5;

export default function SessionTimeout({ onTimeOut }) {
  const dispatch = useDispatch();
  let startTimerInterval = useRef();

  const onTimeout = () => {
    localStorage.removeItem("lastTimeStamp");
    dispatch(isTimeout({ timeout: true }));
    onTimeOut();
  };

  const timeChecker = () => {
    startTimerInterval.current = setTimeout(onTimeout, TIME_LIMIT);
  };

  const resetTimer = () => {
    clearTimeout(startTimerInterval.current);
    localStorage.setItem("lastTimeStamp", Date.now());
    dispatch(isTimeout({ timeout: false }));
    timeChecker();
  };

  useEffect(() => {
    Date.now() - localStorage.getItem("lastTimeStamp") > TIME_LIMIT &&
      localStorage.getItem("lastTimeStamp") &&
      onTimeout();
  }, []);

  useEffect(() => {
    window.addEventListener("click", resetTimer);
    window.addEventListener("load", resetTimer);
    window.addEventListener("scroll", resetTimer);

    timeChecker();

    return () => {
      clearTimeout(startTimerInterval.current);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("load", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, [resetTimer, timeChecker]);

  return <></>;
}
