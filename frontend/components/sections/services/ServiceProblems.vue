<template>
  <div class="h-full w-full text-center p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">
    <h3 class="text-2xl font-medium text-sky-700 dark:text-orange-400">
      {{ $t("ServiceProblems") }}
    </h3>
    <ul class="mt-8 inline-block text-left space-y-4 text-black dark:text-white">
      <li class="flex items-start gap-2">
        <span>•</span><span>{{ $t("ServiceProblems2") }}</span>
      </li>
      <li class="flex items-start gap-2">
        <span>•</span><span>{{ $t("ServiceProblems3") }}</span>
      </li>
      <li class="flex items-start gap-2">
        <span>•</span><span>{{ $t("ServiceProblems4") }}</span>
      </li>
      <li class="flex items-start gap-2">
        <span>•</span><span>{{ $t("ServiceProblems5") }}</span>
      </li>
    </ul>
  </div>
</template>