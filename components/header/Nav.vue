<template>
  <div class="section flex items-center justify-between z-20 relative">
    <NuxtLink to="/"><img class="w-[180px] sm:w-60" src="/images/nacional-auto-logo.png"
        alt="Nacional auto logo"></NuxtLink>

    <button @click="openDrawer"
      class="block lg:hidden drop-shadow-lg hover:bg-amber-400 hover:text-black font-medium bg-black text-white rounded-md px-4 py-2">
      <span>&#9776;</span>
    </button>

    <!-- Desktop navigacija -->
    <div class="hidden lg:flex items-center justify-between space-x-4">
      <button :class="getButtonClass('/o-nama')" @click="navigateToService('about-us')">
        O nama
      </button>

      <div class="relative" @mouseover="showJapaneseDropdown = true" @mouseleave="showJapaneseDropdown = false">
        <button :class="getButtonClass('/servis-japanskih-vozila')" @click="navigateToService('japan')">
          Servis za japanska vozila
        </button>
        <div v-if="showJapaneseDropdown" class="absolute bg-white shadow-lg w-full z-30">
          <ul>
            <li v-for="brand in japaneseBrands" :key="brand.id" class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @click="navigateToBrandService(brand.link)">
              {{ brand.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="relative" @mouseover="showKoreanDropdown = true" @mouseleave="showKoreanDropdown = false">
        <button :class="getButtonClass('/servis-korejskih-vozila')" @click="navigateToService('korea')">
          Servis za korejska vozila
        </button>
        <div v-if="showKoreanDropdown" class="absolute bg-white shadow-lg w-full z-30">
          <ul>
            <li v-for="brand in koreanBrands" :key="brand.id" class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @click="navigateToBrandService(brand.link)">
              {{ brand.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Mobilna navigacija sa Drawer-om -->
    <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 flex" @click="closeDrawer">
      <div @click.stop class="w-2/3 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-0': isDrawerOpen, 'translate-x-full': !isDrawerOpen }">
        <!-- Zatvori dugme -->
        <button @click="closeDrawer" class="absolute top-4 right-4 text-black">
          <span>&#10005;</span>
        </button>

        <div class="px-6 py-12 space-y-4">
          <button :class="getButtonMobClass('/o-nama')"  @click="navigateToService('aboutUs')" class="w-full flex justify-between items-cente">
            O nama
          </button>

          <div>
            <button @click="navigateToService('japan')" :class="getButtonMobClass('/servis-japanskih-vozila')" class="w-full flex justify-between items-cente">
              Servis za japanska vozila
            </button>
            <ul class="pl-4">
              <li v-for="brand in japaneseBrands" :key="brand.id" class="py-2 hover:text-amber-400 cursor-pointer"
                @click="navigateToBrandService(brand.link)">
                {{ brand.name }}
              </li>
            </ul>
          </div>

          <div>
            <button @click="navigateToService('korea')" :class="getButtonMobClass('/servis-korejskih-vozila')"
              class="w-full flex justify-between items-cente">
              Servis za korejska vozila
            </button>
            <ul class="pl-4">
              <li v-for="brand in koreanBrands" :key="brand.id" class="py-2 hover:text-amber-400 cursor-pointer"
                @click="navigateToBrandService(brand.link)">
                {{ brand.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

// Kontrola prikaza dropdown menija
const showJapaneseDropdown = ref(false);
const showKoreanDropdown = ref(false);

const japaneseBrands = [
  {
    id: 1,
    name: 'Toyota',
    link: '/servis-japanskih-vozila/toyota'
  },
  {
    id: 2,
    name: 'Honda',
    link: '/servis-japanskih-vozila/honda'
  },
  {
    id: 3,
    name: 'Mazda',
    link: '/servis-japanskih-vozila/mazda'
  },
  {
    id: 4,
    name: 'Nissan',
    link: '/servis-japanskih-vozila/nissan'
  },
  {
    id: 5,
    name: 'Mitsubishi',
    link: '/servis-japanskih-vozila/mitsubishi'
  },
  {
    id: 6,
    name: 'Suzuki',
    link: '/servis-japanskih-vozila/suzuki'
  },
  {
    id: 7,
    name: 'Subaru',
    link: '/servis-japanskih-vozila/subaru'
  },
  {
    id: 8,
    name: 'Daihatsu',
    link: '/servis-japanskih-vozila/daihatsu'
  },
  {
    id: 9,
    name: 'Isuzu',
    link: '/servis-japanskih-vozila/isuzu'
  },
];

const koreanBrands = [
  {
    id: 1,
    name: 'Hyundai',
    link: '/servis-korejskih-vozila/hyundai'
  },
  {
    id: 2,
    name: 'Kia',
    link: '/servis-korejskih-vozila/kia'
  },
  {
    id: 3,
    name: 'Chevrolet / Daewoo',
    link: '/servis-korejskih-vozila/chevrolet'
  }
];

const isDrawerOpen = ref(false);
const openDrawer = () => { isDrawerOpen.value = true; };
const closeDrawer = () => { isDrawerOpen.value = false; };

// Kontrola mobilnih dropdown menija
const isDropdownOpen = ref({ japan: false, korea: false });
const toggleDropdown = (menu) => {
  isDropdownOpen.value[menu] = !isDropdownOpen.value[menu];
};

// Navigacija
const navigateToService = (region) => {
  if (region === 'japan') {
    window.location.href = '/servis-japanskih-vozila';
  } else if (region === 'korea') {
    window.location.href = '/servis-korejskih-vozila';
  } else {
    window.location.href = '/o-nama';
  }
};

const navigateToBrandService = (link) => {
  window.location.href = link;
}

// Funkcija za dodavanje aktivne klase
const getButtonClass = (path) => {
  return route.path.startsWith(path)
    ? 'drop-shadow-lg bg-amber-400 text-black font-medium rounded-md px-4 py-2'
    : 'drop-shadow-lg hover:bg-amber-400 hover:text-black font-medium bg-black text-white rounded-md px-4 py-2';
};

const getButtonMobClass = (path) => {
  return route.path.startsWith(path)
    ? 'text-amber-400'
    : 'text-black hover:text-amber-400';
};
</script>

<style scoped>

.translate-x-0 {
  transform: translateX(0);
}

.translate-x-full {
  transform: translateX(100%);
}
</style>
