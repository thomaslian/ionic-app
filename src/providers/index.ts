import { GlobalService }    from './global-service';
import { InitService }      from "./init-service";
import { RadioService }     from "./radio-service";
import { CalepinsService }  from "./calepins-service";
import { CasquesService }   from "./casques-service";
import { PromptService }    from "./prompt-service";

import { StatusBar }                from "@ionic-native/status-bar";
import { SplashScreen }             from "@ionic-native/splash-screen";
import { ErrorHandler, LOCALE_ID }  from '@angular/core';
import { IonicErrorHandler }        from 'ionic-angular';
import { SocialSharing }            from "@ionic-native/social-sharing";
import { GoogleAnalytics }          from "@ionic-native/google-analytics";
import { TrackerService }           from "./tracker-service";
import { Screenshot }               from "@ionic-native/screenshot";
import { InAppBrowser }             from '@ionic-native/in-app-browser';
import { AppRate }                  from "@ionic-native/app-rate";
import { AppVersion }               from "@ionic-native/app-version";
import { StreamingMedia }           from "@ionic-native/streaming-media";
import { BackgroundMode }           from '@ionic-native/background-mode';
import { Media, MediaObject }       from '@ionic-native/media';
import { NativeAudio }              from '@ionic-native/native-audio';


export const CustomProviders = [
    InitService,
    GlobalService,
    RadioService,
    CalepinsService,
    CasquesService,
    PromptService,
    TrackerService
];

export const ExternalProviders = [
    Screenshot,
    StatusBar,
    SplashScreen,
    SocialSharing,
    GoogleAnalytics,
    InAppBrowser,
    AppRate,
    AppVersion,
    StreamingMedia,
    BackgroundMode,
    Media,
    NativeAudio,
    { provide: LOCALE_ID, useValue: "fr-FR" },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
];