// *get a global access
const billInput = document.getElementById("bill-input");
const tipInput = document.getElementById("tip-input");
const numberOfPeople = document.getElementById("number-of-people");
const perPersonTotal = document.getElementById("per-person-bill");
const increasePeople = document.getElementById("increment");
const decreasePeople = document.getElementById("decrement");

// *get the number of people
let numberOfPeopleTotal = Number(numberOfPeople.innerText);

// * calulate the total bill per person
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100;

  // get the total tip amount
  const tipAmount = bill * tipPercent;

  // calculate the total amount (tip amount + bill)
  const totalAmount = bill + tipAmount;

  // calculate the per person total amount (total divided by number of people)
  const perPersonTotalAmount = totalAmount / numberOfPeopleTotal;

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `$${Math.round(perPersonTotalAmount)}`;
};

//* split the bills between more people
increasePeople.addEventListener("click", (e) => {
  e.preventDefault();
  // increment the amount
  numberOfPeopleTotal += 1;

  // update the DOM with the new number of people
  numberOfPeople.innerText = numberOfPeopleTotal;

  // calculate the bill based on the new number of people
  calculateBill();
});

//* split the bills between fewer people
decreasePeople.addEventListener("click", (e) => {
  e.preventDefault();
  // if number of peple is 1 or less somply return
  if (numberOfPeopleTotal <= 1) {
    return;
  }
  // decrement the amount
  numberOfPeopleTotal -= 1;

  // update the DOM with the new number of people
  numberOfPeople.innerText = numberOfPeopleTotal;

  // calculate the bill based on the new number of people
  calculateBill();
});
