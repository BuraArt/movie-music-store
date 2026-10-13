const form = document.getElementById('media-form');
const mediaList = document.getElementById('media-list');

async function fetchMedia() {
  const res = await fetch('/api/media');
  const items = await res.json();
  render(items);
}

function render(items) {
  mediaList.innerHTML = '';
  if (items.length === 0) {
    mediaList.innerHTML = '<p>ยังไม่มีข้อมูลในระบบ</p>';
    return;
  }
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = `item-card ${item.type}`;
    card.innerHTML = `
      <button class="btn-delete" onclick="deleteItem('${item._id}')">ลบ</button>
      <span class="badge">${item.type === 'Movie' ? '🎬 หนัง' : '🎵 เพลง'}</span>
      <h3>${item.title}</h3>
      <p><strong>ศิลปิน/ผู้กำกับ:</strong> ${item.artist}</p>
      <p><strong>ราคา:</strong> ${item.price} บาท</p>
      <p><strong>คะแนน:</strong> ${'⭐'.repeat(item.rating)}</p>
    `;
    mediaList.appendChild(card);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newItem = {
    title: document.getElementById('title').value,
    type: document.getElementById('type').value,
    artist: document.getElementById('artist').value,
    price: document.getElementById('price').value,
    rating: document.getElementById('rating').value
  };

  await fetch('/api/media', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newItem)
  });

  form.reset();
  fetchMedia();
});

async function deleteItem(id) {
  if (confirm('ต้องการลบรายการนี้ใช่ไหม?')) {
    await fetch(`/api/media/${id}`, { method: 'DELETE' });
    fetchMedia();
  }
}

fetchMedia();