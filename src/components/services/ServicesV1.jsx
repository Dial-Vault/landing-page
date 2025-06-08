import { useEffect, useState } from "react";
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json";
import SingleServicesV1 from "./SingleServicesV1";

const SERVICES_TEXT = {
  subTitle: "Our security services",
  mainTitle: "Protecting what matters most with Professional Security Solutions",
};

const ServicesV1 = () => {
  const [expandedItem, setExpandedItem] = useState(0);
  const [isR1WideScreen, setIsR1WideScreen] = useState(false);
  const [isR2WideScreen, setIsR2WideScreen] = useState(false);

  const handleMouseEnter = (index) => {
    setExpandedItem(index);
  };

  const handleTouchStart = (index) => {
    setExpandedItem(index);
  };

  const handleTouchEnd = () => {
    setExpandedItem(null);
  };

  // Helper function to split array into chunks of given size
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  // Split services into rows of 3 items
  const serviceRows = chunkArray(ServicesV1Data, 3);

  useEffect(() => {
    const handleResize = () => {
      setIsR1WideScreen(window.innerWidth > 767);
      setIsR2WideScreen(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="services-style-one-area default-padding"
        style={{ background: "url(/assets/img/shape/12.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">{SERVICES_TEXT.subTitle}</h4>
                <h2 className="title">{SERVICES_TEXT.mainTitle}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="services-style-one-items">
                {serviceRows[0].map((service, index) => (
                  <div
                    key={index}
                    className={`services-style-one-item ${
                      expandedItem === index ? "out" : ""
                    }`}
                    onMouseEnter={isR1WideScreen ? () => handleMouseEnter(index) : null}
                    onTouchStart={isR1WideScreen ? null : () => handleTouchStart(index)}
                    onTouchEnd={isR1WideScreen ? null : handleTouchEnd}
                  >
                    <SingleServicesV1 service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-2">

          <div className="row">
            <div className="col-lg-12">
              <div className="services-style-one-items">
                {serviceRows[1].map((service, index) => (
                  <div
                    key={index}
                    className={`services-style-one-item ${
                      expandedItem === index + 3 ? "out" : ""
                    }`}
                    onMouseEnter={isR2WideScreen ? () => handleMouseEnter(index +3) : null}
                    onTouchStart={isR2WideScreen ? null : () => handleTouchStart(index + 3)}
                    onTouchEnd={isR2WideScreen ? null : handleTouchEnd}
                  >
                    <SingleServicesV1 service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV1;
