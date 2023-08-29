console.log(document.getElementById("brandName").innerText);
let brands = ["HiStudy", "NoStudy", "LoStudy", "OkStudy"];
setInterval(() => {
  let i = Math.floor(Math.random() * brands.length);
  document.getElementById("brandName").innerText = brands[i];
}, 900);