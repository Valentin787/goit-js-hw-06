
const totalCategoriesRef = document.querySelectorAll(".item");
console.log("Number of categories: ", totalCategoriesRef.length);

[...totalCategoriesRef].forEach(item => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
})