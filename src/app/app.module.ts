import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';

// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { RadioPage } from '../pages/radio/radio';
import { PolaPage } from '../pages/pola/pola';
import { CalepinsPage } from '../pages/calepins/calepins';
import { CalepinPage } from "../pages/calepin/calepin";
import { CasquesPage } from '../pages/casques/casques';
import { CasquePage } from '../pages/casque/casque';
import { ConcertsPage } from "../pages/concerts/concerts";
import { ConcertPage } from "../pages/concert/concert";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { GlobalService } from '../providers/global-service';
import { InitService } from "../providers/init-service";
import { RadioService } from "../providers/radio-service";
import { CalepinsService } from "../providers/calepins-service";
import { CasquesService } from "../providers/casques-service";
import { IonicAudioModule } from 'ionic-audio';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { PromptService } from "../providers/prompt-service";

// Components
import { ShareButtonComponent } from "../components/share-button/share-button";

// Libs
import { SocialSharing } from '@ionic-native/social-sharing';
import { SwingModule } from 'angular2-swing';


const cloudSettings: CloudSettings = {
    'core': {
        'app_id': '0f7b6934'
    }
};

@NgModule({
    declarations: [
        MyApp,
        RadioPage,
        PolaPage,
        CalepinsPage,
        CasquesPage,
        CalepinPage,
        CasquePage,
        ConcertsPage,
        ConcertPage,
        ShareButtonComponent,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
// tabsLayout: 'title-hide',
            tabsHighlight: true
        }),
        CloudModule.forRoot(cloudSettings),
        SwingModule,
        IonicAudioModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        RadioPage,
        PolaPage,
        CalepinsPage,
        CasquesPage,
        CalepinPage,
        CasquePage,
        ConcertsPage,
        ConcertPage,
        ShareButtonComponent,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AlertController,
        GlobalService,
        InitService,
        RadioService,
        CalepinsService,
        CasquesService,
        SocialSharing,
        GoogleAnalytics,
        PromptService,
        { provide: LOCALE_ID, useValue: "fr-FR" },
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
