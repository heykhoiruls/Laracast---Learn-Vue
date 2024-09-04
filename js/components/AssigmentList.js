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
      
        <!-- Menggunakan v-model untuk membuat binding dua arah antara properti 'currentTag' di komponen ini dan 'modelValue' di komponen AssigmentTags -->
        <!-- Kita bisa menggunakan v-model dengan nama properti kustom, seperti v-model:currentTag="currentTag" -->

        <AssigmentTags
          v-model="currentTag"
          :initialTags="assigments.map(a => a.tag)" 
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
