import qs from "qs";
import "./webview.css";

const keys = {
  topbar: "WEBVIEW_TOP_BAR",
  safeArea: "WEBVIEW_SAFE_AREA"
};

function getSaveArea() {
  let safeArea: any = localStorage.getItem(keys.safeArea);
  if (!safeArea) {
    return {};
  }
  safeArea = JSON.parse(safeArea);
  for (const key in safeArea) {
    safeArea[key] = JSON.parse(safeArea[key]);
  }
  return safeArea;
}

function getTopBar() {
  return localStorage.getItem(keys.topbar);
}

// 保存
export function saveWebviewParams() {
  const params = qs.parse(window.location.search.split("?")[1]);

  if (params.topbar) {
    localStorage.setItem(keys.topbar, params.topbar);
  }

  if (params.safeArea) {
    const [
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    ] = params.safeArea.split("_");
    localStorage.setItem(
      keys.safeArea,
      JSON.stringify({paddingTop, paddingRight, paddingBottom, paddingLeft})
    );
  }
}

// 生成 安全区域
export function createSafeArea() {
  const app: any = document.querySelector("body");
  const safeArea = getSaveArea();
  if (safeArea.paddingTop !== 0) {
    safeArea.paddingTop = safeArea.paddingTop + 45 + 10;
  }
  for (const key in safeArea) {
    app.style[key] = JSON.parse(safeArea[key]) + "px";
  }
}

function insertDom(dom: Element, elm: Element, className: string) {
  const oldElm = dom.querySelector(`.${className}`);
  // 删除老的
  if (oldElm) {
    oldElm.parentNode && oldElm.parentNode.removeChild(oldElm);
  }
  dom.appendChild(elm);
}

// 生成 返回条
export function createTopbar(title = "会员权益") {
  if (!getTopBar()) {
    return;
  }

  const safeArea = getSaveArea();

  const html = `
    <div class="__topbar" style="padding-top: ${safeArea.paddingTop}px;">
      <button class="__topbar_icon"></button>
      <div class="__topbar_title">${title}</div>
    </div>
  `;

  const elm = document.createElement("DIV");
  elm.innerHTML = html;
  elm.className = "__webview__topbar";
  const app: any = document.querySelector("body");

  insertDom(app, elm, "__webview__topbar");

  const btnBack: any = document.querySelector(".__topbar_icon");
  btnBack.onclick = () => history.go(-1);
}
