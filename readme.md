### prerequisite:     
node version `v12.13.0`    
install expo on your phone for debugging: `https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www`(for Android)    
install expo-cli on your computer: `npm install -g expo-cli`    
create a project with expo-cli: `expo init AwesomeProject`    

run app (ios debug比较方便):    
`npm run ios`

用于在已知目的地的具体地址或者经纬度的情况下，打开苹果/谷歌地图，方便快捷导航：    
- 首先找到一个目的地，打开谷歌地图（https://www.google.com/maps），比如想要找目的地“黄石市铁山区”，找到响应的具体地址为“Tieshan District, Huangshi, Hubei, China”，其经纬度为“30.210141,114.920580”。    
- 打开手机app，点击“open map”，如果手机安装了以上两个地图之一，会打开地图进行导航，否则会打开浏览器进行导航。    

示例：    
![demo](https://github.com/fayeah/rn-map/blob/master/assets/demo.gif)


在国内使用谷歌地图可能比较麻烦，后面会研究打开高德等地图。
