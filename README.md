# PhoneGap Day - Enterprise talk app

### Requirements

- AEM 6.0.1 + Apps featurepack
- [node.js](http://nodejs.org/) version `>=0.10.x`
- [PhoneGap CLI](https://github.com/phonegap/phonegap-cli) version `>=3.4.*`
- (iOS only) Xcode version `>=5.1.*`
- (Android only) [Apache Ant](http://ant.apache.org/bindownload.cgi)
- (Android only) [Android SDK](https://developer.android.com/sdk/index.html)


### Install

This project is based on the [multimodule-content-package-archetype](http://dev.day.com/content/docs/en/aem/6-0/develop/how-tos/vlt-mavenplugin.html#multimodule-content-package-archetype), so it contains the same helpful profiles and properties to build and deploy your project with maven.

From the project root, run:

    mvn -PautoInstallPackage clean install 

... to build the content package and install to a CQ instance. The CRX host and port can be specified on the command line with `mvn -Dcrx.host=otherhost -Dcrx.port=5502 <goals>`