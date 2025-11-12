<template>
  <div class="relative overflow-hidden py-12">
    <div class="absolute inset-0 bg-gradient-to-b from-red-600/70 to-green-700/70 z-0"></div>
    <div class="container relative z-10">
      <h1 class="text-4xl font-bold text-yellow-300 mb-8 carnaval-title">Kom D'r Bij!</h1>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="carnaval-card bg-red-600/90 p-8">
          <h2 class="text-2xl font-bold text-yellow-300 mb-4 carnaval-title">Word Lid van De Stokers</h2>
          <p class="text-white text-lg mb-4">
            Lid worden van C.V. De Stokers is keisimpel! Vul het formulier in en vur slechts €11,11 per half jaar bende deel van de leukste carnavalsvereniging van Sint-Oedenrode!
          </p>
          <ul class="text-white space-y-2 mb-6 list-disc pl-5">
            <li>Toegang tot alle evenementen</li>
            <li>Deelname aan speciale activiteiten</li>
            <li>Een eigen Stokers-embleem</li>
            <li>Gezelligheid en plezier!</li>
          </ul>
          <p class="text-yellow-300 font-bold">Iedereen is welkom bij de Stokers! 👋</p>
        </div>
        
        <div class="bg-yellow-300 p-8 rounded-lg shadow-lg carnaval-card">
          <h2 class="text-2xl font-bold text-red-600 mb-6 carnaval-title">Aanmeldformulier</h2>
          <form class="space-y-4">
            <div>
              <label for="name" class="block text-gray-800 font-bold mb-2">Naam</label>
              <input type="text" id="name" class="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500">
            </div>
            <div>
              <label for="email" class="block text-gray-800 font-bold mb-2">E-mail</label>
              <input type="email" id="email" class="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500">
            </div>
            <div>
              <label for="phone" class="block text-gray-800 font-bold mb-2">Telefoon</label>
              <input type="tel" id="phone" class="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500">
            </div>
            <div>
              <label for="address" class="block text-gray-800 font-bold mb-2">Adres</label>
              <input type="text" id="address" class="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500">
            </div>
            <div>
              <label for="message" class="block text-gray-800 font-bold mb-2">Bericht (optioneel)</label>
              <textarea id="message" rows="4" class="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500"></textarea>
            </div>
            <div class="pt-4">
              <button type="submit" class="w-full bg-red-600 text-white font-bold py-3 px-6 rounded hover:bg-red-700 transition relative overflow-hidden group">
                <span class="relative z-10">Aanmelden voor €11,11</span>
                <span class="absolute inset-0 h-full w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-white text-lg">Vragen over lidmaatschap? Neem contact met ons op via <a href="mailto:info@stokers.nl" class="text-yellow-300 hover:underline">info@stokers.nl</a></p>
      </div>
    </div>
  </div>
</template> 