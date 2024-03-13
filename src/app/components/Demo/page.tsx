import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const Demo = () => {
    const [showDashboard, setShowDashboard] = useState<boolean>(false);
    const [showProducts, setShowProducts] = useState<boolean>(false);

    return (
        <Container>
            <Row className="flex-nowrap" style={{ position: 'fixed' }}>
                <Col xs={12} md={3} xl={2} className="px-sm-2 px-0 bg-light">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <Nav.Link href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </Nav.Link>
                        <Nav className="flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <Nav.Item>
                                <Nav.Link href="#" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#submenu1" onClick={() => setShowDashboard(!showDashboard)} className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                </Nav.Link>
                                <ul className={`collapse ${showDashboard ? 'show' : ''} flex-column ms-1`} id="submenu1" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <Nav.Link href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </Nav.Link>
                                    </li>
                                </ul>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#submenu3" onClick={() => setShowProducts(!showProducts)} className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span>
                                </Nav.Link>
                                <ul className={`collapse ${showProducts ? 'show' : ''} flex-column ms-1`} id="submenu3" data-bs-parent="#menu">
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
                        <hr />
                        <div className="dropdown pb-4">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                <span className="d-none d-sm-inline mx-1">loser</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col className="py-3">
                    <h3>Left Sidebar with Submenus</h3>
                    <p className="lead">
                        An example 2-level sidebar with collapsible menu items. The menu functions like an "accordion" where only a single
                        menu is open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                    <ul className="list-unstyled">
                        <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
};

export default Demo;
