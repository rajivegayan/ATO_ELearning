const numb = document.querySelector(".number");
console.log("Selected >> Number ");
console.log(numb);
let counter = 0;
setInterval(() => {
  if(counter == 100 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);