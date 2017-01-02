import {Component, OnInit, Inject} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
    selector: 'app-di-value-app',
    templateUrl: './di-value-app.component.html',
    styleUrls: ['./di-value-app.component.css']
})
export class DiValueAppComponent implements OnInit {

    constructor(@Inject(ApiService) private apiService: ApiService) {
    }

    ngOnInit() {
    }

    invokeApi(): void {
        this.apiService.get();
    }

}
