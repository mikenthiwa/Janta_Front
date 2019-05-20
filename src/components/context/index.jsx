import React, { createContext } from "react";

export const FormContext = createContext();
const { Provider } = FormContext;

class MyProvider extends React.Component {

  state = {
    values: {
      auth: {
          username: '',
          email: '',
          password: ''
      }
    },
    hasBlankFields: {},
    error: false
  };

  componentDidMount() {
    this.setState(prevState => ({
      hasBlankFields: {
        ...prevState.hasBlankFields, username:true, email:true, password:true
      },
      firstRender: true
    }))
  }

  render() {
    const {values: {auth}} = this.state;
    return (
      <Provider value={{
        state: this.state,
        handleInputChange: event => {
          event.persist();
          this.setState(prevState => ({
            values: {
              ...prevState.values, auth: {
                ...prevState.values.auth, [event.target.name]: event.target.value
              }
            },
            hasBlankFields: {
              ...prevState.hasBlankFields, [event.target.name]: false
            }
          }))
        },
        checkBlankFields: () => {
          let result = true;
          Object.keys(auth).forEach(values => {
            if (auth[values] === '') {
              this.setState(prevState => ({
                ...prevState,
                hasBlankFields: {
                  ...prevState.hasBlankFields, [values]: true
                },
                firstRender: false
              }));
            }
          });
          const fieldsStatus = Object.values(this.state.hasBlankFields);

          console.log('>>>>>>>>>>>>>>>', fieldsStatus);
          setTimeout(() => {
            if (fieldsStatus.includes(true)) {
              console.log(12346)
            }
            else{
              console.log('++++++++++++++', auth)
            }
          }, 500)
        },
        resetBlankFields: () => {
          Object.keys(auth).forEach(values => {
            this.setState(prevState => ({
              hasBlankFields: {...prevState.hasBlankFields, [values]: false}
            }))
          });
        }

      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default MyProvider;