import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DateObject from "react-date-object";
import { useState, useRef, useEffect } from "react";

const date = new DateObject();
const images = [
  {
    id: 1,
    img_name: "image/image/babi.jpg",
  },
  {
    id: 2,
    img_name: "image/image/istockphoto-490667270-1024x1024.jpg",
  },
  {
    id: 3,
    img_name: "image/image/istockphoto-1049475350-1024x1024.jpg",
  },
  {
    id: 4,
    img_name: "image/image/pexels-daniel-xavier-1121796.jpg",
  },
  {
    id: 5,
    img_name: "image/image/pexels-italo-melo-2379004.jpg",
  },
  {
    id: 6,
    img_name: "image/image/pexels-justin-shaifer-1222271.jpg",
  },
  {
    id: 7,
    img_name: "image/image/pexels-spencer-selover-775358.jpg",
  },
  {
    id: 8,
    img_name: "image/Mine.jpg",
  },
];

function footer() {
  const [indexImage, setIndexImage] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const divRef = useRef();

  const handleScroll = () => {
    setScroll(divRef.current.scrollLeft);
  };
  const handleMaxScroll = () => {
    const differentMaxScroll =
      divRef.current.scrollWidth - divRef.current.clientWidth;
    setMaxScroll(differentMaxScroll - 1);
  };
  const prev = () => {
    divRef.current.scrollLeft -= 300;
    handleScroll();
  };
  const next = () => {
    divRef.current.scrollLeft += 300;
    handleScroll();
  };
  useEffect(() => {
    divRef.current.addEventListener("scroll", () => {
      handleScroll();
      handleMaxScroll();
    });
    handleScroll();
  }, [scroll]);
  console.log("maxScroll", maxScroll);
  console.log("Scroll", scroll);

  return (
    <section className="relative h-screen w-screen bg-slate-500">
      <div
        className="  left-16 right-16 top-5 z-10 flex
       h-2/4 items-center justify-center  overflow-auto rounded-2xl sm:absolute "
      >
        {scroll > 0 && (
          <div
            className=" absolute left-0 z-40 flex h-40 w-16 cursor-pointer 
       items-center justify-center  bg-gradient-to-r from-black  to-transparent text-gray-900"
            onClick={prev}
          >
            <FaChevronLeft
              size={30}
              id="prev_slider"
              className="top-1/2 rounded-full  p-2 text-white hover:bg-gray-600"
            />
          </div>
        )}
        <div
          id="page"
          ref={divRef}
          className=" scroll-bar flex overflow-x-scroll scroll-smooth"
        >
          {/* {images.map((image) => (

            <img
              src={image.img_name}
              key={image.id}
              className="m-1 h-40 w-[200px] select-none rounded bg-contain  "
            />
          ))} */}
        </div>
        {/* {scroll < maxScroll && (
          <div
            className=" hover:grad absolute right-0 z-40 flex h-40 w-16
        cursor-pointer items-center  justify-center bg-gradient-to-l  from-black to-transparent text-gray-900"
            onClick={next}
          >
            <FaChevronRight
              size={30}
              id="next_slider"
              className="top-1/2 rounded-full  p-2 text-white hover:bg-gray-600"
            />
          </div>
        )} */}
      </div>
      <footer className="relative inset-x-2 bottom-0 overflow-hidden rounded-t-lg bg-black text-center text-white sm:absolute sm:h-4/6">
      
        <img src="image/blackLogo.jpg" className="flex sm:hidden" />
        <div className=" flex  flex-row items-center text-white sm:m-auto sm:mt-44  sm:w-4/6 sm:justify-between sm:gap-5 ">
          <img src="image/blackLogo.jpg" className="hidden sm:flex" />

          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold">Visit Link</h1>    
            <a href="/privancy" className="font-thin">
              Privancy
            </a>
            <a href="/term" className="font-thin">
              Condition and Term
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold">Portfolio</h1>
            <a href="#" className="font-thin">
              Home
            </a>
            <a href="#aboutme" className="font-thin">
              About me
            </a>
            <a href="#service" className="font-thin">
              Service
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold">Contact</h1>
            <a className="font-thin" href="tell:+251930851744">
              +251 (9) 30851744
            </a>
            <a className="font-thin" href="mailto:gemechujimacs@gmail.com">
              gemechujimacs@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold">Address</h1>
            <p className="font-thin">Addis Ababa,</p>
            <p className="font-thin">street</p>
            <p className="font-thin">12 ...</p>
          </div>
        </div>
        <hr />
        <div className="m-auto mt-5 w-4/5 justify-between sm:flex">
          <p>
            CopyRight&copy; Gemechu {"    "} {date.format("YYYY")} {"   "}
            <span> All Right is reserved</span>
          </p>
          <div>
            <Link to="https://www.facebook.com/gemechu.jima.75">
              <img
                src="social media/facebook.png"
                className="mr-2 inline h-8 w-8 rounded-full"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/gemechu-jima-407880251">
              <img src="social media/linkedin.png" className="inline h-8 w-8" />
            </Link>
            <Link to="https://twitter.com/@tasojima">
              <img
                src="social media/twitter.png"
                className="ml-2 inline h-8 w-8"
              />
            </Link>
            <Link to="https://github.com/gemechu-jima">
              <img
                src="social media/github.png"
                className="ml-2 inline h-8 w-8"
              />
            </Link>
          </div>
        </div>
        <div></div>
      </footer>
    </section>
  );
}

export default footer;
