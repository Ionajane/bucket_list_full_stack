const PubSub = require("../helpers/pub_sub.js");
const BucketView = require("./bucket_view.js");

const BucketGridView = function (container) {
  this.container = container;
};

BucketGridView.prototype.bindEvents = function () {
  PubSub.subscribe("ListItems:data-loaded", (evt) => {
    this.render(evt.detail);
    console.log(evt.detail);
  });
};

BucketGridView.prototype.render = function (listItems) {
  this.container.innerHTML = "";
  const bucketView = new BucketView(this.container);

  listItems.forEach((listItem) => bucketView.render(listItem));
};

module.exports = BucketGridView
