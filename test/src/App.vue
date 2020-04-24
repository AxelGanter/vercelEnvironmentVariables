<template>
  <div id="app">
    <h1>process.env</h1>
    <hr><p>{{envVariables}}</p><hr>
  </div>
</template>

<script>

export default {
  data(){
    return{
      envVariables: process.env
    }
  }
}

</script>