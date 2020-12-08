import React from "react";

const Section = ({ id, show, ref1, h2, p }) => {
  return (
    <>
      <section
        id={id}
        ref={ref1}
        className={`defaultClass${show ? " addedClass" : ""}`}
      >
        <div>
          <h2 className="h2">{h2}</h2>
          <div>
            <p className="p">{p}</p>
          </div>
          <div>
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
    </>
  );
};

export default Section;
