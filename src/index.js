const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 10000;

// Middleware
// CORS allows your React frontend (on a different URL) to safely talk to this backend
app.use(cors({ origin: '*' })); 
app.use(express.json());

// --- MOCK AUTHENTICATION (For Phase 2 Testing) ---
// Since we haven't built the full JWT login system yet, we will use a 
// hardcoded Demo Tenant ID so you can test creating and reading data.
const DEMO_TENANT_ID = "demo-tenant-12345";

// --- API ENDPOINTS ---

// 1. Health Check (To make sure server is alive)
app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Agentic CRM API is running! 🚀' });
});

// 2. GET all Contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      where: { tenantId: DEMO_TENANT_ID },
      orderBy: { createdAt: 'desc' }
    });
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// 3. POST a new Contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, companyName } = req.body;
    
    const newContact = await prisma.contact.create({
      data: {
        firstName: firstName || "New",
        lastName: lastName || "User",
        email: email,
        phone: phone || "",
        tenantId: DEMO_TENANT_ID, // Assigning to our demo tenant
        customFields: { companyName: companyName || "Unknown" }
      }
    });
    
    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

// 4. GET all Companies
app.get('/api/companies', async (req, res) => {
  try {
    const companies = await prisma.company.findMany({
      where: { tenantId: DEMO_TENANT_ID },
      orderBy: { createdAt: 'desc' }
    });
    res.json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
