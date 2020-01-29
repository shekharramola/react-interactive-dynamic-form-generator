# react-interactive-dynamic-form-generator

> It will generate the form dynamically with validation. 
All it will take is json model as a input and will give the simplified json object as a form output.
validation object in the configuration is optional(though it must be present as an empty object). 
It support almost all the input types. also apart from required field validation, it also has special validation for email(type="email"), pan number(type="pan"), only number(type="number"), minlength, maxlength etc. 
You can even pass your own regular expression as rejex property inside your validation object.

Now you can also pass your own preferred color like buttonBackgroundColor, buttonColor, formBorderColorOnFocus, errorTextColor.

though these are all optional.


[![NPM](https://img.shields.io/npm/v/react-interactive-dynamic-form-generator.svg)](https://www.npmjs.com/package/react-interactive-dynamic-form-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-interactive-dynamic-form-generator
```
## demo
https://stackblitz.com/edit/react-jdhvjs

## How to use

```jsx
import React, { Component } from "react";

import DynamicFormGenerator from "react-interactive-dynamic-form-generator";

class Example extends Component {
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
  };
  render() {
    return (
      <DynamicFormGenerator
          formFields={this.state.formFields}
          buttonBackgroundColor = {this.state.buttonBackgroundColor}
          buttonColor = {this.state.buttonColor}
          formBorderColorOnFocus = {this.state.formBorderColorOnFocus}
          errorTextColor = {this.state.errorTextColor}
          onFormSubmit={form => this.formResult(form)}
        />
    );
  }
}
```


## License

GNU General Public License v3.0 © [shekharramola](https://github.com/shekharramola)

