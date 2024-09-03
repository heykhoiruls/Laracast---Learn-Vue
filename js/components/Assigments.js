import AssigmentList from "./AssigmentList.js";

export default {
  components: { AssigmentList },
  template: `
        <section class="space-y-4 ">
          <AssigmentList title="In Progress" :assigments="filters.inProgress"></AssigmentList>
          <AssigmentList title="Complete" :assigments="filters.complete"></AssigmentList>
          <!-- Form untuk menambahkan tugas baru -->
          <!-- @submit.prevent="addAssigment" berarti, ketika form di-submit, Vue akan mencegah halaman dari reload dan langsung memanggil metode addAssigment untuk menambahkan tugas baru ke daftar. -->
          <form @submit.prevent="addAssigment">
            <div class="flex space-x-2">
              <!-- Input untuk nama tugas baru -->
              <input focus v-model="newAssigment" type="text" placeholder="New Assigment" class="text-black px-4 py-2 rounded-lg" />
              <!-- Tombol untuk menambah tugas -->
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg">add</button>
            </div>
          </form>
        </section>
    `,
  data() {
    return {
      // Variabel untuk tugas baru yang akan ditambahkan
      newAssigment: "",
      // Daftar tugas yang ada
      assigments: [
        { name: "Project 1", complete: false, id: 1 },
        { name: "Test 3", complete: false, id: 2 },
        { name: "Final Exam", complete: false, id: 3 },
      ],
    };
  },
  methods: {
    // Menambahkan tugas baru ke daftar tugas
    addAssigment() {
      this.assigments.push({
        // Mengambil nama tugas dari input pengguna
        name: this.newAssigment,
        // Status tugas baru selalu tidak selesai saat ditambahkan
        complete: false,
        // Memberikan ID unik berdasarkan panjang daftar tugas
        id: this.assigments.length + 1,
      });
      // Mengosongkan input setelah tugas ditambahkan
      this.newAssigment = "";
    },
  },
  computed: {
    filters() {
      return {
        inProgress: this.assigments.filter((a) => !a.complete),
        complete: this.assigments.filter((a) => a.complete),
      };
    },
  },
};
