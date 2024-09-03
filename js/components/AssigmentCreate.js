export default {
  template: `
    <form @submit.prevent="addAssigment">
        <div class="flex space-x-2">
            <!-- Input untuk nama tugas baru -->
            <input focus v-model="newAssigment" type="text" placeholder="New Assigment" class="text-black px-4 py-2 rounded-lg" />
            <!-- Tombol untuk menambah tugas -->
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg">add</button>
        </div>
    </form>
    `,
  data() {
    return {
      // Variabel untuk tugas baru yang akan ditambahkan
      newAssigment: "",
    };
  },
  //   Variabel untuk tugas baru yang akan ditambahkan dengan menggunakan emit
  methods: {
    addAssigment() {
      // Memberikan (emit) event 'addFromChild' ke komponen parent (Assigments.js) dengan mengirimkan nilai newAssigment
      this.$emit("addFromChild", this.newAssigment);
      // Mengosongkan input setelah tugas ditambahkan
      this.newAssigment = "";
    },
  },

  //   Variabel untuk tugas baru yang akan ditambahkan dengan menggunakan props
  //   jika ingin menggunakan props, parent nya sama dengan Episode 8 - Handle a Form Submission

  //   props: {
  //     assigments: Array,
  //   },

  //   methods: {
  //     addAssigment() {
  //       this.assigments.push({
  //         // Mengambil nama tugas dari input pengguna
  //         name: this.newAssigment,
  //         // Status tugas baru selalu tidak selesai saat ditambahkan
  //         complete: false,
  //         // Memberikan ID unik berdasarkan panjang daftar tugas
  //         id: this.assigments.length + 1,
  //       });
  //       // Mengosongkan input setelah tugas ditambahkan
  //       this.newAssigment = "";
  //     },
  //   },
};
