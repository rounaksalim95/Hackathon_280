import * as React from "react";
import {Container, Form, FormLabel, Row, Col, Button }from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Redirect } from 'react-router';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 

  render() {
    
    
    return (
      <>
       <h2>My Profile</h2>
      </>
    );
  }
}
export default Profile;
