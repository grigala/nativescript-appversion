export declare interface AppVersion {
    /**
     * Returns the version of your app.
     * - For iOS we read it from *.plist's CFBundleShortVersionString.
     * - For Android we read the versionName from AndroidManifest.xml.
     */
    getVersionName(): Promise<string>;

    /**
     * Same as getVersionName, but synchronous.
     */
    getVersionNameSync(): string;

    /**
     * Returns the app's ID.
     * - For iOS we read it from *.plist's bundle identifier.
     * - For Android we read the package name.
     */
    getAppId(): Promise<string>;

    /**
     * Same as getAppId, but synchronous.
     */
    getAppIdSync(): string;

    /**
     * Returns the version code (build number) of your app.
     * - For iOS we read it from *.plist's CFBundleVersion.
     * - For Android we read the versionCode from AndroidManifest.xml.
     */
    getVersionCode(): Promise<string>;

    /**
     * Same as getVersionCode, but synchronous.
     */
    getVersionCodeSync(): string;
}
