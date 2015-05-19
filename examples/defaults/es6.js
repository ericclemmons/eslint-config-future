import util from "util";

const { format } = util;

const [ a, b, c ] = [1, 2, 3];

const [
  d,
  e,
  f,
] = [a, b, c];

export default format("howdy", d, e, f);
