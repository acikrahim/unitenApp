import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClubPage } from './../club/club';

@IonicPage()
@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html',
})
export class ClubsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToClub() {
     console.log('bebeh');
     this.navCtrl.push(ClubPage);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClubsPage');
  }

}
