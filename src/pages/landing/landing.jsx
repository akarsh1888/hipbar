import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./landing.css";
import Section from "../../components/section/section";

const Landing = () => {
  const [heading, setHeading] = useState("The Leader in Website Creation");
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
    itemFour: false,
    itemFive: false,
  });
  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null),
    ref4 = useRef(null),
    ref5 = useRef(null);
  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const div1Pos = topPos(ref1.current),
      div2Pos = topPos(ref2.current),
      div3Pos = topPos(ref3.current),
      div4Pos = topPos(ref4.current),
      div5Pos = topPos(ref5.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }));
      }
      if (div2Pos < scrollPos) {
        doShow((state) => ({ ...state, itemTwo: true }));
      }

      if (div3Pos < scrollPos) {
        doShow((state) => ({ ...state, itemThree: true }));
      }

      if (div4Pos < scrollPos) {
        doShow((state) => ({ ...state, itemFour: true }));
      }

      if (div5Pos < scrollPos) {
        doShow((state) => ({ ...state, itemFive: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const str = window.location.search;
    var res = str.split("=").pop();
    if (res.length > 0) {
      setHeading(res);
      document.documentElement.scrollTop = 0;
    }
  }, []);
  return (
    <div id="landing">
      <div id="wrapper">
        <section id="section1">
          <div className="brand-logo">
            <a href="https://www.wix.com/" target="_blank" rel="noreferrer">
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="2.43 2.22 72.01 28.011"
                viewBox="2.43 2.22 72.01 28.011"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="img"
                className="svg"
              >
                <g>
                  <path
                    d="M43.63 2.75c-1.43.75-1.96 2.01-1.96 5.5 0 0 .72-.7 1.79-1.09.78-.28 1.45-.71 1.83-1 1.21-.88 1.39-2.02 1.39-3.94.01.01-1.96-.04-3.05.53z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M35.16 3.57c-1.16 1.03-1.5 2.66-1.5 2.66l-3.85 14.93L26.6 8.94c-.31-1.3-.87-2.9-1.76-3.99-1.13-1.38-3.44-1.47-3.68-1.47-.25 0-2.55.09-3.68 1.47-.89 1.09-1.45 2.69-1.76 3.99l-3.2 12.22L8.65 6.23s-.34-1.63-1.5-2.66C5.26 1.9 2.43 2.26 2.43 2.26l7.38 27.9s2.43.18 3.65-.45c1.6-.82 2.36-1.44 3.33-5.24.86-3.38 3.28-13.32 3.5-14.03.11-.35.25-1.19.87-1.19.63 0 .76.84.87 1.19.22.71 2.64 10.65 3.5 14.03.97 3.8 1.73 4.42 3.33 5.24 1.22.62 3.65.45 3.65.45l7.38-27.9c-.01 0-2.84-.36-4.73 1.31z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M46.69 6.82s-.46.71-1.51 1.3c-.68.38-1.33.63-2.02.97-1.17.56-1.48 1.18-1.48 2.13v18.94s1.86.24 3.08-.39c1.57-.8 1.93-1.57 1.94-5.04V6.82h-.01z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M65.08 16.28l9.36-13.92s-3.95-.67-5.91 1.11c-1.25 1.14-2.65 3.19-2.65 3.19l-3.44 4.97c-.17.26-.39.54-.74.54s-.57-.28-.74-.54l-3.44-4.97s-1.4-2.05-2.65-3.19c-1.96-1.78-5.91-1.11-5.91-1.11l9.36 13.92-9.34 13.88s4.11.52 6.07-1.26c1.25-1.14 2.46-2.99 2.46-2.99l3.44-4.97c.17-.26.39-.54.74-.54s.57.28.74.54l3.44 4.97s1.28 1.85 2.53 2.99c1.96 1.78 6 1.26 6 1.26l-9.32-13.88z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="section-content">
            <h1>{heading}</h1>
            <button
              onClick={() => {
                window.location.href = "http://localhost:3000/signup";
              }}
            >
              Start Now
            </button>
          </div>
        </section>
        <Section
          id={"section2"}
          show={show.itemOne}
          ref1={ref1}
          h2={"Stunning Templates"}
          p={"Choose from over 500 designer-made templates for every business."}
        />
        <Section
          id={"section3"}
          show={show.itemTwo}
          ref1={ref2}
          h2={"Drag and Drop"}
          p={"Change, customize or add anything to your site."}
        />
        <Section
          id={"section4"}
          show={show.itemThree}
          ref1={ref3}
          h2={"Mobile Friendly"}
          p={
            "Look amazing on every screen with a mobile-friendly version of your website."
          }
        />

        <Section
          id={"section5"}
          show={show.itemFour}
          ref1={ref4}
          h2={"Custom Domains"}
          p={
            "Get a personalized domain name that matches your brand and business."
          }
        />

        <section
          id="section6"
          ref={ref5}
          className={`default${show.itemFive ? " added" : ""}`}
        >
          <div className="drag">
            <h2>Make Your Ideas Come to Life with a Wix Site</h2>
            <div
              style={{
                width: "190px",
                margin: "auto",
              }}
            >
              <button
                onClick={() => {
                  window.location.href = "http://localhost:3000/signup";
                }}
              >
                Start Now
              </button>
            </div>
          </div>
        </section>
      </div>
      <section id="section7">
        <div style={{ display: "flex", width: "30vw", margin: "auto" }}>
          <div className="item">
            <img
              alt="Wix.com-Black.png"
              src="https://static.wixstatic.com/media/375882_13f1f49e3b614b6d8fd7198e3da0a758~mv2.png/v1/fill/w_69,h_28,al_c,q_85/Wix_com-Black.webp"
            ></img>
          </div>
          <div
            className="item"
            style={{
              borderLeft: "1px solid black",
            }}
          ></div>
          <div className="item">
            <p>This website was designed with Wix.</p>
          </div>
        </div>
      </section>

      <section id="section8">
        <div
          style={{
            display: "flex",
            marginLeft: "5rem",
          }}
        >
          <div className="item">
            <p>Privacy Policy</p>
          </div>
          <div
            className="item"
            style={{
              borderLeft: "1px solid black",
            }}
          ></div>
          <div className="item">
            <p>Terms of Use</p>
          </div>
        </div>

        <div
          style={{
            marginRight: "5rem",
          }}
        >
          <div>
            <p>© 2006 - 2020 Wix.com, Inc</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
