import Assigments from "./Assigments.js";
import Panel from "./Panel.js";

export default {
  components: { Assigments, Panel },
  template: `
        <div class="grid gap-4">
          <Assigments></Assigments>
         
          <!-- Menggunakan komponen Panel dengan Named Slot -->
          <Panel>
            <!-- Ini adalah konten default slot yang akan di-render di dalam default slot Panel -->
            this is my default .
            
            <!-- Slot bernama 'footer', konten akan di-render di dalam slot footer di Panel -->
            <template v-slot:footer>
              from footer
            </template>
          </Panel>

          <!-- Menggunakan komponen Panel dengan props 'theme' yang diberi nilai 'light' -->
          <Panel theme="light">
            <template v-slot:heading>
              from heading with theme light
            </template> 
            <template v-slot:footer>
              from footer
            </template>
          </Panel>
        </div>
    `,
};
