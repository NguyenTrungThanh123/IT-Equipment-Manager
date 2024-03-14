'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"
import Modal from "../../../components/modal/page"
import Button from '../../../components/Button/page';
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoFloor = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    // useEffect(() => {
    //     if (!firstRender) {
    //          setShowModal(true); // Thiết lập lại trạng thái của modal mỗi khi showModal thay đổi
    //     }
    //     else {
    //         setFirstRender(false);
    //     }
    // }, [showModal,firstRender]);
    const handleClick = (namePosition: string) => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false); // Ẩn modal khi đóng
    };

    return (
        <>
            <Row>
                <Col lg={5} md={5} sm={5} xs={5} className="bg-success">
                        <Button onClick={() => handleClick("Meeting")}>Meeting</Button>
                </Col>
                <Col lg={7} md={7} sm={7} xs={7} className="bg-white">
                    Balcony
                </Col>
          </Row>
            <Modal showModal={showModal} onHide={handleCloseModal} />
        </>
    )
}

export default TwoFloor;
