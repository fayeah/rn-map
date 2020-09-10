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
- navigation： `npm install @react-navigation/native @react-navigation/stack`,同时需要安装peerDenpendency `expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
`

  Note:
  - zsh找不到expo
  明明`npm install expo`,但是不知为何不能run `expo`相关的命令。
这个时候第一步要明确，如果你记得，在install的当时的node 版本，因为在不同的node 版本下，global安装的路径是不一致的
查看当前global node_module的路径：`npm bin -g`/`npm root -g`
我这里的结果是：`/Users/xfli/.nvm/versions/node/v11.15.0/bin`
然后我就有疑惑，为啥install在11.15的目录下，我在装expo的时候用的node版本是v12.13.0（因为使用expo-cli有环境要求）
所以这个时候就比较容易想到，是当前node的版本不对，我使用的是nvm来管理node版本，比较容易就可以切换到所需要的版本：
`nvm use default v12.13.0`

- <Fragment></Fragment>
 1. no extra DOM wrapper
 2. <></>语法糖
 3. <Fragment></Fragment>可以加key属性
 4. 可以数组[]，但比较繁琐，逗号分隔等等
 5. <Fragment></Fragment>与<React.Fragment></React.Fragment>等价
- NPM peerDependencies
  1. 当project的dependency A1跟dependency B的dependency A2一致但version不一样的时候，如果dependency的dependency的接口被暴露，很有可能跟外部的dependency产生冲突
  2. library需要peerDependencies，并且该library会被其他project使用
  3. npm install的时候不会自动安装
  