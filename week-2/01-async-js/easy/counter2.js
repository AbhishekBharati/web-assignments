let a = 0;
function timer(val) {
  val++;
  console.log(val);
  setTimeout(() => {
    timer(val);
  }, 1000);

}

timer(a);

