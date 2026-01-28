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
      // console.log((index, index2));
      //if the current index doesn't match the clicked index
      //Remove the "active" class from the other option images
      index != index2 && image2.classList.remove("active");

      // console.log(e.target);
    });

    //Get the source of the clicked option image
    let imageSrc = e.target.querySelector("img").src;
    //Set the user image to the clicked option image
    userResult.src = imageSrc;
    // console.log(imageSrc);

    //Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    //Create an array of CPU image options
    let cpuImages = [
      "images/rock.png",
      "images/paper.png",
      "images/scissors.png",
    ];
    //Set the CPU image to a random option from the array
    cpuResult.src = cpuImages[randomNumber];

    //Assign a letter to the CPU option("R" for rock, "P" for paper, "S" for scissors)
    let cpuValue = ["R", "P", "S"][randomNumber];

    //Assign a letter value to the clicked option (based on index)
    let userValue = ["R", "P", "S"][index];

    //Create an object with all the possible outcomes
    let outcomes = {
      RR: "Draw",
      RP: "CPU",
      RS: "YOU",
      PP: "Draw",
      PR: "YOU",
      PS: "CPU",
      SS: "Draw",
      SR: "CPU",
      SP: "YOU",
    };

    //Lookup the outcome value based on user and CPU options
    let outComeValue = outcomes[userValue + cpuValue];
    // console.log(cpuValue, userValue);
    console.log(outComeValue);
  });
});
