"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">Welcome To Your-Blog Portal</h1>
          
          <p>Contact Me ?</p>
          <p>
            abhidcoder@gmail.com
          </p>
          
        </div>
        <div className="text-center">
          <h1 className="text-xl">Contact Links</h1>
          <br></br>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/abhidcoder/">LinkedIn</a>
            </li>
            <li>
              <a href="https://abhidcoder.blogspot.com/">Porfolio</a>
            </li>
            <li>
              <a href="https://github.com/abhidcoder?tab=repositories">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
