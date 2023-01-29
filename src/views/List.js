import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const List = ({props}) => {
    const tableId = props.id;
   
    return (
        <Row className='mt-3 mb-3'>
            <Col sm={3} className="mt-3 mb-auto" ><b className='m-3'>Table:</b> {props.id}</Col>
            <Col sm={6} >
                <p className="mt-3 mb-auto"><b className='m-3'>Status:</b>{props.status}</p>
            </Col>
            <Col sm={3} className="mt-2 mb-2">
                <Link to={"/table/"+ tableId}>
                    <Button variant="primary">Show more</Button>
                </Link>
            </Col>
        </Row>
    )

}
export default List;