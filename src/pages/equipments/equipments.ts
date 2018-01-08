import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EquipmentPage } from './../equipment/equipment';

/**
 * Generated class for the EquipmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipments',
  templateUrl: 'equipments.html',
})
export class EquipmentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToEquipment() {
      console.log('bebeh');
      this.navCtrl.push(EquipmentPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentsPage');
  }

}
