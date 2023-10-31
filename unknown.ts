let w: unknown = 1;
w = "string"; // no error
w = {
  Method1: () => {
    console.log("I think therefore I am");
  }
} as { Method1: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.Method1(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { Method1: Function }).Method1();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting