import React from 'react'
import {Container, Row, Col, Button,} from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return (
    <>
    <section className='herobg'>
    <Container lg className='hero'>
        <Row className='custommarginpadding'>
            <Col sm={6} className='MarginPadding'>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Button className='buttton' type='button' href='#'><span className='style-button'></span>Mulai Sewa Mobil</Button>
            </Col>
            <Col sm={6}>
                
            </Col>
        </Row>
    </Container>
    </section>
    </>
    );
}

export default Hero