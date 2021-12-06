import "../scss/app.scss";
import * as R from 'ramda';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];

  var getClass = R.pluck('class');
  const new_class = getClass(arrayToPluck);

  const articles = document.querySelectorAll("article");

  var i = 0;
  articles.forEach(element => {
    element.classList.add(new_class[i++]);
  });
});
