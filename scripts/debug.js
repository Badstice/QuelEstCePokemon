function checkData() {
  datas.forEach(async (d) => {
    const r = await getPokemonData(d.name);
    if (r?.status === 404) {
      console.error(`${d.name} is not found`);
    }

    if (d.name.toLocaleLowerCase() !== d.syllabes.join("")) {
      console.error(`${d.name} : ${d.syllabes.join(", ")}`);
    }
  });
}
