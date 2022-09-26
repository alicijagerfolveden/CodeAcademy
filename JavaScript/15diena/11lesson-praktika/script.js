document.body.style.backgroundColor = "cyan";

const main = document.createElement("main");

main.style.backgroundColor = "white";
main.style.width = "80%";
// main.style.height = "80%";
main.style.margin = "auto";
main.style.borderRadius = "10px";
main.style.marginTop = "150px";
main.style.textAlign = "center";
main.style.fontFamily = "sans-serif";
main.style.paddingBottom = "50px";

document.body.append(main);

const img = document.createElement("img");

img.src =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";
img.style.width = "270px";
img.style.height = "250px";
img.style.borderRadius = "50%";
img.style.marginTop = "-100px";
img.style.border = "5px solid yellow";

document.querySelector("main").append(img);

const nameSurname = document.createElement("h1");

nameSurname.textContent = "Alicija Keys";

document.querySelector("main").append(nameSurname);

const textAbout = document.createElement("h2");

textAbout.textContent = "Developer & Founder @glamatink";
textAbout.style.color = "gray";
textAbout.style.fontWeight = "550";

document.querySelector("main").append(textAbout);

const textAbout2 = document.createElement("h2");

textAbout2.textContent = "Austria, Europe";
textAbout2.style.color = "gray";
textAbout2.style.fontWeight = "550";

document.querySelector("main").append(textAbout2);
