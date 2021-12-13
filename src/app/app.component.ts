import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ude-app';
  username = '';
  showSecret = false;
  log = []; 

  onToggleDetails(){
    this.showSecret = !this.showSecret;
//    this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
  
}
