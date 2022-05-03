{
  const x = 1;
  {
    const y = 2;
    console.log(x); // yes
  }
  console.log(x); // yes
  //console.log(y); // no because y is not defined in primary block.
}

const text = "global"; // Global variable, Global scope
{
  const text = "inside block"; // Local variable, Local scope
  {
    const text = "inside inside block"; // Local variable, Local scope
    console.log(text); // text will find the nearest variables from inside to outside.
  }
}
