import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateProduct from '../components/modals/CreateProduct';
import CreateType from '../components/modals/CreateType';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);

    return (
        <>
            <div className='flex flex-col justify-between h-screen'>
                <NavBar />
                <Container className="d-flex flex-column mt-4">
                    <Button
                        variant="outline-dark"
                        className="mt-4 p-2"
                        onClick={() => setTypeVisible(true)}
                    >
                        Добавить тип
                    </Button>
                    <Button
                        variant="outline-dark"
                        className="mt-4 p-2"
                        onClick={() => setProductVisible(true)}
                    >Добавить продукт
                    </Button>
                    <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
                    <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                </Container>
                <Footer />
            </div>
        </>
    );
};

export default Admin;