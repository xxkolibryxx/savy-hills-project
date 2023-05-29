import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

interface IReviewBlock {
  name: string;
  review: string;
  date: string;
}

class ReviewBlock extends Component<IReviewBlock> {
  render(): JSX.Element {
    const { name, review, date } = this.props;
    const modifiedName = name.split(' ');
    const firstName = modifiedName[0];
    const lastName = modifiedName[1]?.length > 0 ? modifiedName[1] : '';
    const fatherName = modifiedName[2]?.length > 0 ? modifiedName[2] : '';

    return (
      <Card className="mb-3">
        <Card.Header as="h5">{date}</Card.Header>
        <Card.Body>
          <Card.Title>
            {firstName} {lastName[0]}
            {fatherName[0]}
          </Card.Title>
          <Card.Text>{review}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ReviewBlock;
