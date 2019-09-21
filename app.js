console.log('worked');


const firstVote = 10;
const secondVote = 10;
const thirdVote = 1;
let detractorsConut = 0;

let promoutersCount = 0;
if (firstVote >=9) {
    promoutersCount = promoutersCount + 1;
}

if (firstVote <=6) {
    detractorsConut = detractorsConut + 1;
}

if (secondVote >=9) {
    promoutersCount = promoutersCount + 1;
}

if (secondVote <=6) {
    detractorsConut = detractorsConut + 1;
}
if (thirdVote >=9) {
    promoutersCount = promoutersCount + 1;
}

if (thirdVote <=6) {
    detractorsConut = detractorsConut + 1;
}

const nps = (promoutersCount/3 - detractorsConut/3) * 100;

console.log(nps);
console.log(promoutersCount);
console.log(detractorsConut);
