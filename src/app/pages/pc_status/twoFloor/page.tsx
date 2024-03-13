'use client'
import Link from "next/link"
import Modal from "../../../components/modal/page"
import { useState } from "react"


const TwoFloor = () => {
    const [showModal, setShowModal] = useState<boolean>(true)
    return (
        <>
            TwoFloor Page
            <button onClick={() => setShowModal(!showModal)}>{showModal ? "Hide modal" : "Show modal"}</button>
            {showModal && <Modal />}
        </>
    )
}

export default TwoFloor;
