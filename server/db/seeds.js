use bucket_list;
db.dropDatabase();

db.list_items.insertMany([
  {
    title: "Solo trek across antartica",
    category: "Travel",
    goalDate: "27/05/32",
    cost: "$$$$$",
    completed: "false"
  },
  {
  title: "Skydive",
  category: "activity",
  goalDate: "22/07/19",
  cost: "$$",
  completed: "false"
  },
  {
  title: "Road trip across the States",
  category: "Travel",
  goalDate: "28/09/24",
  cost: "$$$$",
  completed: "false"
},

])
