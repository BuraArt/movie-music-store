สมาชิกกลุ่ม
| รหัสนักศึกษา | ชื่อ-นามสกุล | | 660910668 | นายบูรณ์ภัทร์ บุญสูขเกิด |

# Mini Project #2: Movie & Music Store Collection

เว็บแอปพลิเคชันระบบร้านค้า/คอลเลกชันหนังและเพลง เชื่อมต่อฐานข้อมูล MongoDB

## โครงสร้างโปรเจกต์
- `/server`: โค้ดฝั่งเซิร์ฟเวอร์ (Node.js, Express, MongoDB)
- `/public`: โค้ดฝั่งไคลเอนต์ (HTML, CSS, JavaScript)

## รายการ Endpoints ทั้งหมด
- `GET /api/media` - ดึงข้อมูลหนังและเพลงทั้งหมด
- `POST /api/media` - เพิ่มรายการหนังหรือเพลงใหม่ลงฐานข้อมูล
- `DELETE /api/media/:id` - ลบรายการตาม ID

## วิธีติดตั้ง (Installation)
```bash
npm install
