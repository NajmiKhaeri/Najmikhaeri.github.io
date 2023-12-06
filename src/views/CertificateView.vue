<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Sertifikat</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            <div v-for="item in items" :key="item.id">
              <div
                class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5 "
                @click="openModal(item)">
                <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                  <img alt="Certificate" loading="lazy" decoding="async" data-nimg="1"
                    class="drop-shadow-xl rounded rounded-xl"
                    :src="'/img/' + item.imageUrl + '.png'">
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                  <div class="title-text font-medium text-secondary">{{ item.name }}</div>
                  <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">{{ item.status }}
                  </div>
                  <div class="w-full mt-4 text-normal text-sm text-left text-amber-200">{{ item.tech }}</div>
                  <div class="w-full flex justify-end">
                    <div class="flex cursor-pointer items-end gap-2 text-primary">
                      <a v-if="item.github !== 'null'" :href="item.github" target="_blank" rel="noreferrer"
                        title="View github repository" class="transition-all hover:text-accent">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                          stroke-linecap="round" stroke-linejoin="round" height="16" width="16"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg>
                      </a>
                      <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                        title="View finished project" class="transition-all hover:text-accent">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                          stroke-linecap="round" stroke-linejoin="round" height="18" width="18"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Tambahkan modal untuk menampilkan gambar sertifikat -->
      <div v-if="modalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
        <div class="bg-white p-8 max-w-md mx-auto rounded-lg">
          <img :src="'/img/' + selectedItemImageUrl + '.png'" alt="Certificate Image"
            class="w-full h-full object-contain rounded-lg">
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: 'Sertifikat 1',
          imageUrl: 'sertif-1',
          status: 'Sertifikat Cybersecurity Training Sub - batch 3 2021 oleh Infradigital Foundation.',
          github: 'null',
          demo: 'null'
        },
        {
          id: 2,
          name: 'Sertifikat 2',
          imageUrl: 'sertif-2',
          status: 'Sertifikat Ready4Security - Indonesian Training oleh Infradigital Foundation.',
          github: 'null',
          demo: 'null'
        },
      ],
      modalOpen: false,
      selectedItemImageUrl: '',
    };
  },
  methods: {
    openModal(item) {
      this.modalOpen = true;
      this.selectedItemImageUrl = item.imageUrl;
    },
    closeModal() {
      this.modalOpen = false;
      this.selectedItemImageUrl = '';
    },
  },
};
</script>

<style scoped>
/* Gaya lainnya tetap sama seperti sebelumnya */

/* Gaya untuk elemen modal */
.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.75);
}

.bg-opacity-80 {
  background-color: rgba(0, 0, 0, 0.8);
}

.bg-white {
  background-color: #ffffff;
}

.p-8 {
  padding: 2rem;
}

.max-w-md {
  max-width: 28rem;
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.cursor-pointer {
  cursor: pointer;
}

.absolute {
  position: absolute;
}

.top-4 {
  top: 1rem;
}

.right-4 {
  right: 1rem;
}

.text-gray-500 {
  color: #6b7280;
}

.h-6 {
  height: 1.5rem;
}

.w-6 {
  width: 1.5rem;
}

/* Animasi fade untuk modal */
@keyframes fadeZoomInModal {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menggunakan animasi pada elemen modal */
.fade-zoom-in-modal {
  animation: fadeZoomInModal 0.5s ease-in-out;
}
</style>
