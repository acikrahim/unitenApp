import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClubsPage } from '../clubs/clubs';
import { EquipmentsPage } from '../equipments/equipments';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    clubs:any = ClubsPage;
    equipments:any = EquipmentsPage;

    changeRootPage() {}

}
