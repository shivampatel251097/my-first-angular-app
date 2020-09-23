import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server>Loading ......</app-server>
  // <app-server>Loading ......</app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedNewServer = false;
  serverCreationStatus = 'No server was Created';
  serverName = 'Server 3';
  serverLocation = 'Konch';
  servercreated = false;
  servers = ['Test Server', 'Test Server 2'];
  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servercreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Servers was created! and the name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
