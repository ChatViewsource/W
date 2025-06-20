const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

// تمكين CORS للاتصال مع الواجهة
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// تخزين الصور
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// بيانات مؤقتة
let posts = [
  { id: 1, user: "Ahmed", image: "default.jpg", likes: 0 }
];

// مسارات API
app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', upload.single('image'), (req, res) => {
  const newPost = {
    id: posts.length + 1,
    user: req.body.user || "مجهول",
    image: req.file ? req.file.filename : "default.jpg",
    likes: 0
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(PORT, () => {
  console.log(`الخادم يعمل على http://localhost:${PORT}`);
});
