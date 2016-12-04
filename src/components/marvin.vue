<template >
   <div id="sketch"></div>
</template>

<script>
  // import '../assets/lib/marvin/gui/css/editor.css'
  // import '../assets/lib/marvin/gui/lib/promise-1.0.0.min'
  // import '../assets/lib/marvin/gui/gui.nocache'

  export default {
    created: function () {
      this.sketchOnLoad()
      window.addEventListener('message', function (event) {
        try {
          var externalCall = JSON.parse(event.data)
          marvin.onReady(function () {
            marvin.sketcherInstance[externalCall.method].apply(marvin.sketcherInstance, externalCall.args)
          })
        } catch (e) {
          console.log(e)
        }
      }, false)
    },
    methods: {
      sketchOnLoad () {
        if (marvin.Sketch.isSupported()) {
          marvin.sketcherInstance = new marvin.Sketch('sketch')
        } else {
          console.log('Cannot initiate sketcher. Current browser may not support HTML5 canvas or may run in Compatibility Mode.')
        }
      }
    }
  }
</script>

<style scoped>
  .foo{
    color: red
  }
</style>
