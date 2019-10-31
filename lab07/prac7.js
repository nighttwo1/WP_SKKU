document.getElementById("name").value = "";
document.getElementById("name").type = "text";

document.getElementById("password").value = "";
document.getElementById("password").type = "password";

document.getElementById("email").value = "";
document.getElementById("email").type = "email";

document.getElementById("age").value = "";
document.getElementById("age").type = "number";

document.getElementById("footsize").value = "";
document.getElementById("footsize").type = "number";

document.getElementById("birthday").type="date";

document.getElementById("file").type = "file";

document.getElementById("upload").value = "upload";
document.getElementById("upload").type = "submit";

document.getElementById("submit").type="submit";

let button=document.getElementById("reset");
button.type="reset";
button.addEventListener("click", reset);
function reset(){
  alert("Do you really want to Reset?");
  return 0;
}

let math=document.getElementById("1");
let computer=document.getElementById("2");
let english=document.getElementById("3");
let biology=document.getElementById("4");
let chemistry=document.getElementById("5");

var score=[math.value*1, computer.value*1, english.value*1, biology.value*1, chemistry.value*1];

let totalscore=0;
let button2=document.getElementById("cal");
button2.addEventListener("click", getAverageGrade);
function getAverageGrade(){
  totalscore=math.value*1+computer.value*1+english.value*1+biology.value*1+chemistry.value*1;
  /*
  let math=document.getElementById("math");
  let computer=document.getElementById("computer");
  let english=document.getElementById("english");
  let biology=document.getElementById("biology");
  let chemistry=document.getElementById("chemistry");
*/
  let avgGrade;
  avgGrade=totalscore/5;
  //avgGrade=math+computer+english+biology+chemistry/5;
  alert(math.value);
  alert(computer.value);
  alert(english.value);
  alert(biology.value);
  alert(chemistry.value);
  alert(totalscore);
  alert(avgGrade);
}
