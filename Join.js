import React, { Component } from 'react';
import { render } from 'react-dom';

class Join extends Component {
  render() {
    return (
      <div>
        Lets work for everyone
      <div>
      <h5>Name:<input type="text"/></h5>
      <h5>Address:<input type="text"/></h5>
      <h5>Phone number:<input type="text"/></h5>
      <h5>Reason for collaboration:<input type="text"/></h5>
      <input type="submit" value="Submit" onClick={alert('Confirming submission')}/>
      <input type="submit" value="Clear"/>
      </div>
      </div>
    );
  }
}
export default join;