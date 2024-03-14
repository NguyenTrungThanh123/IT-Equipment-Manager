import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './components/sidebar/page'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT EQUIPMENT MANAGEMENT",
  description: "Create by Khanh Truong - Thanh Nguyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container fluid>
          <Row>
            <Col lg={2} md={3} sm={3} xs={3} className="bg-dark">
              <Sidebar />
            </Col>
            <Col lg={10} md={9} sm={9} xs={9} className="border border-2 border-danger">
              <div>{children}</div>
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
