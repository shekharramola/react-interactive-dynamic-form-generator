import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";
import { updateObject, checkValidity } from "./shared/helper";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

export default class DynamicFormGenerator extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    text: PropTypes.object
  };

  state = {
    formIsValid: false
  };

  componentDidMount() {
    const { formFields } = this.props;
    this.setState({ formFields: formFields });
  }

  formHandler = event => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.formFields) {
      this.state.formFields[formElementIdentifier];
      formData[formElementIdentifier] = this.state.formFields[
        formElementIdentifier
      ].value;
      if (this.state.formFields[formElementIdentifier].selectedCheckbox) {
        this.state.formFields[
          formElementIdentifier
        ].elementConfig.options.forEach(element => {
          if (element.checked) {
            this.state.formFields[formElementIdentifier].selectedCheckbox.push(
              element.value
            );
          }
        });
        formData[formElementIdentifier] = this.state.formFields[
          formElementIdentifier
        ].selectedCheckbox;
      }

      if (this.state.formFields[formElementIdentifier].selectedFileObj) {
        formData[formElementIdentifier] = this.state.formFields[
          formElementIdentifier
        ].selectedFileObj;
      }
    }

    this.props.onFormSubmit(formData);
  };

  inputChangedHandler = (elementType, placeholder, event, inputIdentifier) => {
    event.persist();
    const { value } = event.target;
    if (event.target.files) {
      this.state.formFields[inputIdentifier].selectedFileObj =
        event.target.files[0];
    }
    const updatedFormElement = updateObject(
      this.state.formFields[inputIdentifier],
      {
        value: value,
        valid: checkValidity(
          placeholder,
          value,
          this.state.formFields[inputIdentifier].validation
        ),
        touched: true
      }
    );
    const updatedFormFields = updateObject(this.state.formFields, {
      [inputIdentifier]: updatedFormElement
    });
    if (elementType === "checkbox") {
      const copyArray = [
        ...this.state.formFields[inputIdentifier].elementConfig.options
      ];
      const modifiedArray = copyArray.map(option => {
        if (value === option.value) {
          option.checked = !option.checked;
        }
      });
      const updatedFormElement = updateObject(
        this.state.formFields[inputIdentifier].elementConfig.options,
        {
          options: modifiedArray
        }
      );
      const updatedFormFields = updateObject(this.state.formFields, {
        [inputIdentifier]: updatedFormElement
      });
    }

    let formIsValid = true;
    for (let inputIdentifier in updatedFormFields) {
      formIsValid = updatedFormFields[inputIdentifier].valid && formIsValid;
    }
    this.setState({ formFields: updatedFormFields, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.formFields) {
      formElementsArray.push({
        id: key,
        config: this.state.formFields[key]
      });
    }
    let form = (
      <form onSubmit={this.formHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            formBorderColorOnFocus={this.props.formBorderColorOnFocus}
            errorTextColor={this.props.errorTextColor}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event =>
              this.inputChangedHandler(
                formElement.config.elementType,
                formElement.config.elementConfig.placeholder,
                event,
                formElement.id
              )
            }
          />
        ))}   
        <Button
          btnType="Success"
          buttonBackgroundColor={this.props.buttonBackgroundColor}
          buttonColor={this.props.buttonColor}
          disabled={!this.state.formIsValid}
        >
          Submit
        </Button>
      </form>
    );

    return <div className={styles.FormWrapper}>{form}</div>;
  }
}
