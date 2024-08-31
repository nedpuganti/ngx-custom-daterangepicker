// global.mock.js
global.structuredClone = function (v) {
  return JSON.parse(JSON.stringify(v));
};
