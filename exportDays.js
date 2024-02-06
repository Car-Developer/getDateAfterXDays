const getDateAfterXDays = require("./index.js");
const { format } = require("date-fns");
const result = getDateAfterXDays(3);
console.log(result);
