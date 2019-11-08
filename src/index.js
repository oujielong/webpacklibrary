function component() {
  var element = document.createElement("div");
  element.innerHTML = join(["Hello", "webpack"], " ");
  var element = document.createElement("div");
  this.alert("Hmmm, this probably isn't a great idea...");
  this.alert(file);
  return element;
}
document.body.appendChild(component());

fetch(
  "http://172.16.100.60:18133/CBM/M00/00/1B/rBBkGF3E4iiAZuSgAABJODubpW451.html?token=1f2b8af13d1e58cd9677f1ce28e2161b&ts=1573184040&ts=1573184031692",
  { mode: "cors" }
)
  .then(response => response.json())
  .then(json => {
    console.log(
      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
    );
    console.log(json);
  })
  .catch(error =>
    console.error("Something went wrong when fetching this data: ", error)
  );
