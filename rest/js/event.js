reset async await task();

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateLog() {
  let Log = prompt('Logs to Console');
  para.textContent = 'Amount: ' + Log;
}
