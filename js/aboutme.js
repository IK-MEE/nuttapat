document.getElementById('rickroll').style.display = 'none';

document.getElementById('button1').addEventListener('click', function playvideo(){
  document.getElementById('rickroll').muted = false;
  document.getElementById('rickroll').play();
  document.getElementById('rickroll').style.display = 'block';
  document.getElementById('rickroll').style.width = '100%';
  document.getElementById('button1').style.display = 'none';
});