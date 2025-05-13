const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/foodDelivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Payment schema and model
const paymentSchema = new mongoose.Schema({
    paymentMethod: String,
    cardNumber: String,
    cvv: String,
    expiryDate: String,
    timestamp: { type: Date, default: Date.now },
});
const Payment = mongoose.model('Payment', paymentSchema);

// Payment submission route
app.post('/submit-payment', async (req, res) => {
    try {
        const paymentData = req.body;
        console.log('Received payment data:', paymentData); // Debugging log

        // Validate payment data
        if (!paymentData.paymentMethod) {
            return res.status(400).json({ message: 'Payment method is required.' });
        }

        if (paymentData.paymentMethod === 'card') {
            if (!paymentData.cardNumber || !paymentData.cvv || !paymentData.expiryDate) {
                return res.status(400).json({ message: 'Card details are incomplete.' });
            }
        }

        // Save payment data to MongoDB
        const payment = new Payment(paymentData);
        await payment.save();
        console.log('Payment saved to database:', payment); // Debugging log

        res.status(200).json({ message: 'Payment is successful!' });
    } catch (error) {
        console.error('Error saving payment:', error); // Debugging log
        res.status(500).json({ message: 'Payment failed. Please try again.' });
    }
});

// Default route for testing
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
