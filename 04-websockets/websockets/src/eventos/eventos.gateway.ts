import {MessageBody, SubscribeMessage,ConnectedSocket, WebSocketGateway} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io';
@WebSocketGateway(8080,{
    cors:{
        origin: '*',
    },
    namespace : 'events'
})

export class EventosGateway{
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
        message,
        @ConnectedSocket()
        socket: Socket
    ){
        return{
            message,
            saludo :'Hola'
        }
    }
}