const moment = require('moment');


function Division(data) {
  this.data = data;
}

Division.prototype.holidays = function (start, end) {
  if (!start) {
    return this.data;
  } else if (!end) {
    const s = moment(start);

    return this.data.filter(function (h) {
      return moment(h.date).isSameOrAfter(s);
    });
  } else {
    const s = moment(start).startOf('day');
    const e = moment(end).endOf('day');

    return this.data.filter(function (h) {
      return moment(h.date).add(1, 'hour').isBetween(s, e);
    });
  }
};

module.exports = Division;
