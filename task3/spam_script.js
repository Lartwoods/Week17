document.querySelector("#button").onclick = function () {
  checkMessage();
  checkSpam(str);
};
function sendMessage(author, comment) {
  document.getElementById(
    "out"
  ).innerHTML += `<span class='name'>${author}:</span><span>${comment}</span><br>`;
}
function checkMessage() {
  let author = document.getElementById("author").value;
  let comment = document.getElementById("comment").value;

  sendMessage(author, comment);
}
function checkSpam(comment) {
  return comment.value.replace(/viagra|xxx/i, "***");
}
