
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      url: 'https://60ad4f1680a61f0017330b61.mockapi.io/usuariosDos',
      formData: this.getInicialData(),
      formState : {},
      nombreMinLength : 3,
      nombreMaxLength : 15,
      edadMin : 18,
      edadMax : 120
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    
    getInicialData(){
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    resetData(){
      this.formData = this.getInicialData()
      this.formState._reset()
    },

    async postUsuarioAsyncAwait(){
      try {
        let response = await this.axios.post(this.url,{...this.formData},{'content-type':'application/json'})
        console.log('POST USUARIO - ASYNC AWAIT', response.data)
        this.resetData()
      }
      catch(error) {
        console.error(error)
      }
    },

    postUsuarioThenCatch(){
      this.axios.post(this.url,{...this.formData},{'content-type':'application/json'})
      .then(response => {
        console.log('POST USUARIO - THEN CATCH', response.data)
        this.resetData()
      })
      .catch(error => console.error(error))
    }
  }
}


