import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'
import IState from '../interfaces/IState'

interface IProps {
  people: IState['people']
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, key) => {
      const { name, position, email } = person
      return (
        <Col xs="6" className="item" key={key}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {position}
              </CardSubtitle>
              <CardText>Email: {email}</CardText>
            </CardBody>
          </Card>
        </Col>
      )
    })
  }

  return <Row>{renderList()}</Row>
}

export default List
