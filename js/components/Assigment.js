export default {
  template: `
    <li>
        <label>
            <input type="checkbox" v-model="assigment.complete" />
            {{ assigment.name }}
        </label>
    </li>
    `,
  props: {
    assigment: Object,
  },
};
