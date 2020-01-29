import React, { Component } from "react";
import DynamicFormGenerator from "react-interactive-dynamic-form-generator";

export default class App extends Component {
  state = {
    buttonBackgroundColor:'#0000ff',
    buttonColor:'#fff',
    formBorderColorOnFocus:'#0000ff',
    errorTextColor: 'pink',
    formFields: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name"
        },
        value: "",
        validation: {
          required: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      uploadedFile: {
        elementType: "input",
        elementConfig: {
          type: "file",
          placeholder: "upload"
        },
        value: "",
        selectedFileObj: {},
        validation: {
          required: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      ifscCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "IFSC Code"
        },
        value: "",
        validation: {
          required: true,
          error: "",
          rejex: "^[A-Za-z]{4}[a-zA-Z0-9]{7}$"
        },
        valid: false,
        touched: false
      },

      address: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Address"
        },
        value: "",
        validation: {
          required: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      pinCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Pin Code"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 6,
          isNumeric: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      accountNumber: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Account Number"
        },
        value: "",
        validation: {
          required: true,
          minLength: 9,
          maxLength: 18,
          isNumeric: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "password",
        elementConfig: {
          type: "password",
          placeholder: "Passowrd"
        },
        value: "",
        validation: {
          required: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      date: {
        elementType: "date",
        elementConfig: {
          type: "date",
          placeholder: "Date"
        },
        value: "",
        validation: {
          required: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      pan: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "PAN No"
        },
        value: "",
        validation: {
          required: true,
          isPan: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-Mail"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
          error: ""
        },
        valid: false,
        touched: false
      },
      occupation: {
        elementType: "select",
        elementConfig: {
          placeholder: "Occupation",
          options: [
            { value: "Salaried", displayValue: "Salaried" },
            { value: "selfEmployed", displayValue: "Self Employed" }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      gender: {
        elementType: "radio",
        elementConfig: {
          placeholder: "Gender",
          options: [
            { value: "Male", displayValue: "Male" },
            { value: "Female", displayValue: "Female" }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      selectedfruits: {
        elementType: "checkbox",
        elementConfig: {
          placeholder: "Fruit",
          options: [
            { value: "Apple", displayValue: "Apple", checked: false },
            { value: "Banana", displayValue: "Banana", checked: false },
            { value: "Grapes", displayValue: "Grapes", checked: false }
          ]
        },
        value: "",
        selectedCheckbox: [],
        validation: {
          required: true
        },
        valid: false
      }
    }
  };
  
  formResult = form => {
  console.log(form);
  }
  render() {
    return (
      <div className="FormContainer">
        <DynamicFormGenerator
          formFields={this.state.formFields}
          buttonBackgroundColor = {this.state.buttonBackgroundColor}
          buttonColor = {this.state.buttonColor}
          formBorderColorOnFocus = {this.state.formBorderColorOnFocus}
          errorTextColor = {this.state.errorTextColor}
          onFormSubmit={form => this.formResult(form)}
        />
      </div>
    );
  }
}
