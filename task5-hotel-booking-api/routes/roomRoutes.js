const express = require("express");
const router = express.Router();
const db = require("../db");

// Create Room
router.post("/", (req, res) => {

  const { room_name, price, description } = req.body;

  const sql =
    "INSERT INTO rooms (room_name, price, description) VALUES (?, ?, ?)";

  db.query(
    sql,
    [room_name, price, description],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Room Added Successfully"
      });

    }
  );

});

// Get All Rooms
router.get("/", (req, res) => {

  db.query(
    "SELECT * FROM rooms",
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);

    }
  );

});

module.exports = router;