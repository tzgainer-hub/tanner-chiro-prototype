const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// HIPAA-safe callback request: accepts name/phone/best_time/topic ONLY.
// We deliberately do NOT collect health information here.
app.post('/api/inquire', (req, res) => {
  const { name, phone, best_time, topic } = req.body || {};
  if (!name || !phone) {
    return res.status(400).json({ ok: false, message: 'Name and phone are required.' });
  }
  console.log('Callback request:', JSON.stringify({ name, phone, best_time, topic, ts: new Date().toISOString() }, null, 2));
  // TODO: when GHL sub-account is provisioned for Tanner Chiropractic,
  // forward this payload to the Tanner GHL location via Private Integration token.
  // For now we just log; office staff can be notified via email integration once added.
  res.json({ ok: true, message: 'Thank you — the office will call you back shortly.' });
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// 404 — serve branded 404 page for unknown routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Tanner Chiropractic listening on port ${PORT}`);
});
