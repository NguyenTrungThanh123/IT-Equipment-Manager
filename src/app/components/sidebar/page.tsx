'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Sidebar = () => {
    const router = useRouter()
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const handleDropdownItemClick = (href: string) => {
        router.push(href);
        setDropdownOpen(false);
    };
    const [showDashboard, setShowDashboard] = useState<boolean>(false);
    const [showProducts, setShowProducts] = useState<boolean>(false);
    return (
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Nav className="flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" style={{position: 'fixed'}}>
                <Nav.Link onClick={() => handleDropdownItemClick('/')} className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </Nav.Link>
                <Nav.Item>
                    <Nav.Link onClick={() => handleDropdownItemClick('/')} className="nav-link align-middle px-0">
                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#submenu1" onClick={() => setShowDashboard(!showDashboard)} className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </Nav.Link>
                    <ul className={`collapse ${showDashboard ? 'show' : ''} flex-column ms-1`} id="submenu1" data-bs-parent="#menu">
                        <li className="w-100">
                            <Nav.Link onClick={() => handleDropdownItemClick('/pages/pc_status/groundFloor')} className="nav-link px-0"><span className="d-none d-sm-inline">Ground Floor</span></Nav.Link>
                        </li>
                        <li>
                            <Nav.Link onClick={() => handleDropdownItemClick('/pages/pc_status/twoFloor')} className="nav-link px-0"> <span className="d-none d-sm-inline">Two Floor</span></Nav.Link>
                        </li>
                        <li>
                            <Nav.Link onClick={() => handleDropdownItemClick('/pages/pc_status/threeFloor')} className="nav-link px-0"> <span className="d-none d-sm-inline">Three Floor</span></Nav.Link>
                        </li>
                    </ul>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#submenu3" onClick={() => setShowProducts(!showProducts)} className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span>
                    </Nav.Link>
                    <ul className={`collapse ${showProducts ? 'show' : ''} flex-column ms-1`} data-bs-parent="#menu">
                        <li className="w-100">
                            <Nav.Link href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</Nav.Link>
                        </li>
                    </ul>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Sidebar;
