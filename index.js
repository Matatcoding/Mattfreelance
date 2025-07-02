/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreeLance() {
  const $name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const $occ = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const $pri =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1));
  return { $name, $occ, $pri };
}
const oneFreeLancer = makeFreeLance();

const people = Array.from({ length: NUM_FREELANCERS }, makeFreeLance);
console.log(people);

function getavg(people) {
  const sum = people.reduce((acc, person) => acc + person.$pri, 0);
  let mean = sum / people.length;
  return mean;
}
const totalavg = getavg(people);

console.log(totalavg);

const $app = document.querySelector("#app");
const $intro = document.querySelector("#intro");

const getLancer = (oneFreeLancer) => {
  const $div = document.createElement("div");
  const $title = document.createElement("p");
  const $job = document.createElement("p");
  const $cost = document.createElement("p");
  $title.textContent = oneFreeLancer.$name;
  $job.textContent = oneFreeLancer.$occ;
  $cost.textContent = oneFreeLancer.$pri;
  $div.append($title);
  $div.append($job);
  $div.append($cost);
  return $div;
};

function freelanceTable(people) {
  const $tble = document.createElement("table");
  const $tblbody = document.createElement("tbody");
  people.forEach((people) => {
    const $row = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = people.$name;
    $row.appendChild(name);

    const job = document.createElement("td");
    job.textContent = people.$occ;
    $row.appendChild(job);

    const cost = document.createElement("td");
    cost.textContent = people.$pri;
    $row.appendChild(cost);

    name.style.border = "1px solid";
    name.style.padding = "1rem 1rem";
    job.style.border = "1px solid";
    job.style.padding = "1rem 1rem";
    cost.style.border = "1px solid";
    cost.style.padding = "1rem 1rem";

    $tblbody.appendChild($row);
  });
  $tble.appendChild($tblbody);
  $tble.style.margin = "2rem auto";
  $tble.style.boxShadow = "0 0 10px";
  return $tble;
}
const freelancerTable = freelanceTable(people);

const main = () => {
  $intro.style.textAlign = "center";
  $intro.innerHTML = `
    <h1> Available Freelancers</h1>
    <h3 id="avgPrice">The average price is ${totalavg}</h3>
  `;
  $app.appendChild(freelancerTable);
};

main();
