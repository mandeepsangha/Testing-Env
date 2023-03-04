function autoFill(value, arrayList) {
  const filteredEmployers = arrayList.filter((item) => {
    const searchTerm = value.toLowerCase();
    const employer = item.toLowerCase();

    if (searchTerm.length === 1) {
    const matchSearch = employer.includes(searchTerm)
    return searchTerm && matchSearch;
    }

    if (searchTerm.length === 2) {
      function isSubstring(str, sub) {
        return str.split(sub).length > 1;
      }
      const matchSearch = isSubstring(employer, searchTerm);
      return matchSearch;
    }
  });

  return filteredEmployers;

  // const employerSorter = (a, b) => {
  //   const aIndex = a.name.toLowerCase().indexOf(value.toLowerCase());
  //   const bIndex = b.name.toLowerCase().indexOf(value.toLowerCase());
  //   return aIndex > bIndex ? 1 : aIndex < bIndex ? -1 : 0;
  // };
}
module.exports = autoFill;
