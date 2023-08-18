function typeChecker(arg1, arg2) {
  switch (arg1, arg2) {
    case typeof arg1 === "string" && typeof arg2 === "string":
      console.log(arg1 + ` ` + arg2);
      break;
      case typeof arg1 === "number" && typeof arg2 === "number":
        console.log(arg1 * arg2);
      break;
      default:
        console.log("There are no type matches for operation");
        break;
  }

}
console.log(typeChecker(6, 7));


// працює неправильно. як виправити? 
