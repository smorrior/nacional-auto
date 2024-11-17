<template>
  <div class="relative">
    <img src="/images/engine2.jpg" alt="Nacional Auto" class="absolute inset-0 w-full h-full object-cover z-0" />
    <HeaderNav />
    <div class="relative center justify-center xl:pb-16 xl:px-0 pb-6 px-4 z-10">
      <h1 class="h1-text md:w-2/3">
        Profesionalni servis {{ name }} automobila
      </h1>
      <h4 class="h4-hero-text md:w-2/3">
        Održavanje, dijagnostika i popravke za sve modele {{ name }} vozila.
      </h4>
      <button @click="scrollToTarget('contact-us')" class="hero-btn">
        Zakažite termin
      </button>
    </div>
  </div>

  <div class="section">
    <div class="center">
      <h2 class="h2-text xl:mb-12 mb-4">
        Usluge koje pružamo za {{ name }} vozila
      </h2>
      <div class="main-grid grid-cols-3 mb-4">
        <div class="center">
          <IconsCarQuality class="w-1/3" />
          <h4 class="h4-text">
            Redovno održavanje {{ name }} vozila
          </h4>
        </div>
        <div class="center">
          <IconsCarAll class="w-1/3" />
          <h4 class="h4-text">
            {{ name }} dijagnostika
          </h4>
        </div>
        <div class="center">
          <IconsCarTop class="w-1/3" />
          <h4 class="h4-text">
            Mehaničke popravke
          </h4>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="center">
      <h2 class="h2-text xl:mb-12 mb-4">
        Modeli {{ name }} vozila koje servisiramo
      </h2>
      <h6 class="h6-text mb-4">
        Servisiramo sve popularne modele <strong>{{ name }}</strong> vozila,kao i ostalih <strong>
          <NuxtLink :to="`/servis-japanskih-vozila`">japanskih vozila</NuxtLink>
        </strong>. Uz profesionalno održavanje i originalne delove. Bez obzira na to da li vozite manji gradski
        automobil ili veće SUV vozilo, naš tim je tu da osigura dugovečnost i pouzdanost vašeg <strong> {{ name }}
        </strong> vozila.
      </h6>
      <div class="flex flex-wrap gap-2 lg:w-2/3 justify-center mb-4">
        <span v-for="(model, index) in models" :key="index"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-amber-400 rounded-md">
          {{ model }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
const name = "Isuzu"

const models = [
  'Isuzu D-Max',
  'Isuzu Trooper',
  'Isuzu N-Series',
  'Isuzu F-Series',
  '...'
]

useHead({
  title: `Servis ${name} vozila - Profesionalni auto servis | Nacional Auto`,
  meta: [
    { name: 'description', content: `Profesionalni servis i održavanje ${name} vozila. Servisiramo sve modele uz originalne delove i kvalitetne popravke.` },
    { name: 'keywords', content: `${name} servis, japanska vozila, dijagnostika, održavanje ${name}` },
    { property: 'og:title', content: `Profesionalni servis ${name} vozila` },
    { property: 'og:description', content: `Pružamo vrhunsku uslugu servisa za sve ${name} modele, uz stručnost i originalne delove.` },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/images/nacional-auto-logo.png' },
  ],
  link: [
    { rel: 'canonical', href: `https://www.nacionalauto.com/servis-japanskih-vozila/${name.toLowerCase()}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": `${name} Servis - Nacional Auto`,
        "description": `Profesionalni servis i održavanje ${name} vozila.`,
        "url": `https://www.nacionalauto.com/servis-japanskih-vozila/${name.toLowerCase()}`,
        "image": "https://www.nacionalauto.com/images/nacional-auto-logo.png",
        "telephone": "+381 11 35 11 528",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Borska 94C",
          "addressLocality": "Beograd",
          "addressRegion": "RS",
          "postalCode": "11000",
          "addressCountry": "RS"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "14:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "00:00",
            "closes": "00:00"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+381 11 35 11 528",
            "contactType": "customer service",
            "areaServed": "RS",
            "availableLanguage": "Serbian"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+381 11 30 57 430",
            "contactType": "customer service",
            "areaServed": "RS",
            "availableLanguage": "Serbian"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+381 11 30 57 431",
            "contactType": "customer service",
            "areaServed": "RS",
            "availableLanguage": "Serbian"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+381 63 256 412",
            "contactType": "customer service",
            "areaServed": "RS",
            "availableLanguage": "Serbian"
          },
          {
            "@type": "ContactPoint",
            "email": "office@nacionalauto.com",
            "contactType": "customer service",
            "areaServed": "RS",
            "availableLanguage": "Serbian"
          }
        ]
      }
    }
  ]
});
const scrollToTarget = (item) => {
  const targetElement = document.getElementById(item);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
</script>