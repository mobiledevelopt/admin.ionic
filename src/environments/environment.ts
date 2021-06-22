/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: "http://180.235.148.192/api/index.php/",
  mediaURL: "http://180.235.148.192/api/uploads/",
  onesignal: {
    appId: "8e085517-90ae-4714-9a01-9e6facb4d595",
    googleProjectNumber: "498266104587",
    restKey: "NzU3N2JhZDQtZTFhZC00NTczLWEwNjktMTg0YWJlYjYxMDcz",
  },
  general: {
    symbol: "Rp",
    code: "IDR",
  },
  authToken: "123456789",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.