let requestOptions = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 464h93kjLVewtvXyOGn5MY3crgfRjfhZPLxe5-w6IMQCU99wP6-NnpO2jgYK7b84wLvHRFxURdqD41XLo5ouLsCiwCutGYNwQbMsMixh_HHNJ_38YdW5-ZqxaMvjYnYx",
  },
  redirect: "follow",
};
let fetchedRestaurant = [];
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
  restaurants.fetchRestaurants().then(printRestaurant());
  // .then((fetchedRestaurant = []));
});

// var randomRestaurant = "None Found";
let restaurants = {
  fetchRestaurants: async function () {
    const response = await fetch(
      "https://mycorsproxy-jonnevie.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" +
        userInput +
        "&location=" +
        userLocation +
        "",
      requestOptions
    );
    const json = await response.json();
    fetchedRestaurant.push(json.businesses);
    // console.log(fetchedRestaurant[0].length);
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
};

// const printRestaurant = async () => {
//   const restaurantName = await restaurants.fetchRestaurants();
//   return restaurantName;
// };

// function restaurantPick() {
//   name1.innerHTML = randomRestaurant;
// }

// console.log(restaurants.fetchRestaurants());
// printRestaurant();
console.log(fetchedRestaurant);
