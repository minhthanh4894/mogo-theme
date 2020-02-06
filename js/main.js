document.addEventListener("DOMContentLoaded", function() {
  // console.log("hello");
  var graph = document.querySelectorAll(".service2__graph");
  var arrow = document.querySelectorAll(".arrow");
  var active = document.querySelectorAll(".is-active");
  // console.log(graph);
  // console.log(arrow);
  for (let i = 0; i < graph.length; i++) {
    arrow[i].addEventListener("click", function() {
      for (let k = 0; k < graph.length; k++) {
        if (k != i) {
          graph[k].classList.remove("is-active");
          arrow[k].classList.remove("is-rotate");
        }
      }
      this.classList.toggle("is-rotate");
      graph[i].classList.toggle("is-active");
      //   console.log(i);
    });
  }
});
