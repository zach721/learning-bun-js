
import {json} from './api'


export default {
    port: 3000,
    fetch(request) {
      return new Response(JSON. stringify(json));
    },
  };
  console.log('bun is running now...')


