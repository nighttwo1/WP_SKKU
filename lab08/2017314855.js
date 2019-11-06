const textarea=document.getElementById('my-textarea');
const remainder=document.getElementById('msg');

const MAX_CHARS=250;

textarea.addEventListener('input', ()=>{
  const remaining=MAX_CHARS-textarea.value.length;

  console.log(remaining);

  remainder.textContent=remaining+' characters remaining'
});


var canvas=document.querySelector('#canvas');
var ctx=canvas.getContext('2d');

for(let i=0;i<5;i++){
    ctx.fillRect(80*i, 0, 40, 40);
    ctx.fillRect(40+80*i, 40, 40, 40);
    ctx.fillRect(80*i, 80, 40, 40);
    ctx.fillRect(40+80*i, 120, 40, 40);
    ctx.fillRect(80*i, 160, 40, 40);
    ctx.fillRect(40+80*i, 200, 40, 40);
    ctx.fillRect(80*i, 240, 40, 40);
    ctx.fillRect(40+80*i, 280, 40, 40);
    ctx.fillRect(80*i, 320, 40, 40);
    ctx.stroke();
}

for(var i=0;i<40;i++){
  var x=Math.random()*window.innerWidth;
  var y=Math.random()*window.innerHeight;
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, Math.PI*2, false);
  ctx.strokeStyle='gray';
  ctx.stroke();
}
