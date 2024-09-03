import Assigment from "./Assigment.js";

export default {
  components: { Assigment },
  template: `
    <section v-show="assigments.length">
        <h2 class="font-bold">{{ title }}</h2>
        <ul class="mt-2">
            <Assigment 
                v-for="assigment in assigments"
                :key="assigment.id"
                :assigment="assigment"
            >
            </Assigment>
        </ul>
    </section>
    `,
  props: {
    assigments: Array,
    title: String,
  },
};
