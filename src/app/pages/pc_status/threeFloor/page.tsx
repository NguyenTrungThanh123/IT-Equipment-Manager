'use client'
import Link from "next/link"
import Modal from "../../../components/modal/page"
import { useState } from "react"


const Threefloor = () => {
    const [showModal, setShowModal] = useState<boolean>(true)
    return (
        <>
            Threefloor Page
            <button onClick={() => setShowModal(!showModal)}>{showModal ? "Hide modal" : "Show modal"}</button>
            {showModal && <Modal />}
        </>
    )
}

export default Threefloor;
