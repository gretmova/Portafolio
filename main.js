let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #173B45; font-size:30px;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="border-radius:10px ;padding:5px;color: #B4D6CD; background:#021526; font-size:22px; ">Estudiante en TICs y el curso de tecnolochicas PRO</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
