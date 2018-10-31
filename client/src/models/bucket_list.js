const RequestHelper = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");

const BucketList = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

  BucketList.prototype.bindEvents = function () {
    PubSub.subscribe("BucketForm: list-item-submitted", (evt) => {
      this.postListItem(evt.detail);
    });
    PubSub.subscribe("BucketView:list-item-delete-clicked", (evt) => {
      this.deleteListItem(evt.detail)
    });
  };


BucketList.prototype.postListItem = function (listItem) {
  this.request.post(listItem)
    .then((listItem) => {
      PubSub.publish("ListItems:data-loaded", listItem);
    })
    .catch(console.error)
};


BucketList.prototype.getData = function () {
  this.request.get()
    .then((listItems) => {
      PubSub.publish("ListItems:data-loaded", listItems);
    })
    .catch(console.error)
};

BucketList.prototype.deleteListItem = function (listItemId) {
  this.request.delete(listItemId)
    .then((list) => {
      PubSub.publish('ListItems:data-loaded', list);
    })
    .catch(console.error);
  };

module.exports = BucketList;
