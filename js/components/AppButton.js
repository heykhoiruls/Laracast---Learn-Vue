export default {
  // Mendefinisikan template HTML untuk komponen 'app-button'
  template: `
      <!-- Template untuk komponen 'app-button' -->
      <button :class="{
      'px-5 py-2 rounded-full font-bold disabled:cursor-not-allowed': true,
      'bg-blue-400 hover:bg-blue-600 text-white': type === 'primary',
      'bg-green-400 hover:bg-green-600 text-white': type === 'secondary',
      'bg-gray-400 hover:bg-gray-600 text-white': type === 'muted',
      'is-loading': processing,
         
      }"
      :disabled="processing">
        <!-- Konten tombol diambil dari slot -->
        <slot/>
      </button>
    `,

  props: {
    // Mendefinisikan properti 'type' yang mengatur tipe tombol
    type: {
      type: String,
      default: "primary",
    },
    // Mendefinisikan properti 'processing' yang mengatur status tombol
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
