<template>
  <div class="relative overflow-hidden py-12">
    <div class="absolute inset-0 bg-gradient-to-b from-red-600/70 to-green-700/70 z-0"></div>
    <div class="container relative z-10">
      <h1 class="text-4xl font-bold text-yellow-300 mb-8 carnaval-title">Wat We Doen</h1>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="carnaval-card bg-red-600/90 p-8">
          <h2 class="text-2xl font-bold text-yellow-300 mb-4 carnaval-title">Carnaval</h2>
          <p class="text-white text-lg">Als C.V. De Stokers organiseren we verschillende carnavalsactiviteiten door het jaar heen. Van de traditionele carnavalsviering tot speciale evenementen, we zorgen voor een onvergetelijke tijd!</p>
          <ul class="mt-4 text-white space-y-2 list-disc pl-5">
            <li>Deelname aan de grote optocht</li>
            <li>Kroegentochten</li>
            <li>Dansmarieke Festijn</li>
            <li>Struitbal</li>
            <li>Snertconcert</li>
          </ul>
        </div>
        
        <div class="carnaval-card bg-green-700/90 p-8">
          <h2 class="text-2xl font-bold text-yellow-300 mb-4 carnaval-title">Evenementen</h2>
          <p class="text-white text-lg">Naast carnaval organiseren we ook andere feestelijke evenementen. Van zomerfeesten tot speciale thema-avonden, er is altijd wel iets te beleven bij De Stokers!</p>
          <ul class="mt-4 text-white space-y-2 list-disc pl-5">
            <li>Zomer BBQ</li>
            <li>Themafeesten</li>
            <li>Uitstapjes</li>
            <li>Leden bijeenkomsten</li>
            <li>Feestelijke activiteiten</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 bg-yellow-300 rounded-lg p-8 shadow-lg carnaval-card">
        <h2 class="text-3xl font-bold text-red-600 mb-4 carnaval-title">Komende Evenementen</h2>
        <div class="grid md:grid-cols-3 gap-6 mt-6">
          <div class="bg-white/90 p-4 rounded-lg shadow">
            <div class="text-red-600 font-bold">APR</div>
            <div class="text-2xl font-bold">22</div>
            <h3 class="font-bold mt-2">Ledenvergadering</h3>
            <p class="text-gray-600">20:00 - Ons Thuys</p>
          </div>
          
          <div class="bg-white/90 p-4 rounded-lg shadow">
            <div class="text-red-600 font-bold">MEI</div>
            <div class="text-2xl font-bold">15</div>
            <h3 class="font-bold mt-2">Thema Vrijdag</h3>
            <p class="text-gray-600">21:00 - Ons Thuys</p>
          </div>
          
          <div class="bg-white/90 p-4 rounded-lg shadow">
            <div class="text-red-600 font-bold">JUN</div>
            <div class="text-2xl font-bold">10</div>
            <h3 class="font-bold mt-2">Zomer BBQ</h3>
            <p class="text-gray-600">15:00 - Locatie volgt</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 