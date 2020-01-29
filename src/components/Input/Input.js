import React from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const commonInputStyle = css`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
  font: 95% Arial, Helvetica, sans-serif;
  &:focus {
    box-shadow: 0 0 5px
      ${props =>
        props.formBorderColorOnFocus
          ? props.formBorderColorOnFocus
          : "#43d1af"};
    padding: 3%;
    border: 1px solid
      ${props =>
        props.formBorderColorOnFocus
          ? props.formBorderColorOnFocus
          : "#43d1af"};
  }
  ${props => {
    return (
      props.invalid &&
      props.shouldValidate &&
      props.touched &&
      css`
        border: 3px solid
          ${props => (props.errorTextColor ? props.errorTextColor : "red")} !important;
        outline: none !important;
        box-shadow: none !important;
      `
    );
  }}
`;
const Input = styled.input`
  ${commonInputStyle}
`;

const Textarea = styled.textarea`
  ${commonInputStyle}
`;

const Select = styled.select`
  ${commonInputStyle}
`;
const ErrorBlock = styled.span`
  color: ${props => (props.errorTextColor ? props.errorTextColor : "red")};
`;

const input = props => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <Input
          {...props}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <Textarea
          {...props}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <Select {...props} value={props.value} onChange={props.changed}>
          <option value="">{props.elementConfig.placeholder}</option>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </Select>
      );

      break;
    case "radio":
      inputElement = (
        <React.Fragment>
          <Label>{props.elementConfig.placeholder}</Label>
          {props.elementConfig.options.map(option => (
            <div key={option.value}>
              <input
                type="radio"
                checked={props.value === option.value}
                onChange={props.changed}
                value={option.value}
              />
              {option.displayValue}
            </div>
          ))}
        </React.Fragment>
      );
      break;

    case "checkbox":
      inputElement = (
        <React.Fragment>
          <Label>{props.elementConfig.placeholder}</Label>
          {props.elementConfig.options.map(option => (
            <div key={option.value}>
              <input
                type="checkbox"
                defaultChecked={option.checked}
                onChange={props.changed}
                value={option.value}
              />
              {option.displayValue}
            </div>
          ))}
        </React.Fragment>
      );

      break;
    default:
      inputElement = (
        <Input
          props={props}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <React.Fragment>
      <Label>{props.label}</Label>
      {inputElement}
      {props.invalid && props.shouldValidate && props.touched && (
        <ErrorBlock {...props}>{props.shouldValidate.error}</ErrorBlock>
      )}
    </React.Fragment>
  );
};

export default input;
