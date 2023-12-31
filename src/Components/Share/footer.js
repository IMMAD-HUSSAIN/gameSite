import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import { FaXTwitter,FaSquareFacebook,FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return ( 
    <div className="footer">
      <Container fluid className="bg-dark text-light">
        <Row className="px-2 py-4">
        <div className="d-sm-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
        <Image className="mb-2" src={"https://www.freepnglogos.com/uploads/assassins-creed-logo-png/assassins-creed-logo-assassin-creed-origins-wallpaper-and-logo-svg-26.png"} width={30} height={30} />
      <h3 className="mx-2">Assassins</h3>
        </div>
        <div className="d-flex mt-3 mt-sm-0">
          <h3>Follow US :</h3> 
          <div>
            <FaXTwitter className="mx-1 pointer" size={25} />
          <FaSquareFacebook className="mx-1 pointer" size={25}/>
          <FaInstagram className="mx-1 pointer" size={25}/></div>
        </div>
        </div>
        <hr className="hr" />
          <Col className="mt-3" lg={2} md={3} sm={4} sx={12} >
            <p className="pointer">Privacy</p>
            <p className="pointer">Terms of use</p>
            <p className="pointer">Legal info</p>
            <p className="pointer">set cookies</p>
          </Col>
          <Col className="mt-3" lg={2} md={3} sm={4} sx={12}>
            <p className="pointer">Ubisoft Connect</p>
            <p className="pointer">Help</p>
          </Col>
          <Col className="mt-3" lg={2} md={3} sm={4} sx={12}>
            <p className="pointer">invester</p>
            <p className="pointer">help</p>
          </Col>
          <Col className="mt-3" lg={2} md={3} sm={4} sx={12}>
            <p className="pointer">company</p>
            <p className="pointer">Carrere</p>
            <p className="pointer">Location</p>
          </Col>
          <Col  className="mt-3" lg={4} md={12} sm={8} sx={12}>
            <small>
              © 2023 Ubisoft Entertainment. All Rights Reserved. Ubisoft,
              Ubi.com and the Ubisoft logo are trademarks of Ubisoft
              Entertainment in the U.S. and/or other countries.
            </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
