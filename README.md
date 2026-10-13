<img width="1881" height="945" alt="Screenshot 2026-10-13 194529" src="https://github.com/user-attachments/assets/ba7e3985-c4a0-4a72-b6a5-fb97c8f4701e" />

# Mini Project #2: Movie & Music Store Collection

## สมาชิกกลุ่ม
| รหัสนักศึกษา | ชื่อ-นามสกุล |
| :--- | :--- |
| 660910668 | นายบูรณ์ภัทร์ บุญสูขเกิด |

เว็บแอปพลิเคชันระบบร้านค้า/คอลเลกชันหนังและเพลง พัฒนาด้วย Node.js, Express และเชื่อมต่อกับฐานข้อมูล MongoDB

## โครงสร้างโปรเจกต์
- `/server`: โค้ดฝั่งเซิร์ฟเวอร์ (Node.js, Express, MongoDB)
- `/public`: โค้ดฝั่งไคลเอนต์ (HTML, CSS, JavaScript)

## รายการ Endpoints ทั้งหมด
- `GET /api/media` - ดึงข้อมูลหนังและเพลงทั้งหมด
- `POST /api/media` - เพิ่มรายการหนังหรือเพลงใหม่ลงฐานข้อมูล
- `DELETE /api/media/:id` - ลบรายการตาม ID


เว็บแอปพลิเคชันระบบร้านค้า/คอลเลกชันหนังและเพลง พัฒนาด้วย Node.js, Express และเชื่อมต่อกับฐานข้อมูล MongoDB

## โครงสร้างโปรเจกต์
```text
movie-music-store/
├── server/
│   └── server.js         # เซิร์ฟเวอร์และ API Endpoints (Node.js, Express, MongoDB)
├── public/
│   ├── index.html        # หน้าเว็บ HTML ฝั่ง Frontend
│   ├── style.css         # จัดแต่งหน้าตาเว็บ (Neon & Colorful Theme)
│   └── app.js            # จัดการการทำงานฝั่งไคลเอนต์และดึงข้อมูล API
├── .env                  # ตัวแปรสภาพแวดล้อม (Port และ MongoDB URI)
├── .gitignore            # ไฟล์ที่ไม่ต้องการให้ Git ติดตาม (เช่น node_modules, .env)
├── package.json          # จัดการแพ็กเกจและ Dependencies
├── README.md             # รายละเอียดโปรเจกต์และวิธีใช้งาน
├── debug-1.png           # ภาพหลักฐานการดีบักการเชื่อมต่อเซิร์ฟเวอร์
└── debug-2.png           # ภาพหลักฐานการทำงานของหน้าเว็บและการเรียก API     

## วิธีติดตั้ง (Installation)
```bash
npm install
