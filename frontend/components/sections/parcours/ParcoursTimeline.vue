<template>
    <div>
        <div class="parcours-section flex flex-col" id="item-3">
            <div class="flex items-start">
                <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
                <h2 class="parcours-title text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{ $t("Parcours") }}</h2>
            </div>
            <div class="max-w-2xl mx-auto px-6 mb-16 text-center">
                <p class="text-center text-xl text-sky-700 dark:text-white">
                    {{ $t("IntroParcours1") }}
                </p>
                <p class="text-center text-xl text-sky-700 dark:text-white">
                    {{ $t("IntroParcours2") }}
                </p>
            </div>
            <ul class="parcours-ul timeline-content timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li class="parcours-li timeline-item">
                    <hr class="mx-2 bg-orange-400" />
                    <div class="timeline-middle"></div>
                    <div class="timeline-end mb-10 md:text-start">
                    <time class="font-mono font-black italic">{{ $t("2024") }} / {{ $t("2025") }} / {{ $t("2026") }}</time>
                    <div class="text-lg font-black text-orange-400">{{ $t("Formation") }} Udemy</div>
                    {{ $t("Formation") }} Nuxt.js  /  Tailwind.css <br>
                    {{ $t("Formation") }} Python  /  PostgreSQL  /  Django <br>
                    </div>
                    <hr class="mx-2 bg-orange-400" />
                </li>
                <li class="parcours-li timeline-item">
                    <hr class="mx-2 bg-orange-400" />
                    <div class="timeline-middle"></div>
                    <div class="timeline-start mb-10 md:text-end">
                    <time class="font-mono font-black italic">{{ $t("2023") }}</time>
                    <div class="text-lg font-black text-orange-400">{{ $t("Creation") }}</div>
                    Pierre Tinard (EI)  Shoshin Web Services
                    </div>
                    <hr class="mx-2 bg-orange-400" />
                </li>
                <li class="parcours-li timeline-item">
                    <hr class="mx-2 bg-orange-400" />
                    <div class="timeline-end mb-10 md:text-start">
                    <time class="font-mono font-black italic">{{ $t("2021") }} / {{ $t("2023") }}</time>
                    <div class="text-lg font-black text-orange-400">{{ $t("Formation") }} {{ $t("DevWeb") }}</div>
                        (OpenClassrooms)<br />
                        {{ $t("Certification") }}   => RNCP code 326T <br />
                        <br />P1 => {{ $t("P1") }} <br />
                        P2 => {{ $t("P2") }} <br />
                        P3 => {{ $t("P3") }} <br />
                        P4 => {{ $t("P4") }} <br />
                        P5 => {{ $t("P5") }} <br />
                        P6 => {{ $t("P6") }} <br />
                        {{ $t("P6Techno") }} <br />
                        P7 => {{ $t("P7")}} <br />
                        {{ $t("P7Techno") }} <br />
                    </div>
                    <hr class="mx-2 bg-orange-400" />
                </li>
                <li class="parcours-li timeline-item">
                    <hr class="mx-2 bg-orange-400" />
                    <div class="timeline-middle"></div>
                    <div class="timeline-start mb-10 md:text-end">
                    <time class="font-mono font-black italic"> {{ $t("2019") }} / {{ $t("2020") }} </time>
                    <div class="text-lg font-black text-orange-400">{{ $t("Teleconseiller") }} Phone Régie</div>
                        {{ $t("Appel") }} <br />
                        {{ $t("Bancaires") }} <br />
                        {{ $t("Call") }}
                    </div>
                    <hr class="mx-2 bg-orange-400" />
                </li>
                <li class="parcours-li timeline-item">
                    <hr class="mx-2 bg-orange-400" />
                    <div class="timeline-middle"></div>
                    <div class="timeline-end mb-10">
                    <time class="font-mono font-black italic"> {{ $t("2018") }} </time>
                    <div class="text-lg font-black text-orange-400"> {{ $t("Brevet") }}</div>
                    {{ $t("Animation") }} <br />
                    {{ $t("Pedagogie") }} <br />
                    {{ $t("Reference") }} =>  N° 16-10-18<br />
                    {{ $t("Experience") }}
                    </div>
                    <hr class="mx-2 bg-orange-400" />
                </li>
                <li class="parcours-li timeline-item">
                    <hr class="mx-2 bg-orange-400" />
                    <div class="timeline-middle"></div>
                    <div class="timeline-start mb-10 md:text-end">
                    <time class="font-mono font-black italic">{{ $t("2007") }} / {{ $t("2018") }}</time>
                    <div class="text-lg font-black flex-wrap text-orange-400"> {{ $t("Vente") }}</div>
                        {{ $t("Duree") }} <br>
                        {{ $t("Commerce") }} <br>
                        {{ $t("Responsabilites") }} <br />
                        {{ $t("Activites") }}
                    </div>
                    <hr class="mx-2 bg-orange-400" />
                </li>
                <li class="parcours-li timeline-item">
                    <hr class="mx-2 bg-orange-400" />
                    <div class="timeline-middle"></div>
                    <div class="timeline-end mb-10">
                        <time class="font-mono font-black italic"> {{ $t("2006") }}</time>
                        <div class="text-lg font-black text-orange-400">{{ $t("Lait") }}</div>
                        {{ $t("Fabrication") }}
                        <br />{{ $t("Fromages") }} <br />
                        ENILV La Roche-sur-Foron
                    </div>
                    <hr class="mx-2 bg-orange-400" />
                </li>
                <li class="parcours-li timeline-item">
                    <hr class="mx-2 bg-orange-400" />
                    <div class="timeline-middle"></div>
                    <div class="timeline-start mb-10 md:text-end">
                    <time class="font-mono font-black italic"> {{ $t("2004") }} / {{ $t("2005") }}</time>
                    <div class="text-lg font-black text-orange-400">{{ $t("DAEU") }}</div>
                        {{ $t("Equivalence") }} <br />
                        {{ $t("Epreuves") }}
                    </div>
                    <hr class="mx-2 bg-orange-400" />
                </li>
            </ul>
        </div>
    </div>
</template>