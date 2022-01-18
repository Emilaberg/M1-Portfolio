
function myFunction(){
    var x = document.getElementById("links");
    
    if (x.style.display === "block"){
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.querySelectorAll("#links").forEach(item =>{
    item.addEventListener("click", event =>{
      close();
    })

  })
  function close(){
    var x = document.getElementById("links");
    x.style.display = "none";
  }

function removeOverlay(x)
{
  console.log(x);
}