import {AppVersion} from "./appversion";


export class AppVersionIos implements AppVersion {
    public getVersionName(): Promise<string> {
        return new Promise( (resolve, reject) => {
            try {
                resolve(NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleShortVersionString"));
            } catch (ex) {
                console.log("Error in appversion.getVersionName: " + ex);
                reject(ex);
            }
        });
    }

    public getVersionNameSync(): string {
        return NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleShortVersionString");
    }

    public getAppId(): Promise<string> {
        return new Promise( (resolve, reject) => {
            try {
                resolve(NSBundle.mainBundle.bundleIdentifier);
            } catch (ex) {
                console.log("Error in appversion.getAppId: " + ex);
                reject(ex);
            }
        });
    }

    public getAppIdSync(): string {
        return NSBundle.mainBundle.bundleIdentifier;
    }

    public getVersionCode(): Promise<string> {
        return new Promise( (resolve, reject) => {
            try {
                resolve(NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleVersion"));
            } catch (ex) {
                console.log("Error in appversion.getVersionCode: " + ex);
                reject(ex);
            }
        });
    }

    public getVersionCodeSync(): string {
        return NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleVersion");
    }
}


