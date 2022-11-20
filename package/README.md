# v-svg-icons
Svg icons for VueJS. <br>
[Türkçe README dosyası için tıklayın!](https://github.com/mehmetsagir/v-svg-icons/blob/master/trREADME.md)

## Getting Started
These instructions will get you a copy of the component up and running on your local machine.

### Installing

You can install v-svg-icons component by npm

``` 
npm i v-svg-icons
```

After download, v-svg-icons will be ready to use in your vue.js applications

### Usage

* Export the V-svg-icons component to the main.js file

```js
import icons from "v-svg-icons"
```

* Register v-svg-icons component with any name you want

```js
Vue.component("icon", icons);
```

After this step, it can be used by all registered components in your project by tag name.

* To use icons, you must specify the name of the icon you want with the name parameter inside the <icon name = "" /> tag.
```vue
<icon name="arrow-up">
```
* You can specify the width and height values as in the example. 
  <br>
  The default width and height values for all icons are 50px.
```vue
<icon name="arrow-up" size="60px" />
```

* You can use the "color" parameter to change the color of the icons.
```vue
<icon name="arrow-up" color="black" />
<icon name="arrow-up" color="#000" />
<icon name="arrow-up" color="rgba(0, 0, 0, .2)" />
```
* You can use the name of the icon as the class name for additional styling operations.
```vue
<icon name="arrow-up" />
```
```css
<style>
    .arrow-up{
        fill: green;
        background: red;
        width: 150px;
        height: 150px;
    }
</style>
```
You can apply all the changes that can be made for svg as in the example.



## Versioning

We use [GitHub](https://github.com/mehmetsagir/v-svg-icons) for versioning. 

## Authors
* **[Mehmet Sağır](https://github.com/mehmetsagir)**

## License
Licensed under the MIT license, see [LICENSE](https://github.com/mehmetsagir/v-svg-icons/blob/master/LICENSE) for details.

