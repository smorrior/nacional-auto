<script setup>
const currentYear = new Date().getFullYear();
</script>
<template>
  <section id="contact-us" class="bg-black background">
    <div class="section">
      <div class="max-w-2xl lg:max-w-4xl mx-auto flex flex-col items-center">
        <h2 class="text-4xl text-white">Posetite nas</h2>
      </div>
      <div class="mt-8">
        <div class="flex sm:justify-center flex-col sm:flex-row items-center">
          <div class="md:w-1/2">
            <div class="max-w-full mx-auto rounded-lg overflow-hidden">
              <div class="mb-4">
                <h3 class="mt-4 text-2xl font-bold text-white">NACIONAL AUTO d.o.o.</h3>
                <p class="mt-1 text-white"><span class="font-bold">Adresa:</span> Borska 94C, Beograd</p>
              </div>
              <div class="border-t border-gray-800 py-4">
                <h3 class="text-lg font-medium text-white">Radno vreme</h3>
                <p class="mt-1 text-white"><span class="font-bold">Ponedeljak - Petak:</span> 09:00 - 17:00</p>
                <p class="mt-1 text-white"><span class="font-bold">Subota:</span> 09:00 - 14:00</p>
                <p class="mt-1 text-white"><span class="font-bold">Nedelja:</span> Zatvoreno</p>
              </div>
              <div class="border-t border-gray-800 py-4">
                <h3 class="text-lg font-medium text-white">Kontakt</h3>
                <p class="mt-1 text-white"><span class="font-bold">Email:</span> office@nacionalauto.com</p>
                <p class="mt-1 text-white"><span class="font-bold">Telefon 1:</span> +381 11 35 11 528</p>
                <p class="mt-1 text-white"><span class="font-bold">Telefon 2:</span> +381 11 30 57 430</p>
                <p class="mt-1 text-white"><span class="font-bold">Telefon 3:</span> +381 11 30 57 431</p>
                <p class="mt-1 text-white"><span class="font-bold">Mobilni:</span> +381 63 256 412</p>
              </div>
              <div class="border-t border-gray-800 py-4">
                <h3 class="text-lg font-medium text-white">Ovde možete preuzeti potrebne obrasce:</h3>
                <p class="mt-1 text-white">
                  <a href="/pdf/aprresenje.pdf" target="_blank" rel="noopener noreferrer">PDV obrazac</a>
                </p>
                <p class="mt-1 text-white">
                  <a href="/pdf/obrazac.pdf" target="_blank" rel="noopener noreferrer">Obrazac za identifikaciju</a>
                </p>
                <div class="mt-4">
                  <a href="https://www.facebook.com/amcnacional" target="_blank" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="width: 32px; height: 32px;" viewBox="0 0 512 512">
                      <path fill="white" fill-rule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="sm:ml-4">
            <iframe class="min-w-[280px] h-[280px] sm:h-[300px] md:w-[600px] md:h-[450px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22665.65441409355!2d20.460635!3d44.756197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71af5a8a169f%3A0x17f02db8e532df5f!2sNacional%20Auto!5e0!3m2!1sen!2sus!4v1729089223200!5m2!1sen!2sus"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="bg-amber-400 px-16 py-2 flex justify-center">
    <p class="font-medium">
      Copyright © {{ currentYear }} Nacional Auto
    </p>
  </div>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap');
h1,h2 {
  font-family: "Protest Strike", serif;
  font-weight: 400;
  font-style: normal;
}
.background {
  background-image: url("/images/pattern-dark.png");
}
</style>
