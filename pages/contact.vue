<template>
  <div class="container py-12">
    <h1 class="text-4xl font-bold text-white mb-8">Contact</h1>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-white mb-4">Contactgegevens</h2>
        <div class="space-y-4 text-white">
          <p>
            <strong>Adres:</strong><br>
            [Vul hier het adres in]
          </p>
          <p>
            <strong>Telefoon:</strong><br>
            [Vul hier het telefoonnummer in]
          </p>
          <p>
            <strong>E-mail:</strong><br>
            [Vul hier het e-mailadres in]
          </p>
        </div>
      </div>
      <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-white mb-4">Stuur ons een bericht</h2>
        <form class="space-y-4">
          <div>
            <label for="name" class="block text-white mb-2">Naam</label>
            <input type="text" id="name" class="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300">
          </div>
          <div>
            <label for="email" class="block text-white mb-2">E-mail</label>
            <input type="email" id="email" class="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300">
          </div>
          <div>
            <label for="message" class="block text-white mb-2">Bericht</label>
            <textarea id="message" rows="4" class="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"></textarea>
          </div>
          <button type="submit" class="w-full bg-yellow-300 text-black font-bold py-3 px-6 rounded hover:bg-yellow-400 transition">
            Verstuur
          </button>
        </form>
      </div>
    </div>
  </div>
</template> 