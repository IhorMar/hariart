import React, { useEffect, useState, useRef } from "react";
import "./Select.css";

export default function Select({
  options,
  id,
  label,
  placeholder,
  defaultValue,
  selectedValue,
  onChange,
}) {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  const wrapperRef = useRef(null);

  const filtering = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  };

  const showValue = () => {
    if (selectedValue) return selectedValue[label];
    return value;
  };

  useEffect(() => onChange(options.filter((option) => option === defaultValue)[0]), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="select" ref={wrapperRef}>
      <div
        className="select-control"
        onClick={() => setOpened(!opened)}
      >
        <input
          className="input"
          value={showValue()}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(null);
            setValue(e.target.value);
          }}
        />
        <div className={`caret caret--${opened ? "up" : "down"}`} />
      </div>
      {opened && (
        <div className="options">
          {filtering(options).map((option) => (
            <div
              key={option[id]}
              className={
                selectedValue === option ? "option--selected" : "option"
              }
              onClick={() => {
                setValue("");
                onChange(option);
                setOpened(false);
              }}
            >
              {option[label]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
