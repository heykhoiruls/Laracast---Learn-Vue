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
        { name: "Project 1", complete: false, id: 1, tag: "math" },
        { name: "Test 3", complete: false, id: 2, tag: "reading" },
        { name: "Final Exam", complete: false, id: 3, tag: "math" },
      ],
    };
  },
  methods: {
    addAssigment(nameAssigment) {
      // this.assigments.push({...}); fungsi push adalah untuk memasukan item ke dalam daftar
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
