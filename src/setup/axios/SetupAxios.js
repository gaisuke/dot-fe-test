export default function setupAxios(axios, store) {
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
  axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
  axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  //axios.defaults.headers.common['key'] = 'f6542dedd3c82849d0e33a16614145ee'

  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: {accessToken},
      } = store.getState()

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (err) => Promise.reject(err)
  )
}
