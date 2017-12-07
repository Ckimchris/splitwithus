import React, {Component} from 'react';
<<<<<<< HEAD
=======
import CircularProgress from 'material-ui/CircularProgress';
>>>>>>> 701ff79cbf3ea2cc891f21317b32448dccefb214
import {
  Link,
  Route
} from 'react-router-dom';

const logoStyle = {
  width: '200px'
};
class ServiceContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      'name': 'blank',
      'description': '',
      'cost': '',
      'type': '',
      'id': '',
      'max_users': '',
      'image_uri': '',
<<<<<<< HEAD
      'serviceChoice': this.props.match.params.service
=======
      'serviceChoice': this.props.match.params.service.toLowerCase(),
      'error': false
>>>>>>> 701ff79cbf3ea2cc891f21317b32448dccefb214
    };
  }
  componentDidMount () {
    fetch('http://localhost:8080/services').then((response) => {
      console.log('fetched');
      return response.json();
    }).then((data) => {
      const serviceData = data.find((service) => this.state.serviceChoice === service.name.toLowerCase());
<<<<<<< HEAD
      this.setState((prevState, props) => {
        return serviceData;
      });
      return data;
    }).catch((err) => {
      // Error :(
=======
      if (serviceData !== undefined) {
        this.setState((prevState, props) => {
          return serviceData;
        });
      } else {
        this.setState((prevState, props) => {
          return {error: true};
        });
      }
      return data;
    }).catch((err) => {
      console.log('THERE WAS AN ERROR');
      this.setState((prevState, props) => {
        return {error: true};
      });
>>>>>>> 701ff79cbf3ea2cc891f21317b32448dccefb214
      return err;
    });
  }

  render () {
<<<<<<< HEAD
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.description}</h2>
        <h2>{this.state.cost}</h2>
        <h2>{this.state.id}</h2>
        <h2>max users: {this.state.max_users}</h2>
        <img style={logoStyle} src={`http://localhost:8080/client/assets/images/${this.state.name.toLowerCase()}.png`} />
      </div>
    );
=======
    if (this.state.name !== 'blank') {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <h2>{this.state.description}</h2>
          <h2>{this.state.cost}</h2>
          <h2>{this.state.id}</h2>
          <h2>max users: {this.state.max_users}</h2>
          <img style={logoStyle} src={`http://localhost:8080/client/assets/images/${this.state.name.toLowerCase()}.png`} />
        </div>
      );
    } else if (this.state.error) {
      return (
        <div>404: This page does not exist</div>
      );
    } else {
      return (
        <div>
          <br /><br /><br />
          <center><CircularProgress size={150} thickness={10} /></center>
        </div>
      );
    }
>>>>>>> 701ff79cbf3ea2cc891f21317b32448dccefb214
  }
}

export default ServiceContainer;

// {props.match.params.topicId}
