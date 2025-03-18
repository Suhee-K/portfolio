import React from "react";
import Button from "devextreme-react/button";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div>
      <hr />
      <div className="flex justify-around gap-60 my-16 mx-10">
        <style>
          {`
          #aboutme_link_icons .dx-icon {
            width: 32px;
            height: 32px;
          }
        `}
        </style>
        <div className="w-1/2">
          <h1 className="heading">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            iste iure tempore error velit blanditiis. Dolore totam,
            reprehenderit minima deleniti non nulla et laudantium amet, quis
            fugit autem obcaecati. Sed.
          </p>
          <div className="mt-5 flex">
            <div>
              <p>
                Gmail:{" "}
                <a href="mailto:your-email@gmail.com" className="link">
                  tngml118@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:7809056174" className="link">
                  (780) 905-6174
                </a>
              </p>
            </div>

            {/* Social media icons (github, linkedin) */}
            <div id="aboutme_link_icons" className="ml-10">
              <Button
                type="normal"
                icon="https://img.icons8.com/color/48/linkedin.png"
                stylingMode="text"
                width={44}
                height={44}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/suhee-kim", "_blank")
                }
              />
              <Button
                type="normal"
                icon="https://img.icons8.com/ios-glyphs/30/github.png"
                stylingMode="text"
                width={44}
                height={44}
                onClick={() =>
                  window.open("https://github.com/Suhee-K", "_blank")
                }
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
