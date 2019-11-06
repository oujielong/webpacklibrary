import numRef from "./ref.json";
import A from "./library/a";
import B from "./library/b";

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ""
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
export function out() {
  return {
    a: A.a,
    b: B.b
  };
}
