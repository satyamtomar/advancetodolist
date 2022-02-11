const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const List = require("../models/list");
const { body, validationResult } = require("express-validator");

//route1   localhost:5000/api/list/fetchlist
router.get(
  "/fetchlist",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 1 }),
    body("description", "Enter a valid description").isLength({ min: 1 }),
  ],
  async (req, res) => {
      
    const lists = await List.find({ user: req.user.id });
    console.log(lists,"backend");;
    res.json(lists);
  }
);

//route2 localhost:5000/api/list/addlist
router.post(
  "/addlist",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 1 }),
    body("description", "Enter a valid description").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const { title, description, checked } = req.body;
      //if there are errors, returns bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const list = new List({
        title,
        description,
        checked,
        user: req.user.id,
      });
      const savedlist = await list.save();
      res.json(savedlist);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//route3  localhost:5000/api/list/updatelist:id
router.put("/updatelist/:id", fetchuser, async (req, res) => {
  const { title, description,checked} = req.body;

  try {
    //Create a newlist object
    const newlist = {};

    if (title) {
      newlist.title = title;
    }
    if (description) {
      newlist.description = description;
    }
        if(checked!==undefined )
        {
           newlist.checked = checked;
        }
      

    //Find the list to be updated and update it
    let list = await List.findById(req.params.id);
    if (!list) {
      res.status(404).send("Not Found");
    }

    if (list.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    list = await List.findByIdAndUpdate(
      req.params.id,
      { $set: newlist },
      { new: true }
    );
    
    console.log({list});
    res.json({ list });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//route4 delete an existing list using:DELETE  localhost:5000/api/list/deletelist .Login reqd
router.delete("/deletelist/:id", fetchuser, async (req, res) => {
  try {
    //Find the list to be deleted and delete it
    let list = await List.findById(req.params.id);
    if (!list) {
      res.status(404).send("Not Found");
    }

    //Allow deletion only if user owns the list
    if (list.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    list = await list.findByIdAndDelete(req.params.id);
    res.json({ Success: "list has been deleted", list: list });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});



module.exports = router;