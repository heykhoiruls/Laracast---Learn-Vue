export default {
  template: `
    <div class="flex gap-2 mt-4 mb-6">
      <button 
        @click="$emit('update:modelValue', tag)"                  
        v-for="tag in tags"
        class="text-white border border-white rounded px-2 py-1 text-xs"
        :class="{          
           'bg-white text-black transition ease-in-out duration-300': tag === modelValue
        }"
      >
        {{ tag }}
      </button>
    </div>
 `,
  props: {
    initialTags: Array,
    modelValue: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
