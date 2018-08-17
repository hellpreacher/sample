import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    constructor(public navCtrl: NavController) {}
}