<template>
  <div class="container mx-auto p-8">
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-3 text-white">Hubungi Saya</h1>
      <p class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">Saya percaya bahwa komunikasi adalah kunci untuk kesuksesan. Jika Anda memiliki pertanyaan atau ingin berbicara lebih lanjut, saya siap dihubungi melalui sosial media dibawah ini :</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-1">
      <div class="flex items-center justify-center p-6 shadow-md">
        <div>
          <h2 class="text-white font-bold mb-1">Email</h2>
          <a href="mailto:najmikhaeriarrisaputra@gmail.com" class="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
            <i class="fas fa-envelope mr-2"></i>
          </a>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1" @click="openEmail">
            <i class="fas fa-envelope mr-2"></i>
            Hubungi Saya via Email
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center p-6 shadow-md">
        <div>
          <h2 class="text-white font-bold mb-1">LinkedIn</h2>
          <a href="https://www.linkedin.com/in/najmikhaeriap" target="_blank" class="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
            <i class="fab fa-linkedin mr-2"></i>
          </a>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1" @click="openLinkedIn">
            <i class="fab fa-linkedin mr-2"></i>
            Hubungi Saya via LinkedIn
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center p-6 shadow-md">
        <div>
          <h2 class="text-white font-bold mb-1">Telegram</h2>
          <a href="https://t.me/Najmi_Khaeri" target="_blank" class="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
            <i class="fab fa-telegram mr-2"></i>
          </a>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1" @click="openTelegram">
            <i class="fab fa-telegram mr-2"></i>
            Hubungi Saya via Telegram
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  methods: {
    openEmail() {
      window.location.href = 'mailto:najmikhaeriarrisaputra@gmail.com';
    },
    openLinkedIn() {
      window.open('https://www.linkedin.com/in/najmikhaeriap', '_blank');
    },
    openTelegram() {
      window.open('https://t.me/Najmi_Khaeri', '_blank');
    }
  }
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

.p-6 {
  padding: 1.5rem;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.text-2xl {
  font-size: 1.5rem;
}

.font-bold {
  font-weight: 700;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-gray-500 {
  color: #6b7280;
}

.text-blue-600 {
  color: #3498db;
}

.text-blue-800 {
  color: #2e4053;
}

.hover\:text-blue-800:hover {
  color: #2e4053;
}

.transition {
  transition: all 0.3s ease-in-out;
}

.duration-300 {
  transition-duration: 300ms;
}

.ease-in-out {
  transition-timing-function: ease-in-out;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
