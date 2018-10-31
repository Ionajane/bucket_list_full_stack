const BucketList = require("./models/bucket_list.js");
const BucketGridView = require("./views/bucket_grid_view.js");
const BucketFormView = require("./views/bucket_form_view.js");


document.addEventListener("DOMContentLoaded", () => {

  const bucketsForm = document.querySelector("form#bucket-list-form");
  const bucketsFormView = new BucketFormView(bucketsForm);
  bucketsFormView.bindEvents();


  const bucketContainer = document.querySelector("div#list-items");
  const bucketGridView = new BucketGridView(bucketContainer);
  bucketGridView.bindEvents();



  const url = "http://localhost:3000/api/list_items";
  const listItems = new BucketList(url);
  listItems.bindEvents();
  listItems.getData();

})  ;
