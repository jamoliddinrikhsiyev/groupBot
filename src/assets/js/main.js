const socket = io();
const code = document.querySelector("code");

socket.on("bot sender", (io) => {
  let text = code.textContent;
  code.innerHTML = text + `${io}` + "<br>";
  console.log(`${io}`);
});
