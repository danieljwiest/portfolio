const toKebabCase = (str: string) => {
  const kebabCase = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.join("-")
    .toLocaleLowerCase();

  //Guard against returning and 'undefined' Should not occur.
  if (kebabCase === undefined) {
    throw new Error("toKebabCase is attempting to return an undefined result");
  }

  return kebabCase;
};

export default toKebabCase;
