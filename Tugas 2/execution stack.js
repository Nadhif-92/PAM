var name = "Aif";

function first() {
  var a = "Hai!";
  second();
  console.log(`${a} ${name}`);
}

function second() {
  var b = "Hei!";
  third();
  console.log(`${b} ${name}`);
}

function third() {
  var c = "Halo!";
  console.log(`${c} ${name}`);
}

first();