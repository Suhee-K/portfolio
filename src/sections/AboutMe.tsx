import Button from "devextreme-react/button";

const AboutMe = () => {
  return (
    <div className="">
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
        <div className="lg:w-3/4 xl:w-1/2 lg:mx-auto">
          <h1 className="heading text-center">About Me</h1>
          <p className="text-darkgray text-base/7 xl:text-lg/7">
            Hello! I am Suhee Kim, a software developer with experience working
            with modern web technologies like React, TypeScript, and Tailwind
            CSS. My web development journey helped me to gain a strong
            understanding of both frontend and backend technologies, allowing me
            to create smooth user experiences. I am passionate about learning
            new technologies and always looking for challenges, and I enjoy
            collaborating with teams to deliver high-quality results.
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
      </div>
    </div>
  );
};

export default AboutMe;
