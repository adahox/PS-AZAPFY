import { Modules, Router } from 'hire-framework'
import { routes } from '../routes';
import App from './app.component';

@Modules({
    imports: [
        Router.handle(routes)
    ],
    bootstrap: [App]
})
export class AppModule { }