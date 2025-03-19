import { Button } from "devextreme-react";

const Footer = () => {
  return (
    <div className="bg-[#f2f6ff] py-4 mt-32">
      <div>
        <div
          id="aboutme_link_icons"
          className="flex border-b border-gray-800 max-w-xs mx-auto items-center justify-center"
        >
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
            onClick={() => window.open("https://github.com/Suhee-K", "_blank")}
          />
        </div>
        <div className="text-center text-black font-light flex items-center justify-center pt-3">
          Created by Suhee
        </div>
      </div>
    </div>
  );
};

export default Footer;
