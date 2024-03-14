'use client'
import Link from "next/link"
import Modal from "../../../components/modal/page"
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react"


const GroundFloor = () => {
    const namePostions = ['1.01.01', '1.01.02', '1.01.03', '1.01.04', '1.01.05', '1.01.06', '1.01.07']
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
            <div>
                GroundFloor Page
            </div>
            <div className="d-flex flex-wrap">
                {
                    namePostions.map(namePosition => {
                        return (
                            <>
                                <Button key={namePosition} className="mx-2" variant="outline-success" onClick={() => handleClick(namePosition)}>{namePosition}</Button>
                            </>

                        )
                    })


                }
            </div>
            <Modal showModal={showModal} onHide={handleCloseModal} />
            {console.log(showModal)}


        </>
    )
}

export default GroundFloor;
