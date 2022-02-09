import {MessageBody, SubscribeMessage,ConnectedSocket, WebSocketGateway} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io';
@WebSocketGateway(8080,{
    cors:{
        origin: '*',
    },
})

export class EventosGateway{
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
        message,
        @ConnectedSocket()
        socket: Socket
    ){
        socket.broadcast
            .emit(
                'escucharEventoHola',
                {
                    mensaje:'Bienvenido Bryan'
                }
            );
        console.log(socket.id)
        return 'ok';
    }
}