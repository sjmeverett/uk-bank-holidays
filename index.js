
var Division = require('./Division');
var pkg = require('./package.json');
var Promise = require('bluebird');
var request = require('request-promise');


function Feed() {

}

Feed.prototype.load = function () {
  if (this.data) {
    return Promise.resolve(this.data);

  } else {
    var _this = this;

    return request({uri: pkg.feedUrl, json: true})
      .then(function (data) {
        _this.data = data;
        return data;
      });
  }
};

Feed.prototype.divisions = function (name) {
  if (!this.data) {
    throw new Error('no data yet, call load() first');
  }

  if (!name) {
    if (!this.divisions) {
      this.divisions = [];

      for (var k in this.data) {
        this.divisions.push(k);
      }
    }

    return this.divisions;

  } else {
    return new Division(this.data[name].events);
  }
};

module.exports = Feed;
