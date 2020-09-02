import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import PokeCard from '../components/pokeCard';
import { connect } from 'react-redux';
import { initialLoad, getRandomPoke } from '../actions'

const MainView = ({poke, initialLoad, getRandomPoke}) => {

  useEffect(() => {
    initialLoad()
  }, [])

  return (
    <Container fluid>
      <Button onClick={() => getRandomPoke()}>Get Random Poke</Button>
      <Row>
        {poke.map(p => (
            <Col md={3} key={p.name}>
              <PokeCard data={p}/>
            </Col>
          ))}
      </Row>
    </Container>
  )
}

const mapStateToProps = (state, props) => {
  return {
    poke: state.poke.poke
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialLoad: () => dispatch(initialLoad()),
    getRandomPoke: () => dispatch(getRandomPoke())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);