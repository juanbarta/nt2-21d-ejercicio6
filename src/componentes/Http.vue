<template>
  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>GET desde mockapi.io</h2>
      <br />
      <br />
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosThenCatch()">Pedir Then Catch</button>

      <button class="btn btn-success my-3 mr-3" @click="getUsuariosAsyncAwait()">Pedir Async Await</button>


      <div v-if="users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col, index) in getCols" :key="index">{{ col.toUpperCase() }}</th>
          </tr>
          <tr v-for="(user, index) in users" :key="index">
            <td v-for="(col, index) in getCols" :key="index">
              {{ user[col] }}
            </td>
          </tr>
        </table>
        <h4 class="alert alert-success">
          Se encontraron {{ users.length }} usuarios
        </h4>
      </div>
      <h4 v-else class="alert alert-warning">No se encontraron usuarios</h4>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {
      this.getUsuariosAsyncAwait()
    },
    data () {
      return {
          url: 'https://60ad4f1680a61f0017330b61.mockapi.io/usuariosDos',
          users: []
      }
    },
    methods: {
      async getUsuariosAsyncAwait() {
        try {
          let response = await this.axios(this.url)
          console.log('GET USUARIOS - ASYNC AWAIT', response.data)
          this.users = response.data
        }
        catch(error) {
          console.error(error)
        }
      },

      getUsuariosThenCatch(){
        this.axios(this.url)
        .then(response =>{
            console.log('GET USUARIOS - THEN CATCH', response.data)
            this.users = response.data
        })
        .catch(error => console.error(error))
      }

    
    },
    computed: {
      getCols(){
        return Object.keys(this.users[0])
      }
    }
}

</script>

<style scoped lang="css">
.src-componentes-http {
}

.jumbotron {
  background-color: #f4d4cca1;
  text-align: justify;
}

h2 {
  font-weight: bold;
  text-align: center;
}
</style>
