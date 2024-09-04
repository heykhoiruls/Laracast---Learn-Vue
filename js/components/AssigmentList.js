import Assigment from "./Assigment.js";
import AssigmentTags from "./AssigmentTags.js";

export default {
  components: { Assigment, AssigmentTags },
  template: `
  <!-- Menampilkan bagian jika 'show' bernilai true dan ada tugas dalam daftar -->
    <section v-if="show && filterAssigment.length" class="border border-white rounded-xl p-4 w-96">
        <div class="flex justify-between items-center">
          <h2 class="font-bold">{{ title }} 
            <span class="text-white">({{filterAssigment.length}})</span>
          </h2>
          <!-- Tombol untuk menyembunyikan section dengan mengubah nilai 'show' jika 'toggle' true -->
          <button class="text-white" v-if="toggle" @click="show = false">&times</button>
        </div>

        <AssigmentTags
          v-model="currentTag"
          :initialTags="assigments.map(a => a.tag)" 
        />

        <ul class="mt-2">
            <div>
            <Assigment      
                v-for="assigment in filterAssigment"
                :key="assigment.id"
                :assigment="assigment"
            >
            </Assigment>
            </div>
             <!-- Menggunakan slot untuk menyisipkan konten tambahan dari parent -->
            <slot></slot>
        </ul>
    </section>
    `,
  props: {
    assigments: Array,
    title: String,
    // Flag 'toggle' digunakan untuk menentukan apakah tombol untuk menyembunyikan section akan ditampilkan
    toggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentTag: "all",
      // 'show' digunakan untuk mengontrol visibilitas dari section ini
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

// Assigments.js

// Penjelasan tentang penggunaan slot dan flags:
// 1. Slot: Slot digunakan untuk memungkinkan parent mengirimkan konten tambahan ke child komponen.
//    Di sini, slot memungkinkan komponen 'AssigmentCreate' ditambahkan ke dalam 'AssigmentList' pada tempat yang diinginkan.
// 2. Flags (toggle): Flag 'toggle' digunakan sebagai boolean props untuk mengontrol visibilitas tombol close (&times).
//    Dengan adanya props ini, komponen dapat mengatur tampilan dengan lebih fleksibel sesuai kebutuhan.
