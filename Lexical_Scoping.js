// We will learn Lexical Scope
//  Lexical Scoping in JS

//  ------------------------

function Father() {
  let prop = "I have a property";

  function Son() {
    let SonProp = "I have a Special property too";
    console.log("Parent Property for Son1:", prop);
    console.log("Son1 Property for own:", SonProp);
  }

  function Son2() {
    console.log("Parent Property for Son2:", prop);
  // console.log("Son1 Property for Son2:", SonProp);      // It will give Error ==> SonProp is not defined
  }
  // console.log("Son1 property for Family: ", SonProp);   // It Also gives an error  => Sonprop is not defined

  Son();
  Son2();
}
Father();

// console.log(prop);           // It throw an Error prop is not defined
