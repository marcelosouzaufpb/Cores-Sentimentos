<template>
    <div class="blocos">
        <template>
            <div v-for="bloco in blocos" :key="bloco.nome">
                {{ bloco.nome }}
            </div>
        </template>
    </div>
</template>
<script>
export default {
  props: {
      blocos: {type: Array, required: true }
  }
};
</script>
<style scoped>
</style>