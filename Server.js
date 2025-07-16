// server.js

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // Replace with your MySQL username
  password: "",       // Replace with your MySQL password
  database: "gamayas" // Ensure this DB exists in your MySQL
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

// Create tables if not exist
const createContactTable = `CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  subject VARCHAR(255),
  message TEXT
)`;

db.query(createContactTable, (err) => {
  if (err) console.error("Error creating contacts table:", err);
});

const createFeedbackTable = `CREATE TABLE IF NOT EXISTS feedbacks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT
)`;

db.query(createFeedbackTable, (err) => {
  if (err) console.error("Error creating feedbacks table:", err);
});

// Routes
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  const sql = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error" });
    }
    res.json({ message: "Thank you for contacting us!" });
  });
});

app.post("/api/feedback", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO feedbacks (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error" });
    }
    res.json({ message: "Thanks for your feedback!" });
  });
});

// Admin route to get all feedback and contact entries
app.get("/api/admin/all-data", (req, res) => {
  const contactQuery = "SELECT * FROM contacts";
  const feedbackQuery = "SELECT * FROM feedbacks";

  db.query(contactQuery, (err, contactResults) => {
    if (err) return res.status(500).json({ message: "Error fetching contact data" });

    db.query(feedbackQuery, (err, feedbackResults) => {
      if (err) return res.status(500).json({ message: "Error fetching feedback data" });

      res.json({ contacts: contactResults, feedbacks: feedbackResults });
    });
  });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
