let glassSize: number = +prompt(
  "For small glass input 1, for big glass input 2"
);

let editionals = {
  chokolate: 5,
  caramel: 6,
  berries: 10,
};

let countPrice = (size: number, editionals: object): number => {
  let total: number = 0;
  switch (size) {
    case 1:
      total += 10;
      break;
    case 2:
      total += 25;
      break;
    default:
      break;
  }
  let editional = prompt(
    "Which editional you want to add? (Chokolate, Caramel, Berries)"
  ).toLowerCase();
  let isMarshmelloNeed: boolean = confirm("Do you want to add marshmello?");
  if (isMarshmelloNeed) total += 5;

  if (total) total += editionals[editional];
  return total;
};

console.log(countPrice(glassSize, editionals));
