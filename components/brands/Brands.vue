<template>
  <div id="car-parts-brands" class="section bg-slate-100">
    <div class="center">
      <h2 class="h2-text xl:mb-12 mb-4">
        Brendovi koje zastupamo
      </h2>
      <h6 class="h6-text xl:mb-12 mb-4">
        Mi smo ovlašćeni distributer svih renomiranih brendova, osiguravajući vam originalne delove po konkurentnim
        cenama. Sa dugogodišnjim iskustvom u radu sa japanskim i korejskim vozilima, možete biti sigurni da ćete kod nas
        pronaći samo najbolje.
      </h6>
    </div>
    <div class="second-grid lg:grid-cols-3 grid-cols-2 gap-6">
      <div v-for="brand in brands" class="border-0 bg-white lg:p-8 p-2 flex flex-col justify-center items-center shadow-lg">
        <img :src="brand.image" :alt="brand.productType" class="max-h-[60px] lg:mb-4" />
        <h4 class="h4-flip-card">
          {{ brand.productType }}
        </h4>
        <p class="hidden md:inline mt-4">
          {{ brand.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const brands = [
  {
    name: 'STONE',
    productType: 'Dihtunzi motora, garniture dihtunga',
    description: 'STONE je najpoznatija japanska fabrika zaptivača, čiji se proizvodi koriste u prvoj ugradnji kod japanskih proizvođača. Svi proizvodi su MADE IN JAPAN i zadovoljavaju ISO 9001 standard.',
    image: '/images/brands/stone.png',
  },
  {
    name: 'KYOSAN',
    productType: 'Pumpe goriva',
    description: 'KYOSAN je vodeći japanski proizvođač pumpi goriva, poznat po vrhunskom kvalitetu i prisutnosti u više od 90% japanskih vozila. Svi proizvodi su originalni, sa ISO 9001 standardom.',
    image: '/images/brands/kyosan.png',
  },
  {
    name: '1-56 MARUICHI',
    productType: 'Manžetne',
    description: '1-56 MARUICHI je renomirani japanski proizvođač manžetni za volan i homokinetičke zglobove, korišćen u prvoj ugradnji od strane mnogih japanskih proizvođača. Svi proizvodi poseduju ISO 9001 standard i MADE IN JAPAN oznaku.',
    image: '/images/brands/156.png',
  },
  {
    name: 'SUN',
    productType: 'Zupčasti kaiševi, remenje',
    description: 'SUN nudi visokokvalitetne zupčaste kaiševe za japanska i korejska vozila, proizvedene u Japanu sa ISO 9001 standardom. Ovi proizvodi su često korišćeni u prvoj ugradnji i imaju garantovan kvalitet.',
    image: '/images/brands/sun.png',
  },
  {
    name: 'THO',
    productType: 'Semerinzi, gumice ventila',
    description: 'THO se specijalizuje za proizvodnju semeringa i gumica ventila za japanska vozila, sa snagom na kvalitetu i dugogodišnjoj tradiciji. Svi proizvodi su MADE IN JAPAN i imaju ISO 9001 standard.',
    image: '/images/brands/tho.png',
  },
  {
    name: '555 SANKEI',
    productType: 'Kugle, spone, krajevi spona, viljuške',
    description: '555 SANKEI je poznat po proizvodnji delova za upravljački sistem i suspenziju, koristeći se u prvoj ugradnji kod japanskih proizvođača. Proizvodi zadovoljavaju ISO 9001 standard i dostupni su širom sveta.',
    image: '/images/brands/555.png',
  },
  {
    name: 'HDK',
    productType: 'Homokinetički zglobovi',
    description: 'HDK je vodeći japanski proizvođač homokinetičkih zglobova, poznat po kvalitetu i pouzdanosti. Njihovi proizvodi su MADE IN JAPAN i imaju ISO 9001 standard.',
    image: '/images/brands/hdk.png',
  },
  {
    name: 'NPR',
    productType: 'Karike',
    description: 'NPR je prva japanska fabrika karika, sa dugogodišnjim iskustvom i prisustvom u prvoj ugradnji kod većine japanskih proizvođača. Proizvodi su sa ISO 9001 standardom i garantovanog kvaliteta.',
    image: '/images/brands/npr.png',
  },
  {
    name: 'TAIHO',
    productType: 'Ležajevi radilice (leteći i ležeći)',
    description: 'TAIHO KOGYO je renomirani proizvođač ležajeva radilice, poznat po kvalitetu i inovacijama, sa proizvodima koji se koriste u mnogim japanskim vozilima. Svi proizvodi su MADE IN JAPAN i poseduju ISO 9001 standard.',
    image: '/images/brands/taiho.png',
  }
];
</script>
