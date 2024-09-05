import Assigment from "./Assigment.js";
import AssigmentTags from "./AssigmentTags.js";
import Panel from "./Panel.js";

export default {
  components: { Assigment, AssigmentTags, Panel },
  template: `
    <!-- Menggunakan komponen Panel dengan Named Slot -->
    <Panel v-if="show && filterAssigment.length" class="w-96">
    <!-- Slot bernama 'heading', yang mengisi bagian heading dalam komponen Panel -->
        <template #heading>
              from heading
        </template>
          <!-- Konten dinamis yang dapat diubah oleh parent -->
        <div class="flex justify-between items-center">
          <h2 class="font-bold">{{ title }} 
            <span class="text-white">({{filterAssigment.length}})</span>
          </h2>
          <button class="text-white" v-if="toggle" @click="show = false">&times</button>
        </div>
        <!-- Slot untuk komponen AssigmentTags dengan binding data -->
        <AssigmentTags
          v-model="currentTag"
          :initialTags="assigments.map(a => a.tag)" 
        />
        <!-- Default slot untuk list assignment -->
        <ul class="mt-2">
            <div>
            <Assigment      
                v-for="assigment in filterAssigment"
                :key="assigment.id"
                :assigment="assigment"
            >
            </Assigment>
            </div>
            <!-- Default slot: menampilkan konten di bagian ini jika tidak ada nama slot tertentu -->
            <slot></slot>
        </ul>
    </Panel>
    `,
  props: {
    assigments: Array,
    title: String,
    toggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentTag: "all",
      show: true,
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
