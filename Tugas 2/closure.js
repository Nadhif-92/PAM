function makeFunc() {
    const name = "Ahmad Nadhif Mu'afa";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();