import axios from 'axios'

const instance = axios.create({ baseURL: 'https://api.mercadolibre.com/' })

instance.interceptors.request.use(request => {
  return request
})

export default instance
