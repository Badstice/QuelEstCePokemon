datas.forEach((d, i) => (d.index = i));
newEvolution();

window.addEventListener("beforeunload", (event) => event.preventDefault());
