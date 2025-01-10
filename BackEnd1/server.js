const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// MongoDB Atlas Connection String
const MONGO_URI =
  "mongodb+srv://animsara04:5yEczUERiMXfCSYP@anuja.obs6t.mongodb.net/?retryWrites=true&w=majority&appName=Anuja";

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
  });

// Define a Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

// API Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Create a new contact
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: "Error saving contact" });
  }
});

// Fetch all contacts
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching contacts" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


