import { Component } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
    // styles: [`
    // h3 {
    //     color : dodgerblue;
    // }
    // `]
})
export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}