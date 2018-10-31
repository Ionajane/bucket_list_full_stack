use bucket_list;
db.dropDatabase();

db.list_items.insertMany([
  {
    title: "Solo trek across antartica",
    category: "Travel",
    goal_date: "27/05/32",
    cost: "$$$$$",
    completed: "false"
  },
  {
  title: "Skydive",
  category: "activity",
  goal_date: "22/07/19",
  cost: "$$",
  completed: "false"
  },
  {
  title: "Road trip across the States",
  category: "Travel",
  goal_date: "28/09/24",
  cost: "$$$$",
  completed: "false"
},

])
