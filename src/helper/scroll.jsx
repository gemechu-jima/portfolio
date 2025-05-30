
import { useRef, useState, useEffect } from "react";
export default function scroll() {
    
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
 
  return (
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
      {images.map((image) => (

        <img
          src={image.img_name}
          key={image.id}
          className="m-1 h-40 w-[200px] select-none rounded bg-contain  "
        />
      ))}
    </div>
    {scroll < maxScroll && (
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
    )}
  </div>
  )
}
