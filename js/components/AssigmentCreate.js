export default {
  template: `
    <form @submit.prevent="addAssigment">
        <div class="flex space-x-2">
            <input focus v-model="newAssigment" type="text" placeholder="New Assigment" class="text-black px-4 py-2 rounded-lg" />
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg">add</button>
        </div>
    </form>
    `,
  data() {
    return {
      newAssigment: "",
    };
  },

  methods: {
    addAssigment() {
      this.$emit("addFromChild", this.newAssigment);
      this.newAssigment = "";
    },
  },
};
