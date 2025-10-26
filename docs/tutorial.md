# `nav.html` 逐行、逐模块分析教程

本文档将对 `@/home/winbeau/xju-feiyue/docs/nav.html` 文件中的代码进行详细的分析和解释。

---

## 1. CSS 样式 (`<style>` 标签)

这部分代码定义了卡片堆叠效果的视觉样式。

### 1.1. `img` 选择器

```css
img {
  display: block;
  max-width: 60%;
}
```

- **`display: block;`**: 将图片元素设置为块级元素。这使得图片可以拥有独立的行，并且可以设置宽度、高度、边距等。
- **`max-width: 60%;`**: 限制图片的最大宽度为其父容器的 60%。这可以防止图片过大而溢出容器。

### 1.2. `.stack` 类

```css
.stack {
  width: 55%;
  max-width: 400px;
  transition: 0.25s ease;
  &:hover {
    transform: rotate(5deg);
    .card:before {
      transform: translatey(-2%) rotate(-4deg);
    }
    .card:after {
      transform: translatey(2%) rotate(4deg);
    }
  }
}
```

- **`width: 55%;`**: 设置堆叠容器的宽度为其父容器的 55%。
- **`max-width: 400px;`**: 限制容器的最大宽度为 400 像素。
- **`transition: 0.25s ease;`**: 为容器的变换效果（如旋转）添加 0.25 秒的平滑过渡动画。
- **`&:hover`**: 定义了鼠标悬停在 `.stack` 元素上时的样式。
    - **`transform: rotate(5deg);`**: 整个堆叠容器向右旋转 5 度。
    - **`.card:before` 和 `.card:after`**: 当鼠标悬停时，修改 `.card` 伪元素的变换效果，使其旋转角度减小，产生一种卡片展开的视觉效果。

### 1.3. `.card` 类

```css
.card {
  aspect-ratio: 3 / 2;
  border: 4px solid;
  background-color: #fff;
  position: relative;
  transition: 0.15s ease;
  cursor: pointer;
  padding: 5% 5% 15% 5%;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    border: 4px solid;
    background-color: #fff;
    transform-origin: center center;
    z-index: -1;
    transition: 0.15s ease;
    top: 0;
    left: 0;
  }

  &:before {
    transform: translatey(-2%) rotate(-6deg);
  }

  &:after {
    transform: translatey(2%) rotate(6deg);
  }
}
```

- **`aspect-ratio: 3 / 2;`**: 设置元素的宽高比为 3:2。这是一个现代 CSS 属性，可以确保元素在不同尺寸下保持固定的形状。
- **`border: 4px solid;`**: 设置 4 像素的黑色实线边框。
- **`background-color: #fff;`**: 设置背景颜色为白色。
- **`position: relative;`**: 设置相对定位，这是为了让它的伪元素（`:before` 和 `:after`）能够相对于它进行绝对定位。
- **`cursor: pointer;`**: 鼠标悬停时显示为手型光标。
- **`padding`**: 设置内边距。
- **`&:before, &:after`**: 这两个是伪元素，用来创建堆叠在主卡片后面的另外两张“卡片”。
    - **`content: "";`**: 伪元素必须设置 `content` 属性才能显示。
    - **`position: absolute;`**: 设置绝对定位，相对于 `.card` 元素。
    - **`height: 100%; width: 100%;`**: 尺寸与主卡片相同。
    - **`z-index: -1;`**: 将伪元素置于主卡片的下方，制造堆叠效果。
    - **`transform`**: 初始状态下，`:before` 伪元素向上平移并向左旋转，`:after` 伪元素向下平移并向右旋转，形成堆叠的外观。

### 1.4. `.image` 类

```css
.image {
  width: 100%;
  border: 4px solid;
  background-color: #eee;
  aspect-ratio: 1 / 1;
  position: relative;
}
```

- 这个类定义了卡片内部用于放置图片的区域。
- **`aspect-ratio: 1 / 1;`**: 使其成为一个正方形。
- **`background-color: #eee;`**: 设置了一个浅灰色的背景，作为图片加载前的占位符颜色。

### 1.5. 浏览器兼容性处理

```css
.browser-warning {
  margin-bottom: 4rem;
}

@supports (aspect-ratio: 1 / 1) {
  .browser-warning {
    display: none;
  }
}
```

- **`.browser-warning`**: 为警告信息设置了底边距。
- **`@supports (aspect-ratio: 1 / 1)`**: 这是一个 CSS 功能查询。它会检查浏览器是否支持 `aspect-ratio` 属性。
- **`display: none;`**: 如果浏览器支持该属性，则隐藏 `.browser-warning` 元素。这是一个很好的渐进增强实践，确保在不支持新特性的旧浏览器上也能提供有用的提示信息。

---

## 2. HTML 结构

这部分是页面的骨架，CSS 样式将应用在这些 HTML 元素上。

```html
<!-- From Uiverse.io by janisar-hyder -->
<p class="browser-warning">
  If this looks wonky to you it's because this browser doesn't support the CSS
  property 'aspect-ratio'.
</p>
<div class="stack">
  <div class="card">
    <div class="image"></div>
  </div>
</div>
```

- **`<p class="browser-warning">`**: 这个段落是上面 CSS 中提到的浏览器警告信息。它只会在不支持 `aspect-ratio` 的旧浏览器中显示。
- **`<div class="stack">`**: 这是最外层的容器，包含了整个卡片堆叠组件。鼠标悬停事件就是绑定在这个元素上的。
- **`<div class="card">`**: 这是中间的卡片层，也是我们能直接看到的主卡片。它的 `:before` 和 `:after` 伪元素构成了它背后的另外两张卡片。
- **`<div class="image">`**: 这是卡片内部的方块，用于展示图片或作为内容的占位符。

---

## 总结

这个 HTML 文件通过纯 CSS 实现了一个富有交互性的卡片堆叠效果。它主要利用了以下几个技术点：

1.  **伪元素 (`:before`, `:after`)**: 创建额外的视觉元素，而无需添加多余的 HTML 标签。
2.  **CSS `transform`**: 通过 `rotate` 和 `translate` 实现元素的旋转和位移，创造出 3D 堆叠和悬停时的动态效果。
3.  **CSS `transition`**: 使 `transform` 的变化过程平滑过渡，提升用户体验。
4.  **CSS `@supports`**: 检测浏览器对特定功能的支持情况，并提供优雅降级方案。
5.  **CSS `aspect-ratio`**: 轻松维持元素的固定宽高比，简化响应式布局。

代码来源是 [Uiverse.io](https://uiverse.io/)，由用户 `janisar-hyder` 创建。
