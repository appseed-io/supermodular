::
:: Create output (Cordova) directory
::
mkdir www

::
:: Install client libraries
::
bower install

::
:: Install cordova plugins
:: The quickest option is to ask from Ionic
:: to restore the state of the app.
:: https://github.com/driftyco/ionic-cli::ionic-state-restore
:: If this process fails comment this line and uncomment the
:: "cordova plugin add ..." lines that follow.
::
ionic state restore
::
:: cordova plugin add cordova-plugin-device
:: cordova plugin add cordova-plugin-console
:: cordova plugin add com.ionic.keyboard
:: cordova plugin add cordova-plugin-inappbrowser
:: cordova plugin add cordova-plugin-geolocation
:: cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
:: cordova plugin add de.appplant.cordova.plugin.email-composer
:: cordova plugin add cordova-plugin-network-information
:: cordova plugin add cordova-plugin-whitelist
:: cordova plugin add cordova-plugin-transport-security

::
:: Add target platform
::
:: Comment out the platform(s) your system supports
::
grunt platform:add:ios
:: grunt platform:add:android

::
:: Build the  project and generate the cordova directory (www)
::
grunt build
