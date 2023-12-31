import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { VscThreeBars } from "react-icons/vsc";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  window.addEventListener("keypress", (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  });

  return (
    <div className={` ${props.show ? "topbarDivShow" : "topbarDivHide"}`}>
      <div className="p-2 container-fluid align-items-center d-flex justify-content-between">
        <div className="p-2 d-flex">
          <Image
            width={35}
            height={35}
            src={"https://www.freepnglogos.com/uploads/assassins-creed-logo-png/assassins-creed-logo-assassin-creed-origins-wallpaper-and-logo-svg-26.png"}
          />
          <p className="color cinzelBold ubisoft mb-0 mx-1">Assassins</p>
        </div>
        <div>
          <div className="CinzelRegular largeNav">
           <Link to="/"> <Button className="navButton">Home</Button></Link>

            <Button className="navButton">Play</Button>
            <Button className="navButton">Shop</Button>
            <Button className="navButton">Explore</Button>
            <Button className="navButton">Help</Button>
          </div>
          <Button className="bg-transparent bars">
            <VscThreeBars onClick={handleShow} color={"#ffba31"} size={30} />{" "}
          </Button>
        </div>
      </div>

      <Offcanvas className="bg-dark" show={show} onHide={handleClose}>
        <IoIosClose
          onClick={handleClose}
          size={32}
          className="color cinzelBold closeBtn"
        />
        <div className="container mt-5">
          <div className="row justify-content-center cinzelRegular">
           <Link to="/" className="text-center" > <Button className="offCanvasButton">Home</Button></Link>
            <Button className="offCanvasButton">Play</Button>
            <Button className="offCanvasButton">Shop</Button>
            <Button className="offCanvasButton">Explore</Button>
            <Button className="offCanvasButton">Help</Button>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}
