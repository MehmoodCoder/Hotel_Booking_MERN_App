import React from "react";

const Title = ({ title, description, align, font }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}
      >
        <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>
          {title}
        </h1>
        <p className={`text-sm md:text-base text-white mt-2 max-w-174`}>
          {description}
        </p>
      </div>
    </>
  );
};

export default Title;
