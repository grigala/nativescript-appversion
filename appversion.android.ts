import {AppVersion} from "./appversion";
import {Application} from "@nativescript/core";

export class AppVersionAndroid implements AppVersion {
    public getVersionName(): Promise<string> {
        return new Promise((resolve, reject) => {
            function _resolve() {
                var packageManager = Application.android.context.getPackageManager();
                resolve(packageManager.getPackageInfo(Application.android.context.getPackageName(), 0).versionName);
            }

            try {
                if (Application.android.context) {
                    _resolve();
                } else {
                    // if this is called before Application.start() wait for the event to fire
                    Application.on(Application.launchEvent, _resolve);
                }
            } catch (ex) {
                console.log("Error in appversion.getVersionName: " + ex);
                reject(ex);
            }
        });
    }

    public getVersionNameSync(): string {
        const packageManager = Application.android.context.getPackageManager();
        return packageManager.getPackageInfo(Application.android.context.getPackageName(), 0).versionName;

    }

    public getAppId(): Promise<string> {
        return new Promise((resolve, reject) => {
            function _resolve() {
                var context = Application.android.context;
                resolve(context.getPackageName());
            }

            try {
                if (Application.android.context) {
                    _resolve();
                } else {
                    // if this is called before Application.start() wait for the event to fire
                    Application.on(Application.launchEvent, _resolve);
                }
            } catch (ex) {
                console.log("Error in appversion.getAppId: " + ex);
                reject(ex);
            }
        });
    }

    public getAppIdSync(): string {
        return Application.android.context.getPackageName();
    }

    public getVersionCode(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                var packageManager = Application.android.context.getPackageManager();
                resolve("" + packageManager.getPackageInfo(Application.android.context.getPackageName(), 0).versionCode);
            } catch (ex) {
                console.log("Error in appversion.getVersionCode: " + ex);
                reject(ex);
            }
        });
    }

    public getVersionCodeSync(): string {
        const packageManager = Application.android.context.getPackageManager();
        return "" + packageManager.getPackageInfo(Application.android.context.getPackageName(), 0).versionCode;
    }
}
