<script setup lang="ts">
  const { locale } = useI18n()
</script>

<template>
  <Html :lang="locale">
    <Body
      class="prose-headings:font-display prose prose-neutral relative min-h-screen max-w-none bg-white dark:prose-invert prose-headings:font-medium dark:bg-dark-800"
    >
      <div id="app">
        <NuxtLoadingIndicator />

        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </Body>
  </Html>
</template>
