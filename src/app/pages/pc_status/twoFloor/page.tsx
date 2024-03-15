'use client'
import Link from "next/link"
import Modal from "../../../components/modal/page"
import Button from '../../../components/Button/page';
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoFloor = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const rightPositions = ["2.01.01", "2.01.02", "2.01.03", "2.01.04", "2.01.05", "2.01.06", "2.01.07", "2.01.08", "2.01.09", "2.01.10", "2.01.11", "2.01.12",
        "2.02.01", "2.02.02", "2.02.03", "2.02.04", "2.02.05", "2.02.06", "2.02.07", "2.02.08", "2.02.09", "2.02.10", "2.03.01", "2.03.02",
        "2.03.03", "2.03.04", "2.03.05", "2.03.06", "2.03.07", "2.03.08", "2.03.09", "2.03.10", "2.04.01", "2.04.02", "2.04.03", "2.04.04",
        "2.04.05", "2.04.06", "2.04.07", "2.04.08", "2.04.09", "2.04.10"
    ]
    const leftPositions = ["2.10.12", "2.10.11", "2.10.10", "2.10.09", "2.10.08", "2.10.07", "2.10.06", "2.10.05", "2.10.04", "2.10.03", "2.10.02", "2.10.01",
        "2.09.12", "2.09.10", "2.09.09", "2.09.08", "2.09.07", "2.09.06", "2.09.05", "2.09.04", "2.09.03", "2.09.02", "2.09.01", "2.08.12",
        "2.08.11", "2.08.10", "2.08.09", "2.08.08", "2.08.07", "2.08.06", "2.08.05", "2.08.04", "2.08.03", "2.08.02", "2.08.01", "2.07.12",
        "2.07.11", "2.07.10", "2.07.09", "2.07.08", "2.07.07", "2.07.06", "2.07.05", "2.07.04", "2.07.03", "2.07.02", "2.07.01", "2.06.12",
        "2.06.11", "2.06.10", "2.06.09", "2.06.08", "2.06.07", "2.06.06", "2.06.05", "2.06.04", "2.06.03", "2.06.02", "2.06.01", "2.05.12",
        "2.05.11", "2.05.10", "2.05.09", "2.05.08", "2.05.07", "2.05.06", "2.05.05", "2.05.04", "2.05.03", "2.05.02", "2.05.01"]

    function chunkArray(arr: string[], size: number) {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    }

    // Tạo mảng chứa các nhóm Button
    const handleClick = (namePosition: string) => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false); // Ẩn modal khi đóng
    };

    return (
        <>
            <Row>
                <Col lg={5} md={5} sm={5} xs={5} className="border border-black">
                    <div className='py-5'>
                        <Button onClick={() => handleClick("Meeting")}>Meeting</Button>
                    </div>
                </Col>
                <Col lg={7} md={7} sm={7} xs={7} className="bg-white text-center align-items-center border py-5 border-black">
                    Balcony
                </Col>
            </Row>
            {/* Day ban ben trai*/}
            <Row>
                <Col lg={6} md={6} sm={6} xs={6} className="border border-black py-5">
                    {
                        chunkArray(leftPositions,12).map((group, groupIndex) => (
                            <div key={groupIndex} className="button-row my-3">
                                {group.map((position, index) => (
                                    <Button key={index} onClick={() => handleClick(position)}>{position}</Button>
                                ))}

                            </div>


                        ))
                    }
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="border border-black py-5">
                    {
                        chunkArray(rightPositions,12).map((group, groupIndex) => (
                            <div key={groupIndex} className="button-row my-3">
                                {group.map((position, index) => (
                                    <Button key={index} onClick={() => handleClick(position)}>{position}</Button>
                                ))}

                            </div>


                        ))
                    }
                </Col>
            </Row>

            <Modal showModal={showModal} onHide={handleCloseModal} />
        </>
    )
}

export default TwoFloor;
