import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js";

export default {
  components: { AssigmentList, AssigmentCreate },
  template: `
        <section class="space-y-4 ">
          <AssigmentList title="In Progress" :assigments="filters.inProgress"></AssigmentList>
          <AssigmentList title="Complete" :assigments="filters.complete"></AssigmentList>
          <!-- Mendengarkan event 'addFromChild' yang dikirimkan dari komponen child (AssigmentCreate.js) dan memanggil metode addAssigment -->
          <AssigmentCreate @addFromChild="addAssigment"></AssigmentCreate>
        </section>
    `,
  data() {
    return {
      assigments: [
        { name: "Project 1", complete: false, id: 1 },
        { name: "Test 3", complete: false, id: 2 },
        { name: "Final Exam", complete: false, id: 3 },
      ],
    };
  },
  methods: {
    // Fungsi untuk menambahkan tugas baru ke daftar
    // Mengambil nama tugas (nameAssigment) dari event yang diberikan oleh komponen child (AssigmentCreate.js)
    addAssigment(nameAssigment) {
      this.assigments.push({
        name: nameAssigment, // Menggunakan nama tugas yang diterima dari komponen child (AssigmentCreate.js)
        complete: false,
        id: this.assigments.length + 1,
      });
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
