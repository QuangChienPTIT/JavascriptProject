$(document).ready(function () {
  $(".my-slick").slick();
});

async function getListIngredient() {
  var resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  ).then((response) => response.json());
  console.log(resp);
}
getListIngredient();
