export default {
  template: `
    <div class="flex gap-2 mt-4 mb-6">
      <button 
        // Memancarkan event change dengan nilai tag yang dipilih
        @click="$emit('change', tag)"                  
        v-for="tag in tags"
        class="text-white border border-white rounded px-2 py-1 text-xs"
        :class="{          
            // Membuat kondisi untuk tag yang aktif
           'bg-white text-black transition ease-in-out duration-300': tag === currentTag
        }"
      >
        {{ tag }}
      </button>
    </div>
 `,
  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
