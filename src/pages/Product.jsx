import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

import products from '../products';

const Product = () => {
    const { id } = useParams();
    const product = products.find((item) => {
        return item._id === id;
    });

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                بازگشت به صفحه اصلی
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} fliud="true" />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>{product.price}</ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Button className="btn-block" type="button">
                                افزودن به سبد خرید
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
};

export default Product;
