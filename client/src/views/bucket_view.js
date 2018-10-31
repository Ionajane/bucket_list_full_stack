const PubSub = require("../helpers/pub_sub.js");

const BucketView = function (container) {
  this.container = container;
};

BucketView.prototype.render = function (listItem) {
  const bucketContainer = document.createElement("div");
  bucketContainer.id = "list-item";

  const title = this.createHeading(listItem.title);
  bucketContainer.appendChild(title);

  const category = this.createDetail("Category", listItem.category);
  bucketContainer.appendChild(category);

  const goalDate = this.createDetail("Goal Date", listItem.goalDate);
  bucketContainer.appendChild(goalDate);

  const cost = this.createDetail("Cost", listItem.cost);
  bucketContainer.appendChild(cost);

  const completed = this.createDetail("Completed", listItem.completed);
  bucketContainer.appendChild(completed);

  // const completeButton = this.createCompleteButton(listItem._id);
  // bucketContainer.appendChild(completeButton);

  const deleteButton = this.createDeleteButton(listItem._id);
  bucketContainer.appendChild(deleteButton);

  this.container.appendChild(bucketContainer);
};

  BucketView.prototype.createHeading = function (textContent) {
    const heading = document.createElement("h2");
    heading.textContent = textContent;
    return heading;
  };

  BucketView.prototype.createDetail = function (label, text) {
    const detail = document.createElement("p");
    detail.textContent = `${label}: ${text}`;
    return detail;
  };

  BucketView.prototype.createDeleteButton = function (listItemId) {
    const button = document.createElement("button");
    button.classList.add('delete-btn');
    button.value = listItemId;
    button.textContent = "DELETE"

    button.addEventListener("click", (evt) => {
      PubSub.publish("BucketView:list-item-delete-clicked", evt.target.value);
    });

    return button;
  };


module.exports = BucketView;
