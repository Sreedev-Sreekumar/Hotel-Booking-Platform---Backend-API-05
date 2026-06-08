const express = require("express");
const router = express.Router();
const db = require("../db");

// Create Booking
router.post("/", (req, res) => {

  const { user_id, room_id, check_in, check_out } = req.body;

  const sql =
    "INSERT INTO bookings (user_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [user_id, room_id, check_in, check_out],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Room Booked Successfully"
      });

    }
  );

});

// Get All Bookings
router.get("/", (req, res) => {

  db.query(
    "SELECT * FROM bookings",
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);

    }
  );

});

module.exports = router;