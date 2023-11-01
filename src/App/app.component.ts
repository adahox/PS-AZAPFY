import { Component } from 'hire-framework';
import AppComponentTemplate from './app.html';

@Component({
    selector: 'azapfy-app',
    templateUrl: AppComponentTemplate
})
export default class AppComponent extends HTMLElement {

    constructor() {
        super();
    }
}

