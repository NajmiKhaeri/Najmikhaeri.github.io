<template>
  <div class="container mx-auto p-8">
    <div class="text-center">
      <h1 class="text-3xl font-semibold mb-4">Contact Us</h1>
      <p class="text-gray-500">Saya percaya bahwa komunikasi adalah kunci untuk kesuksesan. Jika Anda memiliki pertanyaan atau ingin berbicara lebih lanjut, saya siap dihubungi melalui sosial media dibawah ini :</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div class="flex items-center justify-center bg-white rounded-lg p-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">Email</h2>
          <a href="mailto:najmikhaeriarrisaputra@gmail.com" class="text-blue-500 hover:underline">Email</a>
        </div>
      </div>

      <div class="flex items-center justify-center bg-white rounded-lg p-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">LinkedIn</h2>
          <a href="https://www.linkedin.com/in/najmikhaeriap" target="_blank" class="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </div>

      <!-- You can add more sections for other social media platforms -->

      <div class="flex items-center justify-center bg-white rounded-lg p-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">Telegram</h2>
          <a href="https://t.me/Najmi_Khaeri" target="_blank" class="text-blue-500 hover:underline">Telegram</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.bg-gray {
  background-color: #d1d5db; /* Warna abu-abu */
}

.rounded-lg {
  border-radius: 0.375rem; /* Sesuaikan kebutuhan */
}

.p-6 {
  padding: 1.5rem; /* Sesuaikan kebutuhan */
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.text-xl {
  font-size: 1.25rem; /* Sesuaikan kebutuhan */
}

.font-semibold {
  font-weight: 600;
}

.mb-4 {
  margin-bottom: 1rem; /* Sesuaikan kebutuhan */
}

.text-gray-500 {
  color: #6b7280;
}

.text-gray-600 {
  color: #4b5563;
}

.text-blue-500 {
  color: #3b82f6;
}

.hover\:underline:hover {
  text-decoration: underline;
}

/* Responsive styles */
@media (min-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
