

       
// SEARCH
let searchIcon23 = document.querySelector('.Search-Container .InputBoxes .searchIcon2')
let inputtt = document.querySelector('.InputBoxes input#search2')
searchIcon23.addEventListener('click',()=>{
  console.log('clicked');

  if(inputtt.value == ''){
    return
     }
   else{
    console.log('val',inputtt.value);
    var url = `/load.inc?q=${inputtt.value}`;
    $(".loaded").load(url);}
})
inputtt.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    if(inputtt.value != ''){
      event.preventDefault();
      console.log('val',inputtt.value);
      var url = `/load.inc?q=${inputtt.value}`;
      $(".loaded").load(url);}

    }


  }
)