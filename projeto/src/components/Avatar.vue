<template>
    <div>
        <div class="runner">
            
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

.runner{
  width: 200px;
  height: 330px;
  background: url(img/1.png);
  background-size: 200px;
  animation-name: run;
  animation-duration: 650ms;
  animation-iteration-count: 3;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
}
@keyframes run {
  0% {
    background: url(img/2.png);
    background-size: 200px;
    }
  25% {
    background: url(img/3.png);
    background-size: 200px;
    }
  50%  {
    background: url(img/4.png);
    background-size: 200px;
    }
  100% {
    background: url(img/5.png);
    background-size: 200px;
    }
}
</style>