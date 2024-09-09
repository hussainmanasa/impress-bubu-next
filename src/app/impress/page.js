/* eslint-disable @next/next/no-img-element */
"use client";
import Draggable from "react-draggable";
import "./styles.css";
import { Nerko_One, Zeyada } from "next/font/google";

const nerkoOne = Nerko_One({ subsets: ["latin"], weight: "400" });
const zeyada = Zeyada({ subsets: ["latin"], weight: "400" });

function Page() {
  return (
    <div className={"impress-wrapper"}>
      <Draggable>
        <div
          className={`${nerkoOne.className} bubu paper`}
          style={{
            top: "0%",
            left: "45%",
          }}
        >
          BUBU
        </div>
      </Draggable>
      <Draggable handle=".handle">
        <div
          className={`${zeyada.className} paper image handle`}
          style={{
            left: "17%",
            width: "200px",
            padding: "10px",
          }}
        >
          <p>How can someone </p>
          <p> be so cute ❤️ </p>
          <img
            alt=""
            src="https://i.ibb.co/8rftD2V/IMG-7694.jpg"
            style={{ userSelect: "none" }}
          />
        </div>
      </Draggable>
      <Draggable handle=".handle">
        <div
          className={`${zeyada.className} paper image handle`}
          style={{
            left: "34%",
            top: "20%",
            width: "200px",
            padding: "10px",
          }}
        >
          <p>As long as you are holding my hand, I can conquer the world ❤️</p>
          <img
            alt=""
            src="https://i.ibb.co/ZJcpLkt/holding-hand.jpg"
            style={{ userSelect: "none" }}
          />
        </div>
      </Draggable>
      <Draggable handle=".handle">
        <div
          className={` paper image handle`}
          style={{
            right: "17%",
            width: "200px",
            padding: "10px",
          }}
        >
          <img
            alt=""
            src="https://i.ibb.co/8c1sdkz/IMG-7641.jpg"
            style={{ userSelect: "none" }}
          />
        </div>
      </Draggable>
      <Draggable handle=".handle">
        <div
          className={` paper image handle`}
          style={{
            left: "6%",
            bottom: "8%",
            width: "200px",
            padding: "10px",
          }}
        >
          <img
            alt=""
            src="https://i.ibb.co/b1LLtrw/Full-Size-Render.jpg"
            style={{ userSelect: "none" }}
          />
        </div>
      </Draggable>
      <Draggable handle=".handle">
        <div
          className={` paper image handle`}
          style={{
            right: "32%",
            top: "37%",
            width: "200px",
            padding: "10px",
          }}
        >
          <img
            alt=""
            src="https://i.ibb.co/hFrB6gC/IMG-7388.jpg"
            style={{ userSelect: "none" }}
          />
        </div>
      </Draggable>
      <Draggable>
        <div className="paper heart"></div>
      </Draggable>
      <Draggable>
        <div
          className="paper heart"
          style={{
            right: "0",
            position: "absolute",
          }}
        />
      </Draggable>
      <Draggable handle=".handle">
        <div
          className={`${zeyada.className} paper image handle`}
          style={{
            right: "5%",
            bottom: "5%",
            padding: "10px",
            backgroundPosition: "bottom",
          }}
        >
          <p>I dream of you every night. ❤️</p>
        </div>
      </Draggable>
      <Draggable handle=".handle">
        <div
          className={`${zeyada.className} paper image handle`}
          style={{
            right: "5%",
            bottom: "21%",
            padding: "10px",
            backgroundPosition: "bottom",
          }}
        >
          <p>You have the arms,</p>
          <p>I want to be wrapper,</p>
          <p>You have the eyes,</p>
          <p>I wanna get lost in it.</p>
        </div>
      </Draggable>
    </div>
  );
}

export default Page;
