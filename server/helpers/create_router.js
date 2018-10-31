const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {
  const router = express.Router();

    //INDEX

    router.get("/", (req, res) => {
      collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((error) => {
          console.error(error)
          res.status(500);
          res.json({status: 500, error: err});
    });
  });

    //SHOW

    router.get("/:id", (req, res) => {
      const id = req.params.id;
      collection
        .findOne({_id: ObjectID(id)})
        .then((doc) => res.json(doc))
        .catch((error) => {
          console.error(error)
          res.status(500);
          res.json({ status: 500, error: error });
        });
      });

    //CREATE

    router.post("/", (req, res) => {
      const newData = req.body;
      collection
        .insertOne(newData)
        .then(() => collection.find().toArray())
        .then((docs) => res.json(docs))
        .catch((error) => {
          console.error(error);
          res.status(500);
          res.json({status: 500, error: err});
        });
    });

    //UPDATE
    router.put("/:id", (req, res) => {
      const id = req.params.id
      collection
        .updateOne(
          {_id: ObjectID(id)},
          {$set: req.body}
      )
        .then(() => collection.find().toArray())
        .then((docs) => res.json(docs))
        .catch((error) => {
          console.error(error);
          res.status(500);
          res.json({status: 500, error: err});
        });
    });

    //DELETE

    router.delete("/:id", (req, res) => {
      const id = req.params.id;
      collection
        .deleteOne({_id: ObjectID(id)})
        .then(() => collection.find().toArray())
        .then((docs) => res.json(docs))
        .catch((error) => {
          console.error(error);
          res.status(500);
          res.json({status: 500, error: err});
        });
    });



  return router;

}



module.exports = createRouter;
