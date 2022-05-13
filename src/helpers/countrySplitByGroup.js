const sortingArrByAlfabeticValue = ({ arr = [] }) => {
  //se ordena alfabeticamente segun una propiedad dentro de un objeto
  return arr.sort((a, b) =>
    a.group > b.group ? 1 : a.group < b.group ? -1 : 0
  );
};

const countrySplitByGroup = ({ countries = [], group }) => {
  let arrGrouped = [];
  let groupObject;
  if (group === "continent") {
    groupObject = countries.reduce((total, current) => {
      return {
        ...total,
        [current.continent.name]: total[current.continent.name]
          ? [current, ...total[current.continent.name]]
          : [current],
      };
    }, {});
    for (const continent in groupObject) {
      if (Object.hasOwnProperty.call(groupObject, continent)) {
        const element = groupObject[continent];
        arrGrouped.push({ group: continent, countries: element });
      }
    }
  }
  if (group === "languages") {
    groupObject = countries.reduce((total, current) => {
      current.languages.forEach((language) => {
        total[language.name]
          ? total[language.name].push(current)
          : (total[language.name] = [current]);
      });
      return {
        ...total,
      };
    }, {});
    for (const language in groupObject) {
      if (Object.hasOwnProperty.call(groupObject, language)) {
        const element = groupObject[language];
        arrGrouped.push({ group: language, countries: element });
      }
    }
  }
  return arrGrouped;
};

export default countrySplitByGroup;
