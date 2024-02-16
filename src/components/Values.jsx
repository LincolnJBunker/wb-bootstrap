import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

function Value({ title, description, action }) {
  return (
    <Card className='shadow-sm h-100'>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button variant="primary">{action}</Button>
    </Card.Body>
  </Card>
  );
}

export default function Values({ values }) {
  return (
    <section>
      {values.map(({ title, description, action }, index) => (
        <Value key={index} title={title} description={description} action={action} />
      ))}
    </section>
  );
}
