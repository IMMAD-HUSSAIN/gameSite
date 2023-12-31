import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../Firebase";
import Topbar from "../Components/Share/navbar";
import CardSlider from "../Components/Share/CardSlider";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";
import Footer from "../Components/Share/footer";
import Loader from "../Components/Share/loader";

export default function InfoPage() {
  const [scroll, setScroll] = useState(true);
  const [data, setData] = useState(null);
  const [play, setPlay] = useState(false);
  const playerRef = useRef("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    setPlay(false);
    setData(false);
    const fetchData = async () => {
      try {
        const docRef = doc(db, "gamesData", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };
    fetchData();
  }, [id]);

  const handleScroll = () => {
    const divElement = document.getElementById("scrollDiv");
    if (divElement && divElement.scrollTop < 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handlePlayVideo = () => {
    setPlay(true);
    playerRef.current.playVideo();
  };

  const handlePauseVideo = () => {
    playerRef.current.stopVideo();
    setPlay(false);
  };
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      controls: 0,
      autoplay: 0,
    },
  };

  return (
    <div className="infoPage cinzelRegular" onScroll={handleScroll} id="scrollDiv">
      <Topbar show={scroll} />
      <CardSlider show={scroll} />
      {data ? (
        <>
          <Image
            fluid
            className="posterImage"
            src={data.backgroundImage}
          />

          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 my-5">
                <h2 className="text-center text-light text-uppercase mainProtagonist">
                  system requirements
                </h2>
                <p className="requirements">
                  <span className="specHeading">Operating System : </span>
                  <span className="text-light">{data.os}</span>
                </p>
                <p className="requirements">
                  <span className="specHeading">CPU : </span>
                  <span className="text-light">{data.processor}</span>
                </p>
                <p className="requirements">
                  <span className="specHeading">Graphics : </span>
                  <span className="text-light">{data.graphics}</span>
                </p>
                <p className="requirements">
                  <span className="specHeading">RAM Memory : </span>
                  <span className="text-light">{data.RAM}</span>
                </p>
                <p className="requirements">
                  <span className="specHeading">DirectX Version : </span>
                  <span className="text-light">{data.directX}</span>
                </p>
                <p className="requirements">
                  <span className="specHeading">Storage : </span>
                  <span className="text-light"> {data.storage}</span>
                </p>
                <div></div>
              </div>
              <div className="col-md-6 my-5 text-center">
                <h2 className="text-light text-uppercase mainProtagonist">
                  main protagonist
                </h2>
                <Image
                  fluid
                  width={200}
                  className="pImage p-1"
                  src={data.pImage}
                />
                <h2 className="color text-uppercase mainProtagonist mt-2">
                  {data.pname}
                </h2>
              </div>
            </div>
          </div>
          <div className="w-100 py-5">
            <h1 className="color text-center trailer"> Trailer </h1>
            <div className="videoDiv text-center mx-auto">
              <YouTube
                onPlay={handlePlayVideo}
                onPause={handlePauseVideo}
                videoId={data.trailer} // Replace with your video ID
                opts={opts}
                className="p-2 w-100 h-100 rounded"
                onReady={(event) => {
                  playerRef.current = event.target;
                }}
              />
              <div className="my-3 text-center">
                {play ? (
                  <Button
                    className="videoBtn pauseBtn"
                    onClick={handlePauseVideo}
                  >
                    STOP
                  </Button>
                ) : (
                  <Button
                    className="videoBtn playBtn"
                    onClick={handlePlayVideo}
                  >
                    PLAY
                  </Button>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
