const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection
/*const pool = new Pool({
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'root@123',
        database: 'leads_database'
});  */

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.post('/api/check', async (req, res) => {
  const phone = req.headers['phone'];

  if (!phone) {
    return res.status(400).json({ error: 'Missing phone in headers.' });
  }

  try {
    const result = await pool.query(
      `
      SELECT 'success' AS source FROM success_leads WHERE phone = $1
      UNION
      SELECT 'failure' AS source FROM failure_leads WHERE phone = $1
      LIMIT 1
      `,
      [phone]
    );

    if (result.rows.length > 0) {
      const foundIn = result.rows[0].source;
      return res.json({ status: `exists_in_${foundIn}` });
    } else {
      return res.json({ status: 'not_found' });
    }
  } catch (err) {
    console.error('Database error:', err);
    return res.status(500).json({ error: 'Database error.' });
  }
});


app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
