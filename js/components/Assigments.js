import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js";

export default {
  components: { AssigmentList, AssigmentCreate },
  template: `
      <section class="flex gap-8">
          <!-- Menggunakan slot untuk memasukkan komponen AssigmentCreate ke dalam AssigmentList -->
          <AssigmentList title="In Progress" :assigments="filters.inProgress">
            <AssigmentCreate @addFromChild="addAssigment" class="mt-6"></AssigmentCreate>
          </AssigmentList>
          <!-- Menggunakan properti 'toggle' untuk menampilkan tombol close di dalam AssigmentList -->
          <AssigmentList title="Complete" :assigments="filters.complete" toggle></AssigmentList>
          </section>
      `,
  data() {
    return {
      assigments: [],
    };
  },

  created() {
    fetch("http://localhost:3001/assigments").then((response) =>
      response.json().then((data) => {
        this.assigments = data;
      })
    );
  },
  methods: {
    addAssigment(nameAssigment) {
      this.assigments.push({
        name: nameAssigment,
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
