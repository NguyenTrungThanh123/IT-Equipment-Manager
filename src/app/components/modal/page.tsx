import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'

interface IModalprops {
    showModal: boolean;
    onHide: () => void;
}

const MyModal = ({ showModal, onHide }: IModalprops) => {
    const [show, setShow] = useState<boolean>(showModal);
    useEffect(() => {
        setShow(showModal); // Cập nhật giá trị của show mỗi khi showModal thay đổi
    }, [showModal]);
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default MyModal;