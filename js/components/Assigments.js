import AssigmentList from "./AssigmentList.js";

export default {
  components: { AssigmentList },
  template: `
        <section class="space-y-4">
          <AssigmentList title="In Progress" :assigments="filters.inProgress"></AssigmentList>
          <AssigmentList title="Complete" :assigments="filters.complete"></AssigmentList>
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
  computed: {
    filters() {
      return {
        inProgress: this.assigments.filter((a) => !a.complete),
        complete: this.assigments.filter((a) => a.complete),
      };
    },
  },
};
