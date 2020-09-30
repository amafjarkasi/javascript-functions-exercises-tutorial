const rapid = (name) => {
    let lowerName = name.toLowerCase();
    lowerName = lowerName.replace(/[aeiou]+/g, "");
    return lowerName.toUpperCase();

    // for
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));