<!-- pages/APropos.vue -->
<template>
    <div>
        <div class="apropos-section flex flex-col" id="item-apropos">

            <!-- En-tête -->
            <div class="flex items-start">
                <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
                <h2 class="apropos-title text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">
                    {{ $t("APropos") }}
                </h2>
            </div>

            <!-- Sous-titre / signature -->
            <p class="text-center text-lg uppercase tracking-widest text-sky-700 dark:text-white mb-10">
                Pierre Tinard
            </p>
             <p class="text-center text-lg uppercase tracking-widest text-sky-700 dark:text-white mb-10 -mt-8">
                {{ $t("Shoshin") }} · {{ $t("Web") }} · {{ $t("Services") }}
            </p>

            <!-- Photo aikido (brancher ton SwitchImg ici) -->
            <div class="max-w-md mx-auto mb-16 px-6">
                <img
                    src="assets/images/aikido.webp"
                    alt="Pierre Tinard, pratique de l'aïkido"
                    class="w-full rounded-xl object-cover"
                />
            </div>

            <!-- Corps du texte -->
            <div class="max-w-2xl mx-auto px-6 mb-16 space-y-6">

                <!-- Accroche -->
                <blockquote v-slide-in="0" class="border-l-4 border-orange-400 pl-5">
                    <p class="text-xl italic text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposAccroche1") }}
                    </p>
                     <p class="text-xl italic text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposAccroche2") }}
                    </p>
                     <p class="text-xl italic text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposAccroche3") }}
                    </p>
                     <p class="text-xl italic text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposAccroche4") }}
                    </p>
                </blockquote>

                <!-- Parcours humain -->
                <div v-slide-in="100" class="bg-sky-50 dark:bg-sky-900 rounded-xl px-6 py-5">
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposParcours1") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposParcours2") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposParcours3") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposParcours4") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposParcours5") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposParcours6") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposParcours7") }}
                    </p>
                 </div>

                <!-- Shoshin / fil rouge -->
                <div v-slide-in="100" class="bg-sky-50 dark:bg-sky-900 rounded-xl px-6 py-5">
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposShoshin1") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposShoshin2") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposShoshin3") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposShoshin4") }}
                    </p>
                </div>


                <!-- Offre de services -->
                <div v-slide-in="100" class="bg-sky-50 dark:bg-sky-900 rounded-xl px-6 py-5">
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposServices1") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposServices2") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposServices3") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposServices4") }}
                    </p>

                </div>

                <!-- Encart écoute -->
                <div v-slide-in="100" class="bg-sky-50 dark:bg-sky-900 rounded-xl px-6 py-5">
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposEcoute1") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposEcoute2") }}
                    </p>
                </div>

                <!-- Mode de travail -->
                <div v-slide-in="100" class="bg-sky-50 dark:bg-sky-900 rounded-xl px-6 py-5">
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposTravail1") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposTravail2") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposTravail3") }}
                    </p>
                </div>

                <!-- CTA final -->
                <div v-slide-in="100" class="bg-sky-50 dark:bg-sky-900 rounded-xl px-6 py-5">
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposCTA1") }}
                    </p>
                    <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposCTA2") }}
                    </p>
                     <p class="text-lg text-sky-700 dark:text-white leading-relaxed">
                        {{ $t("AProposCTA3") }}
                    </p>
                </div>
            </div>

            <!-- Lien de contact -->
            <div v-slide-in="100" class="max-w-2xl mx-auto px-6 mb-16 w-full">
                <div class="border-t border-sky-700/20 dark:border-white/20 pt-6">
                    <a href="https://calendly.com/shoshinwebservices" target="_blank" rel="noopener noreferrer"
                       aria-label="Prendre rendez-vous sur Calendly"
                       class="text-orange-400 text-xl font-black hover:text-orange-500 transition-colors">
                        {{ $t("PrendreContact") }}
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { vSlideIn } from '@/directives/vSlideIn'
import { useHead } from '#imports'

useHead({
    meta: [
        {
            name: 'description',
            content: 'Pierre Tinard, développeur web freelance à Carcassonne. Découvrez le parcours et l\'état d\'esprit derrière Shoshin Web Services.',
        },
    ],
})
</script>