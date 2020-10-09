import Echo from 'laravel-echo'
import socketio from 'socket.io-client'
/** Init Echo  */
const EchoInstance = new Echo({
  broadcaster: 'socket.io',
  host: 'http://192.168.109.132:6001/', // this is laravel-echo-server host
  client: socketio
})
export default EchoInstance
