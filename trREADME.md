# v-svg-icons

VueJS için SVG ikonları. <br>

<p>
  <a href="https://www.npmjs.com/package/v-svg-icons"><img src="https://img.shields.io/npm/dm/v-svg-icons.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/v-svg-icons"><img src="https://img.shields.io/npm/v/v-svg-icons.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/v-svg-icons"><img src="https://img.shields.io/npm/l/v-svg-icons.svg?sanitize=true" alt="License"></a>
</p>

## Başlangıç

Bu talimatlar size bileşenin bir kopyasını yerel makinenizde çalışır duruma getirecektir.

### Kurulum

v-svg-icons bileşenini npm ile kurabilirsiniz.

```
npm i v-svg-icons
```

İndirdikten sonra v-svg-icons, vue.js uygulamalarınızda kullanıma hazır olacaktır.

### Kullanım

- v-svg-icons bileşenini main.js dosyanıza aktarın

```js
import icons from "v-svg-icons";
```

- v-svg-icons bileşenini istediğiniz herhangi bir adla kaydedin

```js
Vue.component("icon", icons);
```

Bu adımdan sonra projenizdeki tüm kayıtlı bileşenler tarafından belirlemiş olduğunuz etiket adına göre kullanılabilir hale gelecektir.

- Simgeleri kullanmak için, istediğiniz simgenin adını <icon name = "" /> etiketinin içindeki "name" parametresiyle belirtmelisiniz.

```vue
<icon name="arrow-up">
```

- Örnekteki gibi genişlik ve yükseklik değerlerini belirtebilirsiniz.
  <br>
  Tüm simgeler için varsayılan genişlik ve yükseklik değerleri 50 pikseldir.

```vue
<icon name="arrow-up" width="80px" height="80px" />
```

- Simgelerin rengini değiştirmek için "color" parametresini kullanabilirsiniz.

```vue
<icon name="arrow-up" color="black" />
<icon name="arrow-up" color="#000" />
<icon name="arrow-up" color="rgba(0, 0, 0, .2)" />
```

- Ekstra stillendirme işlemleri için sınıf adı olarak simgenin adını kullanabilirsiniz.

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

Svg için uygulanabilecek tüm stillendirme işlemlerini örnekteki gibi uygulayabilirsiniz.

## Versiyon

Sürüm oluşturma için [GitHub](https://github.com/mehmetsagir/v-svg-icons) kullanıyoruz.

## Yazar

- **[Mehmet Sağır](https://github.com/mehmetsagir)**

## Lisans

MIT lisansı altında lisanslıdır, ayrıntılar için [LICENSE](https://github.com/mehmetsagir/v-svg-icons/blob/master/LICENSE) bölümüne bakın.
