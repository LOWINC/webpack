import "./index.less";
import "./index.css";
import pic from "./1.png";
import {print} from "./print";

import get from "lodash/get";
import tsFun from "./index.ts";

console.log(get(undefined, "name", "hahah"));

console.log(tsFun("123"));

console.log("NODE_ENV:", process.env.NODE_ENV);

const obj = {
  name: "swq"
};

function create() {
  const elm = document.createElement("div");

  elm.innerHTML = obj.name;
  elm.onclick = () => print("hello");
  const image = new Image();
  image.src = pic;
  elm.appendChild(image);
  return elm;
}

document.body.appendChild(create());
