import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Call } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular_Azure';

  nodejscontent:"" | undefined;
  /**
   *
   */
  constructor(private _http: HttpClient) {
    this._http
      .get('https://yazilimservisi-nodejs.azurewebsites.net/api/test')
      .subscribe((res:any) => {
        console.log(res);
        this.nodejscontent = res.message;
      });
  }
}
