// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'pass-cfcc1',
    appId: '1:1055242718277:web:865e4f4fe69c23395ba72c',
    storageBucket: 'pass-cfcc1.appspot.com',
    locationId: 'northamerica-northeast1',
    apiKey: 'AIzaSyB_2-qf4yuSIhFzMNZIcRl0V-UoLHWa6RQ',
    authDomain: 'pass-cfcc1.firebaseapp.com',
    messagingSenderId: '1055242718277',
  },
  firebaseConfig: {
    apiKey: "AIzaSyB_2-qf4yuSIhFzMNZIcRl0V-UoLHWa6RQ",
    authDomain: "pass-cfcc1.firebaseapp.com",
    projectId: "pass-cfcc1",
    storageBucket: "pass-cfcc1.appspot.com",
    messagingSenderId: "1055242718277",
    appId: "1:1055242718277:web:865e4f4fe69c23395ba72c"
  },
  apibackEnd: 'http://apipass.mooo.com:11000/api/',
  meli: {
    api: 'https://api.mercadopago.com/v1/',
    publicToken: 'APP_USR-1fd52210-c58b-4843-b8af-ca4e0e429e7d',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
