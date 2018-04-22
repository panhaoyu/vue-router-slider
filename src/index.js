import RouterPage from './RouterPage'
import RouterSlider from './RouterSlider'


export default {
  install: function (Vue, options) {
    Vue.component('router-page', RouterPage);
    Vue.component('router-slider', RouterSlider);
  }
}
