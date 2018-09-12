const PubSub = require('../helpers/pub_sub.js');
const Request = require("../helpers/request.js");
const CreateAppend = require("../helpers/create_append.js");

const SelectView = function (element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("Countries:all-countries", (event) => {
    const countries = event.detail;
    countries.forEach((country, index) => {
      const option = new CreateAppend("option", country.name, this.element)
      option.value = index;
    });
  });

  this.element.addEventListener("change", (event) => {
    const countryId = event.target.value;
    PubSub.publish("SelectView:selected-country", countryId);
  });
};

module.exports = SelectView;
