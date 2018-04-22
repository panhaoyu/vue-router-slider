<template>
  <div class="router-slider">
    <transition :name="transition">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "RouterSlider",
    data() {
      return {
        transition: 'left',
      }
    },
    methods: {
      push: function () {
        this.transition = 'router-right';
      },
      back: function () {
        this.transition = 'router-left';
      }
    },
    created: function () {
      let router = this.$router;
      let vm = this;
      router.originalPush = router.push;
      router.originalBack = router.back;
      router.push = (location, onComplete, onAbort) => {
        vm.push();
        router.originalPush(location, onComplete, onAbort);
      };
      router.back = () => {
        vm.back();
        router.originalBack();
      };
    }
  }
</script>

<style scoped>

</style>
