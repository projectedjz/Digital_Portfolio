const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API Routes
app.get('/api/', (req, res) => {
  res.json({ 
    message: 'Hello from Express.js Portfolio API!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    service: 'portfolio-backend',
    timestamp: new Date().toISOString()
  });
});

// Portfolio data endpoints (mock data for now)
app.get('/api/projects', (req, res) => {
  res.json({
    year1: [
      {
        id: 1,
        title: 'E-Commerce Website',
        description: 'A full-featured e-commerce platform',
        technologies: ['React', 'Node.js', 'MongoDB']
      }
    ],
    year2: [
      {
        id: 1,
        title: 'Social Media Platform',
        description: 'A full-stack social media application',
        technologies: ['React', 'Express.js', 'MongoDB']
      }
    ]
  });
});

app.get('/api/certificates', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2024'
    }
  ]);
});

// Contact form endpoint (placeholder)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.json({ 
    success: true,
    message: 'Thank you for your message! I will get back to you soon.' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found` 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message 
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`
✨ Portfolio Express.js Server is running!
`);
  console.log(`🚀 Server listening on http://0.0.0.0:${PORT}`);
  console.log(`📡 API endpoints available at http://0.0.0.0:${PORT}/api/`);
  console.log(`⏰ Started at ${new Date().toISOString()}\n`);
});

module.exports = app;
