import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class LogInterceptors implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const dt = Date.now();

        return next.handle().pipe(tap(()=>{
            const request = context.switchToHttp().getRequest();
            console.log(`Execução levou: ${Date.now() - dt} milisegundos`);
        }));
    }
}