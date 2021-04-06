function pippo() {
  new Vue({

    el: '.lapo',

    data: {
      "franco" : "Ciao",
      image: "img/ciao1.jpg"
    }

  });
}
function init() {
  pippo();
}
$(init);
