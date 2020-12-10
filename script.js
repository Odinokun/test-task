let btns = document.querySelectorAll(".play-btn");

for (let i = 0; i < btns.length; i++) {
  btn = btns[i];

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    let btnId = this.id;
    btnId = "btnId=" + encodeURIComponent(btnId);

    let request = new XMLHttpRequest();

    request.open("POST", "script.php", true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    request.send(btnId);
  });
}
