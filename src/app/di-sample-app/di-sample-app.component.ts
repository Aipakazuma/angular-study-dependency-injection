import {Component, OnInit, ReflectiveInjector} from '@angular/core';
import {MyService} from "../my.service";
@Component({
    selector: 'app-di-sample-app',
    templateUrl: './di-sample-app.component.html',
    styleUrls: [
        './di-sample-app.component.css'
    ]
})
export class DiSampleAppComponent implements OnInit {
    myService: MyService;

    constructor() {
        let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
        this.myService = injector.get(MyService);
        console.log('Same instance?', this.myService === injector.get(MyService));
    }

    ngOnInit() {
    }

    invokeService(): void {
        console.log('MyService returned', this.myService.getValue());
    }

}
