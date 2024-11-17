<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="closeModal">
    <div class="bg-white rounded-lg p-6 w-full mx-4 max-w-md shadow-lg relative">
      <button class="absolute top-4 right-4 text-black" @click="closeModal">
        <span>&#10005;</span>
      </button>
      <h3 class="text-xl font-semibold mb-4">Zakažite termin</h3>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <h3 class="font-medium" for="name">
            Ime
          </h3>
          <input v-model="formData.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="Unesite vaše ime" />
        </div>
        <div class="mb-4">
          <h3 class="font-medium" for="name">
            Kontakt telefon
          </h3>
          <input v-model="formData.phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="Unesite vaše ime" />
        </div>
        <div class="mb-4">
          <h3 class="font-medium" for="email">
            Email
          </h3>
          <input v-model="formData.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" placeholder="Unesite vašu email adresu" />
        </div>
        <div class="mb-4">
          <h3 class="font-medium" for="message">
            Poruka
          </h3>
          <textarea v-model="formData.message"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message" rows="4" placeholder="Unesite vašu poruku"></textarea>
        </div>
        <div class="flex items-center justify-end">
          <button class="hero-btn" type="submit">
            Pošalji
          </button>
        </div>
      </form>
      <div class="py-4">
        <h3 class="font-medium">Kontakt</h3>
        <p class="mt-1"><span class="font-bold">Email:</span> office@nacionalauto.com</p>
        <p class="mt-1"><span class="font-bold">Telefon 1:</span> +381 11 35 11 528</p>
        <p class="mt-1"><span class="font-bold">Telefon 2:</span> +381 11 30 57 430</p>
        <p class="mt-1"><span class="font-bold">Telefon 3:</span> +381 11 30 57 431</p>
        <p class="mt-1"><span class="font-bold">Mobilni:</span> +381 63 256 412</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue';

// Definiši props
const props = defineProps({
  isOpen: Boolean,
});

// Definiši emit događaje
const emit = defineEmits(['close']);

const formData = reactive({
  name: '',
  email: '',
  message: '',
});

const closeModal = () => {
  emit('close');
};

const submitForm = () => {
  console.log(formData);
  alert('Poruka poslata!');
  closeModal();
};
</script>
