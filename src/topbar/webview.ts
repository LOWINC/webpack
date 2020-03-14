import qs from "qs";
import "./webview.css";

const keys = {
  topbar: "WEBVIEW_TOP_BAR",
  safeArea: "WEBVIEW_SAFE_AREA"
};

function insertAfter(newElement: any, targetElement: any) {
  const parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function insertDom(dom: any, html: any) {
  const element = document.createElement("DIV");
  element.innerHTML = html;
  insertAfter(element, dom);
}

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
(function saveWebviewParams() {
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
})();

// 生成 安全区域
(function createSafeArea() {
  const app: any = document.querySelector("#app");
  const safeArea = getSaveArea();
  for (const key in safeArea) {
    app.style[key] = JSON.parse(safeArea[key]) + "px";
  }
})();

// 生成 返回条
(function createTopbar() {
  if (!getTopBar()) {
    return;
  }

  const app: any = document.querySelector("#app");
  const safeArea = getSaveArea();

  const title = document.title || "会员权益";

  const html = `
    <div class="__topbar" style="padding-top: ${safeArea.paddingTop}px;">
      <button class="__topbar_icon"></button>
      <div class="__topbar_title">${title}</div>
    </div>
  `;
  insertDom(app, html);

  const btnBack: any = document.querySelector(".__topbar_icon");
  btnBack.onclick = () => history.go(-1);
  window.addEventListener("popstate", createTopbar);
  window.addEventListener("load", createTopbar);
})();
