# Vue Router Slider

Vue-router-slider is build to add slide transition to vue-router.

Here is a [Demo](https://panhaoyu.github.io/vue-router-slider-demo/).

This is a project by a learner of vue, maybe is not fully tested,
if you didn't start your project by `vue init webpack`,
please keep in mind to check the code before using it.

This package is for `vue`, `vue-router`, `webpack`, `es6`.
If you don't use one of the tools above,
make sure to check the code before using it.

# Install

```text
npm install -S vue-router-slider
```

# Setup

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRouterSlider from 'vue-router-slider'
// Install the style if you like, or define it yourself.
import RouterSliderStyle from 'vue-router-slider/style.css'

Vue.use(VueRouter);
Vue.use(VueRouterSlider);
```

# Using in Your Project

Just use `<router-view>` as usual, included in a `<router-slider>` is ok.

```html
<router-slider class="router">
	<router-view></router-view>
</router-slider>

<style>
  .router {
    position: absolute;
    top: 2rem;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
```


You may want to fix the position, then just add style on `<router-slider>` is okay.

If you use `vue-router-slider`, that means you want to change between pages. So `vue-router-slider` provides a component `router-page`, and you must use it as the root component of every page, like this:

```html
<template>
  <router-page class="home">
    <p>This is a page.</p>
  </router-page>
</template>
```

You may want to use `<router-link>`, but `vue-router-slider` cannot support it.

Okay, it's because I cannot understand the source code of `vue-router`.

So you have to use it in such a way:

```html
<div @click="$router.back()">Back</div>
<div @click="$router.push('/')">Home</div>
<div @click="$router.push('/menu/')">Menu</div>
```

`vue-router-slider` changed two functions of `vue-router`, you should call `this.$router.push('/path/to/url/')` and `this.$router.back()`.

You may want to call the orginal method of `vue-router`, so `vue-router-slider` set the two methods to another name: `this.$router.originalPush('/path/to/url/')` and `this.$router.originalBack()`.

I think I have alreadly expressed my self clearly, if not, raise an issue and tell me.

# Todo

1. Change all commands of vue-router, including `$router.go(2)`
2. Add support to `<router-link to="/path/to/page/">`.
3. Support more router-views.
4. Slim the page out of the view when transition.

The project is enough for my mobile application currently, and I may not be able to fix the bugs soon.

# Some words about npm

When writing python, I know node.
I tried several time to enter node community. 
I cannot persuade myself to write the ugly js code.
As for the easy and low quality packages from npm,
I don't think they should be published before tested.
So I didn't published even one package to pypi.
We call the JSers as monkeys, or something else.
And now, I'm one of the monkey.
And the monkey is publishing a low quality package.
I'm really new in open source.
So, if you want to use my package,
and you have some suggestions,
just mail or issue for free.
I'm willing to hear from you.
