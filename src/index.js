// import { file } from "./library/globals.js";, 结合导出的loader时需要 调整至配置文件

function component() {
  var element = document.createElement("div");
  element.innerHTML = join(["Hello", "webpack"], " ");
  var element = document.createElement("div");
  this.alert("Hmmm, this probably isn't a great idea...");
  this.alert(file);
  return element;
}

document.body.appendChild(component());
