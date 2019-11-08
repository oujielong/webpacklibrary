function component() {
  var element = document.createElement("div");
  element.innerHTML = join(["Hello", "webpack"], " ");
  var element = document.createElement("div");
  this.alert("Hmmm, this probably isn't a great idea...");
  this.alert(file);
  return element;
}
document.body.appendChild(component());

fetch("/proxy/users")
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
