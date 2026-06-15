<template>
  <div class="h-full w-full text-center p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">
    <h3 class="text-2xl font-medium text-sky-700 dark:text-orange-400">
      {{ $t("ServiceSolutions") }}
    </h3>
    <div class="mt-8 text-black dark:text-white space-y-4">
      <p class="font-black">{{ $t("ServiceSolutions2") }}</p>
      <ul class="inline-block text-left space-y-4">
        <li class="flex items-start gap-2">
          <span>•</span><span>{{ $t("ServiceSolutions3") }}</span>
        </li>
        <li class="flex items-start gap-2">
          <span>•</span><span>{{ $t("ServiceSolutions4") }}</span>
        </li>
        <li class="flex items-start gap-2">
          <span>•</span><span>{{ $t("ServiceSolutions5") }}</span>
        </li>
        <li class="flex items-start gap-2">
          <span>•</span><span>{{ $t("ServiceSolutions6") }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>