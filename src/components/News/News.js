import { Button, Card } from 'react-bootstrap';

const News = (props) => {
    
    // article theke data gulo show korar jnne
    const {title, description} = props;









    return (
        <div>

            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default News;