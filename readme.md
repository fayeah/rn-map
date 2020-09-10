- install `expo-cli`: `npm install -g expo-cli`
- install `Expo client` on Android: https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www
- online playground: https://snack.expo.io/lEu_P09c2
- run with ios simulater with `yarn ios`
 then got this error:
  `no such file or directory, rename '/Users/xfli/.expo/tmp-download-file.download'`
  "Unable to resolve module `./debugger-ui/ui.bcd3f9d1.js`"

  ```
  None of these files exist:
  * debugger-ui/ui.bcd3f9d1.js(.native|.native.expo.ts|.expo.ts|.native.expo.tsx|.expo.tsx|.native.expo.js|.expo.js|.native.expo.jsx|.expo.jsx|.native.ts|.ts|.native.tsx|.tsx|.native.js|.js|.native.jsx|.jsx|.native.json|.json|.native.wasm|.wasm)
  * debugger-ui/ui.bcd3f9d1.js/index(.native|.native.expo.ts|.expo.ts|.native.expo.tsx|.expo.tsx|.native.expo.js|.expo.js|.native.expo.jsx|.expo.jsx|.native.ts|.ts|.native.tsx|.tsx|.native.js|.js|.native.jsx|.jsx|.native.json|.json|.native.wasm|.wasm)
  ```
  但不影响启动应用。
  