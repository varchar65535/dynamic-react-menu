import React, {Component, createRef} from 'react';



class FormPanel extends Component {
  constructor( {props} ) {
    super( props )
    this.textInput = React.createRef();
    this.state = {
      value: ''
    }
  }  
  
    handleSubmit = e => {
      e.preventDefault();
      this.setState({ value: this.textInput.current.value});
      alert("Send Message: " + this.state.value);
    };
    
   
      
    render(){
      const handleToUpdate  = this.props.handleToUpdate;

      return (
              <form className="dropdown-form" >
                <input
                  ref={this.textInput}
                  type="text"
                />
                <div className="dropdown-form-btn">
                    <input
                      type="button"
                      value="Submit"
                      onClick={this.handleSubmit}
                    />
                    <input
                      type="button"
                      value="Cancel"
                      onClick={() => handleToUpdate(this.props.index) }
                    />
                </div>
              </form>
          )
      }   
    }

  export default FormPanel