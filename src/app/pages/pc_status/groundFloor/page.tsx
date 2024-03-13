'use client'
import Link from "next/link"
import Modal from "../../../components/modal/page"
import { useState } from "react"


const GroundFloor = () => {
    const namePostions = ['pc1', 'pc1', 'pc3', 'pc4', 'pc5', 'pc6', 'pc7']
    const [showModal, setShowModal] = useState<boolean>(true)

    const handleClick = (namePosition: string) => {
        setShowModal(!showModal)
    }

    return (
        <>
            <div>
                GroundFloor Page
            </div>
            {
                namePostions.map(namePosition => {
                    <div>
                        <button onClick={() => handleClick(namePosition)}>{namePosition}</button>
                    </div>
                })
            }

            <button onClick={() => handleClick('123')}></button>
            {showModal && <Modal />}
        </>
    )
}

export default GroundFloor;
