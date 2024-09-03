export default {
    // Mendefinisikan template HTML untuk komponen 'app-button'
    template: `
      <!-- Template untuk komponen 'app-button' -->
      <!-- Tombol dengan styling menggunakan Tailwind CSS -->
      <button class="bg-blue-400 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-bold disabled:cursor-not-allowed"
      :disabled="processing">
        <!-- Konten tombol diambil dari slot -->
        <slot/>
      </button>
    `,
    
    // Mendefinisikan properti data reaktif untuk komponen ini
    data() {
      return {
        // Status 'processing' yang mengatur apakah tombol dalam keadaan dinonaktifkan
        processing: true,
      };
    }
  }
  