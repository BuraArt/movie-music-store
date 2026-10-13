const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'movie_music_store_db';

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

let db, mediaCollection;

async function connectDB() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log('✅ เชื่อมต่อ MongoDB สำเร็จ!');
    db = client.db(DB_NAME);
    mediaCollection = db.collection('media_items');
  } catch (error) {
    console.error('❌ เชื่อมต่อ MongoDB ล้มเหลว:', error);
  }
}
connectDB();

// API Endpoints
app.get('/api/media', async (req, res) => {
  try {
    const items = await mediaCollection.find().sort({ createdAt: -1 }).toArray();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
  }
});

app.post('/api/media', async (req, res) => {
  try {
    const { title, type, artist, price, rating } = req.body;
    if (!title || !type) {
      return res.status(400).json({ message: 'กรุณากรอกชื่อและประเภท' });
    }
    const newItem = {
      title,
      type,
      artist: artist || '-',
      price: Number(price) || 0,
      rating: Number(rating) || 5,
      createdAt: new Date()
    };
    const result = await mediaCollection.insertOne(newItem);
    res.status(201).json({ _id: result.insertedId, ...newItem });
  } catch (error) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' });
  }
});

app.delete('/api/media/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await mediaCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'ลบรายการสำเร็จ' });
  } catch (error) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการลบข้อมูล' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});