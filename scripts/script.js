datas.forEach((d, i) => (d.index = i));
newEvolution(22);

window.addEventListener("beforeunload", (event) => event.preventDefault());
