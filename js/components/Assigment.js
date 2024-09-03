export default {
  template: `
    <li>
        <label class="flex items-center justify-between">
            {{ assigment.name }}
            <input type="checkbox" v-model="assigment.complete" />
        </label>
    </li>
    `,
  props: {
    assigment: Object,
  },
};
