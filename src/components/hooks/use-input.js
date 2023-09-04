import { useReducer, useState } from "react";

const initialState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return initialState;
  }
  return {
    value: "",
    isTouched: false,
  };
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const handleValueChange = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };
  const handleInputBlur = (event) => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid,
    hasError,
    handleValueChange,
    handleInputBlur,
    reset,
  };
};

export default useInput;
