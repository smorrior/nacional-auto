<template>
  <div class="relative">
    <img src="/images/engine.jpg" alt="Nacional Auto" class="absolute inset-0 w-full h-full object-cover z-0" />
    <HeaderNav />
    <div class="relative center justify-center xl:pb-16 xl:px-0 pb-6 px-4 z-10">
      <h1 class="h1-text md:w-2/3">
        AUTO CENTAR ZA JAPANSKA I KOREJSKA VOZILA
      </h1>
      <h4 class="h4-hero-text md:w-2/3">
        Servis, veleprodaja i maloprodaja delova.
        Pouzdana usluga i originalni delovi po povoljnim cenama,sve na jednom mestu.
      </h4>
      <button @click="scrollToTarget('contact-us')" class="hero-btn">
        KONTAKTIRAJTE NAS
      </button>
    </div>
  </div>


  <div class="section">
    <div class="center">
      <h2 class="h2-text xl:mb-12 mb-4">
        Više od 20 godina stručnosti
      </h2>

      <h6 class="h6-text mb-4 xl:mb-0"> Nacional auto d.o.o. već više od 20 godina pruža vrhunsku uslugu u prodaji auto
        delova, kao i u servisiranju vozila <strong>
          <NuxtLink :to="`/servis-japanskih-vozila`">japanske</NuxtLink>
        </strong> i <strong>
          <NuxtLink :to="`/servis-korejskih-vozila`">korejske</NuxtLink>
        </strong> proizvodnje. Naša posvećenost kvalitetu i stručnosti pomogla nam je da izgradimo dugogodišnje
        poverenje klijenata i postanemo pouzdan partner za sve potrebe održavanja automobila. <br><br> Kroz pažljivo
        odabrane originalne delove i najnoviju tehnologiju, garantujemo dugovečnost i performanse vašeg vozila. Naš tim
        iskusnih i obučenih stručnjaka uvek je spreman da odgovori na vaše zahteve i pruži personalizovane savete kako
        biste osigurali maksimalnu pouzdanost i sigurnost vašeg automobila. <br><br> Naša misija je da svakom klijentu
        pružimo <strong>preciznu</strong>, <strong>brzu</strong> i <strong>kvalitetnu</strong> uslugu, čineći održavanje
        automobila jednostavnim i bezbrižnim. Posetite nas i uverite se zašto nas vozači biraju generacijama! Bez obzira
        na to da li vam je potreban redovan servis, složeniji popravak ili savet u vezi sa održavanjem, uvek možete
        računati na nas. </h6>

      <div class="grid md:grid-cols-3 grid-cols-1 gap-1">
        <img src="/images/1.jpg" alt="Nacional Auto zgrada" class="w-full" />
        <img src="/images/2.jpg" alt="Nacional Auto servis" class="w-full" />
        <img src="/images/3.jpg" alt="Nacional Auto servis" class="w-full" />
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: `Servis japanskih i korejskih vozila - Profesionalni auto servis | Nacional Auto`,
  meta: [
    { name: 'description', content: `Profesionalni servis i održavanje japanskih i korejskih vozila. Servisiramo sve modele uz originalne delove i kvalitetne popravke.` },
    { name: 'keywords', content: `servis, japanska vozila, korejska vozila, dijagnostika, održavanje` },
    { property: 'og:title', content: `Profesionalni servis japanskih i korejskih vozila` },
    { property: 'og:description', content: `Pružamo vrhunsku uslugu servisa za sve japanske i korejske modele, uz stručnost i originalne delove.` },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/images/nacional-auto-logo.png' },
  ],
  link: [
    { rel: 'canonical', href: `https://www.nacionalauto.com` }
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": `Servis japanskih i korejskih vozila - Nacional Auto`,
        "description": `Profesionalni servis i održavanje japanskih i korejskih vozila.`,
        "url": `https://www.nacionalauto.com`,
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