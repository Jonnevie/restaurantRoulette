let requestOptions = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 464h93kjLVewtvXyOGn5MY3crgfRjfhZPLxe5-w6IMQCU99wP6-NnpO2jgYK7b84wLvHRFxURdqD41XLo5ouLsCiwCutGYNwQbMsMixh_HHNJ_38YdW5-ZqxaMvjYnYx",
  },
  redirect: "follow",
};
let fetchedRestaurant = [];
console.log(fetchedRestaurant);
let randomIndex = 0;

//getting input values
let inputType = document.getElementById("restaurantType");
let inputLocation = document.getElementById("locationInput");
let userInput = "";
let userLocation = "";
//set event listener for shoot button
let shootBtn = document.getElementById("shoot");

shootBtn.addEventListener("click", function () {
  userInput = inputType.value;
  userLocation = inputLocation.value;
  //   restaurants.fetchRestaurants().then
  let cardWarpper = document.getElementById("cardWrapper");
  setTimeout(() => {
    cardWarpper.classList.add("active");
  }, 2000);
  printRestaurant();
});

let restaurants = {
  fetchRestaurants: async function () {
    const response = await fetch(
      "https://mycorsproxy-jonnevie.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" +
        userInput +
        "&location=" +
        userLocation +
        "&limit=50",
      requestOptions
    );
    const json = await response.json();
    fetchedRestaurant.push(json.businesses);
    randomIndex = Math.floor(Math.random() * fetchedRestaurant[0].length);
    return fetchedRestaurant[0][randomIndex];
  },
};
let name1 = document.getElementById("name1");
let img1 = document.getElementById("img1");
let paraText1 = document.getElementById("paraText1");
let address21 = document.getElementById("address2-1");
let address31 = document.getElementById("address3-1");
let addressCityState1 = document.getElementById("addressCityState-1");
let addressCountry1 = document.getElementById("addressCountry-1");
let phone1 = document.getElementById("phone1");
let directions1 = document.getElementById("directions1");

let name2 = document.getElementById("name2");
let img2 = document.getElementById("img2");
let paraText2 = document.getElementById("paraText2");
let address22 = document.getElementById("address2-2");
let address32 = document.getElementById("address3-2");
let addressCityState2 = document.getElementById("addressCityState-2");
let addressCountry2 = document.getElementById("addressCountry-2");
let phone2 = document.getElementById("phone2");
let directions2 = document.getElementById("directions2");

let name3 = document.getElementById("name3");
let img3 = document.getElementById("img3");
let paraText3 = document.getElementById("paraText3");
let address23 = document.getElementById("address2-3");
let address33 = document.getElementById("address3-3");
let addressCityState3 = document.getElementById("addressCityState-3");
let addressCountry3 = document.getElementById("addressCountry-3");
let phone3 = document.getElementById("phone3");
let directions3 = document.getElementById("directions3");

const printRestaurant = () => {
  restaurants.fetchRestaurants().then((restaurant) => {
    // randomRestaurant = restaurantName;
    name1.innerHTML = restaurant.name;
    if (restaurant.image_url ? (img1.src = restaurant.image_url) : img1);
    if (
      restaurant.location.address1
        ? (paraText1.innerHTML = restaurant.location.address1)
        : (paraText1.style.display = "none")
    );
    if (
      restaurant.location.address2
        ? (address21.innerHTML = restaurant.location.address2)
        : (address21.style.display = "none")
    );

    if (
      restaurant.location.address3
        ? (address31.innerHTML = restaurant.location.address3)
        : (address31.style.display = "none")
    );
    addressCityState1.innerHTML = restaurant.location.city;
    addressCityState1.innerHTML += ", " + restaurant.location.state;
    addressCountry1.innerHTML = restaurant.location.country;
    dist1.innerHTML = (restaurant.distance / 1000).toFixed(0) + "km";
    phone1.innerHTML = restaurant.phone;
    directions1.href = restaurant.url;
  });
  restaurants.fetchRestaurants().then((restaurant) => {
    // randomRestaurant = restaurantName;
    name2.innerHTML = restaurant.name;
    if (restaurant.image_url ? (img2.src = restaurant.image_url) : img2);
    if (
      restaurant.location.address1
        ? (paraText2.innerHTML = restaurant.location.address1)
        : (paraText2.style.display = "none")
    );
    if (
      restaurant.location.address2
        ? (address22.innerHTML = restaurant.location.address2)
        : (address22.style.display = "none")
    );

    if (
      restaurant.location.address3
        ? (address32.innerHTML = restaurant.location.address3)
        : (address32.style.display = "none")
    );
    addressCityState2.innerHTML = restaurant.location.city;
    addressCityState2.innerHTML += ", " + restaurant.location.state;
    addressCountry2.innerHTML = restaurant.location.country;
    dist2.innerHTML = (restaurant.distance / 1000).toFixed(0) + "km";
    phone2.innerHTML = restaurant.phone;
    directions2.href = restaurant.url;
  });
  restaurants.fetchRestaurants().then((restaurant) => {
    name3.innerHTML = restaurant.name;
    if (restaurant.image_url ? (img3.src = restaurant.image_url) : img3);
    if (
      restaurant.location.address1
        ? (paraText3.innerHTML = restaurant.location.address1)
        : (paraText3.style.display = "none")
    );
    if (
      restaurant.location.address2
        ? (address23.innerHTML = restaurant.location.address2)
        : (address23.style.display = "none")
    );

    if (
      restaurant.location.address3
        ? (address33.innerHTML = restaurant.location.address3)
        : (address33.style.display = "none")
    );
    addressCityState3.innerHTML = restaurant.location.city;
    addressCityState3.innerHTML += ", " + restaurant.location.state;
    addressCountry3.innerHTML = restaurant.location.country;
    dist3.innerHTML = (restaurant.distance / 1000).toFixed(0) + "km";
    phone3.innerHTML = restaurant.phone;
    directions3.href = restaurant.url;
  });
};
