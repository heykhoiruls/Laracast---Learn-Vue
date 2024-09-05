export default {
  template: `
        <div :class="{'rounded-xl p-4 border':true,
        'bg-gray-900 border-white':theme == 'dark',
        'bg-white text-black border-red':theme == 'light',
    }">
        <!-- Slot untuk heading, jika ada konten dengan nama 'heading' akan di-render di sini -->
        <h2 v-if="$slots.heading" class="font-bold mb-4">
            <slot name="heading"/>
        </h2>

        <!-- Default slot, menampilkan konten default jika tidak ada nama slot tertentu -->
        <div v-if="$slots.default" class="text-sm">
            <slot/>
        </div>

        <!-- Slot untuk footer, jika ada konten dengan nama 'footer' akan di-render di sini -->
        <footer v-if="$slots.footer" class="border-gray-600 border-t text-xs mt-2 pt-4">
            <slot name="footer"/>
        </footer>
        </div>
    `,
  props: {
    theme: {
      type: String,
      default: "dark",
    },
  },
};
