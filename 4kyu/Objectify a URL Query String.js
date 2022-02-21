// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  let result = {};

  if (query.length) {
    const paramsAndValues = query.split('&').map((param) => param.split('='));

    let link = result;

    for (const [param, value] of paramsAndValues) {
      const splittedParam = param.split('.');

      for (let i = 0; i < splittedParam.length; i++) {
        if (i !== splittedParam.length - 1) {
          link[splittedParam[i]] = { ...link[splittedParam[i]] };
          link = link[splittedParam[i]];
        } else {
          link[splittedParam[i]] = decodeURIComponent(value);
          link = result;
        }
      }
    }
  }

  return result;
}
