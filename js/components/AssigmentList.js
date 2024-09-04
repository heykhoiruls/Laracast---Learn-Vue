import Assigment from "./Assigment.js";

export default {
  components: { Assigment },
  template: `
    <section v-if="assigments.length" class="border border-white rounded-xl p-4">
        <div class="flex justify-between items-center">
          <h2 class="font-bold">{{ title }}</h2>
          <p class="text-white">{{assigments.length}}</p>
        </div>

        <!-- membuat daftar tag dengan menggunakan perulangan -->
        <div class="flex gap-2 mt-4 mb-6" >
        <button 
            @click="currentTag = tag"
            v-for="tag in tags" 
            class="text-white border border-white rounded px-2 py-1 text-xs"
          >
            {{tag}}
          </button>
        </div>
      

        <ul class="mt-2">
            <!-- membuat assigment dengan hasil filter pada saat memilih tag -->
            <Assigment      
                v-for="assigment in filterAssigment"
                :key="assigment.id"
                :assigment="assigment"
            >
            </Assigment>
        </ul>
    </section>
    `,
  props: {
    assigments: Array,
    title: String,
  },
  data() {
    return {
      // nilai awal dari tag adalah all
      currentTag: "all",
    };
  },
  computed: {
    tags() {
      // this.assigments.map({}). fungsi map adalah untuk membuat daftar
      // new Set(). fungsi set adalah untuk membuat list menjadi unik secara sederhananya adalah menghapus nilai duplikat
      // untuk menampilkan semua data buatlah return data array dengan tag mengunakan separator (...)
      return ["all", ...new Set(this.assigments.map((a) => a.tag))];
    },
    filterAssigment() {
      // jika tag yang dipilih all maka akan memunculkan semua data tanpa kondisi saat memfilter
      if (this.currentTag == "all") {
        return this.assigments.filter((a) => a.tag);
      }
      // this.assigments.filter({}). fungsi ini untuk menfilter data pada list
      return this.assigments.filter((a) => a.tag == this.currentTag);
    },
  },
};
