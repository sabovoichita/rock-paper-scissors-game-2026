// console.log("Hello!");
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".userResult img");
const cpuResult = document.querySelector(".cpuResult img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".optionImage");
// console.log(gameContainer, userResult, cpuResult, result, optionImages);

//loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    // console.log("image clicked", image, index);
    image.classList.add("active");

    //loop through each option element again
    optionImages.forEach((image2, index2) => {
      console.log((index, index2));
      //if the current index doesn't match the clicked index
      //Remove the "active" class from the other option images
      index != index2 && image2.classList.remove("active");

      // console.log(e.target);
    });

    //Get the source of the clicked option image
    let imageSrc = e.target.querySelector("img").src;
    //Set the user image to the clicked option image
    userResult.src = imageSrc;
    console.log(imageSrc);
  });
});
