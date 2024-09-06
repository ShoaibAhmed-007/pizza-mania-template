const listItems = document.querySelectorAll("#item-list li");
const mainImg = document.querySelector("#main-image");
const mainText = document.querySelector("#main-text");
const ratingValue = document.querySelector("#rating-value");
const itemTitle = document.querySelector("#item-title");
const itemDesc = document.querySelector("#item-description");

function removeSelected() {
  listItems.forEach((item) => {
    item.classList.remove("selected");
  });
}

function setValues(name) {
  switch (name) {
    case "Supreme Pizza":
      return {
        name: name.split(" ")[0],
        img: "./assets/images/pizza1.png",
        rating: 4.8,
        description:
          "A delectable blend of mozzarella cheese, pepperoni, sausage, mushrooms, green peppers, and onions. Each slice offers a perfect balance of savory flavors with a crispy crust, making it a classic favorite for any pizza lover.",
      };
    case "Veggie Pizza":
      return {
        name: name.split(" ")[0],
        img: "./assets/images/pizza2.png",
        rating: 4.5,
        description:
          "Loaded with fresh bell peppers, mushrooms, onions, and black olives, this Veggie Pizza is a delightful medley of garden-fresh flavors atop a bed of rich tomato sauce and mozzarella cheese.",
      };
    case "Pepperoni Pizza":
      return {
        name: name.split(" ")[0],
        img: "./assets/images/pizza3.png",
        rating: 4.2,
        description:
          "A timeless favorite, our Pepperoni Pizza features a generous layer of spicy, crispy pepperoni slices atop gooey mozzarella cheese and a flavorful tomato base, all baked to perfection.",
      };
    case "BBQ Pizza":
      return {
        name: name.split(" ")[0],
        img: "./assets/images/pizza4.png",
        rating: 4.9,
        description:
          "Savory BBQ sauce replaces the traditional tomato base in this pizza, topped with tender grilled chicken, red onions, and cilantro, offering a smoky, tangy twist on classic pizza flavors.",
      };
    default:
      return {
        name: "",
        img: "",
        rating: "",
        description: "",
      };
  }
}

function setInfo(obj) {
  mainImg.classList.remove("show");
  mainText.classList.remove("show");

  setTimeout(() => {
    mainImg.setAttribute("src", obj.img);
    mainText.innerHTML = `${obj.name}<span style="font-size: 80px; font-weight: 900">Pizza</span>`;
    ratingValue.textContent = obj.rating;
    itemTitle.textContent = `${obj.name} Pizza`;
    itemDesc.textContent = obj.description;

    mainImg.classList.add("show");
    mainText.classList.add("show");
  }, 300);
}

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeSelected();
    item.classList.add("selected");
    const pizzaObj = setValues(item.children[1].textContent);
    setInfo(pizzaObj);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const defaultPizza = setValues("Supreme Pizza");
  setInfo(defaultPizza);
});
