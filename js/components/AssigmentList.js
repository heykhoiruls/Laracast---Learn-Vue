import Assigment from "./Assigment.js";
import AssigmentTags from "./AssigmentTags.js";

export default {
  components: { Assigment, AssigmentTags },
  template: `
    <section v-if="filterAssigment.length" class="border border-white rounded-xl p-4">
        <div class="flex justify-between items-center">
          <h2 class="font-bold">{{ title }}</h2>
          <p class="text-white">{{filterAssigment.length}}</p>
        </div>
        <!-- membuat komponen AssigmentTags -->
        <AssigmentTags
          // Mengirimkan daftar tag ke komponen child AssigmentTags
          :initialTags="assigments.map(a => a.tag)"
          // Mengirimkan tag yang dipilih saat ini ke komponen child AssigmentTags
          :currentTag="currentTag" 
          // Mendengarkan event change yang dipancarkan oleh komponen child AssigmentTags
          @change="currentTag = $event"             
        />      
        <ul class="mt-2">
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
      currentTag: "all",
    };
  },
  computed: {
    filterAssigment() {
      if (this.currentTag == "all") {
        return this.assigments.filter((a) => a.tag);
      }
      return this.assigments.filter((a) => a.tag == this.currentTag);
    },
  },
};
