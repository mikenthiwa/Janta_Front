import React, { Fragment } from 'react';
import {FormContext} from "../context";
import './form.scss';

class Forms extends React.PureComponent{

  generateInputLabels = () => {

    const {
      inputClass, labelName, buttonClass,
      inputType, inputName, buttonName,
      inputValue } = this.props;

    const inputLabelTags = () => (
      <Fragment>
        <FormContext.Consumer>
          {(context) => {
            const {hasBlankFields, firstRender} = context.state;
            console.log('<<<<<<<<<<<<<<',firstRender);
            return (
              <Fragment>
                <label>
                  {labelName}
                </label>
                <input
                  className={`${inputClass} form-input ${hasBlankFields[inputName] && !firstRender ? 'active': ''}`}
                  type={inputType}
                  name={inputName}
                  value={inputValue}
                  onChange={context.handleInputChange}/>
                  <span className={`error ${hasBlankFields[inputName] ? 'active': 'inactive'}`}>* required</span>
              </Fragment>
          )}}
        </FormContext.Consumer>
        </Fragment>
    );

    switch (inputType) {
      case 'password':
        return inputLabelTags();
      case 'text':
        return inputLabelTags();
      case `submit`:
        return inputLabelTags();
      default:
        return ''
    }
  };
  render() {
    return (
      <Fragment>
        {this.generateInputLabels()}
      </Fragment>
    );
  }
}

export default Forms;