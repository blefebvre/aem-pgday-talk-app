# PhoneGap Day - Enterprise talk app

### Requirements

- AEM 6.1 + Apps featurepack 3
- [node.js](http://nodejs.org/) version `>=0.12.x`
- [Cordova CLI](https://github.com/apache/cordova-cli) version `==5.4.*`
- (iOS only) Xcode version `==7.2`
- (Android only) [Apache Ant](http://ant.apache.org/bindownload.cgi)
- (Android only) [Android SDK](https://developer.android.com/sdk/index.html)


### Install assets

Using [package manager](http://localhost:4502/crx/packmgr), upload and install the package located in the `assets` directory.


### Install code and content

This project is based on the [multimodule-content-package-archetype](http://dev.day.com/content/docs/en/aem/6-0/develop/how-tos/vlt-mavenplugin.html#multimodule-content-package-archetype), so it contains the same helpful profiles and properties to build and deploy your project with maven.

From the project root, run:

    mvn -PautoInstallPackage clean install 

... to build the content package and install to a CQ instance. The CRX host and port can be specified on the command line with `mvn -Dcrx.host=otherhost -Dcrx.port=5502 <goals>`