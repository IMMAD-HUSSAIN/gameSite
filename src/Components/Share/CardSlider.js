import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase";

const PreviousNextMethods = (props) => {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gamesData"));
        const dataWithIds = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setData(dataWithIds);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const customeSlider = React.createRef();

  const Next = () => {
    customeSlider.current.slickNext();
  };

  const Previous = () => {
    customeSlider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },{
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      }, {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {dataLoaded ? (
        <div
          onAnimationEnd={(e) => {
            const element = document.getElementById(e.target.id);
            if (props.show === false && element) {
              element.classList.add("hide");
            }
          }}
          id="cardSlider"
          className={`d-flex flex-column cinzelRegular mb-5 mb-xl-0 flex-xl-row card-slider justify-content-between align-items-center w-100 ${
            props.show ? "slideShow" : "slideHide"
          }`}
        >
          <div className="mx-5 pb-2 pb-xl-0 nextPrevious">
            <HiArrowSmLeft
              className="arrowButton"
              onClick={() => Previous()}
              size={40}
            />
            <HiArrowSmRight
              className="arrowButton ms-3"
              onClick={() => Next()}
              size={40}
            />
          </div>

          <div className="cardSlider text-center">
            <Slider ref={customeSlider} {...settings}>
              {data.map((value) => {
                return (
                  <div key={value.name} className="cardSliderdiv">
                    <Link to={`/infopage?id=${value.id}`}>
                      <Card  className="slidercard p-1 bg-transparent">
                        <Image
                          className="sliderImage m-auto"
                          fluid
                          src={value.thumbnail}
                        />
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PreviousNextMethods;
