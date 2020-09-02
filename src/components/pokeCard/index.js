import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

const PokeCard = ({poke}) => {

  return (
  <Card>
    <Card.Header>{poke.name}</Card.Header>
    <Card.Img variant="top" src={poke.sprites.front_default}/>
    <Card.Body>
      <Card.Text>Height: {poke.height}</Card.Text>
      <Card.Text>Weight: {poke.weight}</Card.Text>
      <Card.Text>Base Experience: {poke.base_experience}</Card.Text>
    </Card.Body>
  </Card>
  )
}

const mapStateToProps = (state, props) => {
  return {
    poke: props.data
  };
}

export default connect(mapStateToProps)(PokeCard);