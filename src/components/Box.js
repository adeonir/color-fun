import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`

const Button = styled.button`
  padding: 20px 40px;
  border-radius: 5px;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: #bdc3c7;
  color: #000;
  transition: all .2s;

  :hover {
    background-color: #34495e;
    color: #fff;
  }
`

class Box extends Component {
  render() {
    return (
      <Container color={this.props.color}>
        <Button onClick={this.props.loadColor}>Change Color</Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Box);
