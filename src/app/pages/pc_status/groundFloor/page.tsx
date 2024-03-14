'use client'
import Link from "next/link"
import Modal from "../../../components/modal/page"
import Button from '../../../components/Button/page';
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
            <div className="d-flex flex-wrap">
                {
                    namePostions.map((namePosition,index) => {
                        return (
                            <div key={index}>
                                <Button onClick={() => handleClick(namePosition)}>{namePosition}</Button>
                            </div>
                        )
                    })


                }
            </div>
            <Modal showModal={showModal} onHide={handleCloseModal} />
        </>
    )
}

export default GroundFloor;
