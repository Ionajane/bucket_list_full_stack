const PubSub = require("../helpers/pub_sub.js");

const BucketFormView = function (form) {
  this.form = form;
}

BucketFormView.prototype.bindEvents = function () {
  this.form.addEventListener("submit", (evt) => {
    this.handleSubmit(evt);
  });
};

BucketFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newListItem = this.createListItem(evt.target);
  PubSub.publish("BucketForm: list-item-submitted", newListItem);
  console.log(newListItem);
};

BucketFormView.prototype.createListItem = function (form) {
  const newListItem = {
    title: form.title.value,
    category: form.category.value,
    goalDate: form.date.value,
    cost: form.cost.value
  };
  return newListItem
};

module.exports = BucketFormView;
