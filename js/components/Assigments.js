import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js";

export default {
  components: { AssigmentList, AssigmentCreate },
  template: `
        <section class="space-y-4 ">
          <AssigmentList title="In Progress" :assigments="filters.inProgress"></AssigmentList>
          <AssigmentList title="Complete" :assigments="filters.complete"></AssigmentList>
          <AssigmentCreate @addFromChild="addAssigment"></AssigmentCreate>
        </section>
    `,
  data() {
    return {
      // Inisialisasi daftar tugas dengan array kosong
      assigments: [],
    };
  },

  // created adalah salah satu lifecycle hook dalam Vue.js. Hook ini digunakan untuk melakukan operasi yang perlu dilakukan ketika komponen diinisialisasi tetapi sebelum komponen dirender ke DOM. link : https://learnvue.co/articles/vue-lifecycle-hooks-guide
  created() {
    // Mengambil data tugas dari API lokal yang disediakan oleh json-server
    // Jalankan json-server dengan perintah berikut di terminal: npx json-server db.json --port=3001
    // fetch adalah metode untuk melakukan permintaan HTTP secara asinkron, yang merupakan salah satu bentuk dari AJAX (Asynchronous JavaScript and XML). Di sini, fetch mengirimkan permintaan GET ke URL http://localhost:3001/assigments.
    fetch("http://localhost:3001/assigments").then((response) =>
      response.json().then((data) => {
        // Menyimpan data tugas ke dalam data komponen
        // console.log(data) untuk memunculkan data dengan format json pada konsol
        this.assigments = data;
      })
    );

    // Selain fetch, AJAX juga bisa dilakukan dengan berbagai metode lain seperti:
    // - XMLHttpRequest: Metode tradisional untuk melakukan permintaan HTTP.
    // - Axios: Pustaka pihak ketiga berbasis Promises yang memudahkan permintaan HTTP.
    // - jQuery.ajax: Metode AJAX di jQuery yang menyediakan antarmuka sederhana.
    // - SuperAgent: Pustaka lain untuk permintaan HTTP dengan API berbasis Promises.

    // Untuk informasi lebih lanjut tentang AJAX dan berbagai metode yang tersedia,
    // Anda bisa merujuk ke dokumentasi dan tutorial berikut:
    // - [MDN Web Docs: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
    // - [Axios GitHub Repository](https://github.com/axios/axios)
    // - [jQuery AJAX Documentation](https://api.jquery.com/jquery.ajax/)
    // - [SuperAgent Documentation](https://visionmedia.github.io/superagent/)
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
