import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ClubsPage } from '../pages/clubs/clubs';
import { ClubPage } from '../pages/club/club';
import { EquipmentsPage } from '../pages/equipments/equipments';
import { EquipmentPage } from '../pages/equipment/equipment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ClubsPage,
    ClubPage,
    EquipmentsPage,
    EquipmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        tabsPlacement: 'top',
        platforms: {
            android: {
                tabsPlacement: 'top'
            },
            ios: {
                tabsPlacement: 'top'
            },
            windows: {
                tabsPlacement: 'top'
            }
        },
        tabsHideOnSubPages: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ClubsPage,
    ClubPage,
    EquipmentsPage,
    EquipmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
