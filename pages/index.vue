<template>
  <div class="carnival-gradient-bg">
    <!-- Hero Section -->
    <section class="py-12 relative z-10">
      <div class="container">
        <div class="text-center">
          <img src="/logo.png" alt="De Stokers Logo" class="mx-auto w-64 h-64 mb-8 border-4 border-stokers-yellow rounded-full shadow-lg" />
          <h1 class="text-4xl md:text-6xl font-bold text-stokers-yellow mb-4 carnaval-title">C.V. De Stokers</h1>
          <p class="text-xl text-white max-w-3xl mx-auto">
            Vur alle carnavalsgekken en gezelligheidsdiëren in Sint-Oedenrode!
          </p>
        </div>
      </div>
    </section>

    <!-- Content Blocks -->
    <section class="py-12 relative z-10">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Over ons -->
          <div class="bg-opacity-80 bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 carnaval-card border-l-4 border-stokers-red">
            <h2 class="text-2xl font-bold mb-4 text-stokers-yellow carnaval-title">Over ons</h2>
            <p class="text-white text-lg">
              Cv De Stokers! Opgericht in 2021 en nou al niet meer weg te denken uit de carnavalsscene. 
              Onze stamkroeg is Ons Thuys, waar de deur altijd openstaat vur een goeie tijd en warmkes samenzijn.
            </p>
          </div>

          <!-- Wa We Doen -->
          <div class="bg-opacity-80 bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 carnaval-card border-l-4 border-stokers-yellow">
            <h2 class="text-2xl font-bold mb-4 text-stokers-yellow carnaval-title">Wa We Doen</h2>
            <p class="text-white text-lg">
              Wij zèn d'r altijd bij: van 't Dansmarieke Festijn tot de Grote Optocht, 
              de Kroegentocht, 't Struitbal, Snertconcert, en zelfs 'n Thema Huwelijk!
              En da's nog mar 't begin; buiten 't seizoen houwen we ok van 'n goeie BBQ in de zomer 
              en allerlei andere gezellige dingen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Blocks -->
    <section class="py-12 relative z-10">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Kom D'r Bij! -->
          <div class="bg-opacity-90 bg-gray-800 rounded-lg p-8 shadow-xl transform hover:scale-105 transition duration-300 relative overflow-hidden border-t-4 border-stokers-yellow">
            <div class="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-stokers-red rounded-full opacity-30 glow-red"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-stokers-green rounded-full opacity-30 glow-green"></div>
            <div class="relative z-10">
              <h2 class="text-3xl font-bold mb-4 text-stokers-red carnaval-title">Kom D'r Bij!</h2>
              <p class="text-white text-lg mb-6">
                Wil jij ok deel uitmaken van de meest feestelijke club van Rooi? 't Is keisimpel: ga bovenaan onze website naar 't aanmeldformulier 📝 en vur slechts enkele euro's per half jaar bende deel van de pret. Iedereen is welkom! 👋
              </p>
              <NuxtLink to="/lid-worden" class="inline-block bg-stokers-red text-white font-bold py-3 px-6 rounded hover:bg-red-700 transition-colors shadow-md">
                Word Lid!
              </NuxtLink>
            </div>
            <!-- Additional confetti -->
            <div class="absolute top-1/4 left-1/3 w-6 h-6 bg-stokers-yellow rounded-full opacity-40 glow-yellow"></div>
            <div class="absolute top-3/4 right-1/3 w-5 h-5 bg-stokers-red rounded-full opacity-40 glow-red"></div>
            <div class="absolute top-1/2 right-1/4 w-7 h-7 bg-stokers-green rounded-full opacity-40 glow-green"></div>
          </div>

          <!-- Blijf Op De Hoogte -->
          <div class="bg-opacity-90 bg-gray-800 rounded-lg p-8 shadow-xl transform hover:scale-105 transition duration-300 relative overflow-hidden border-t-4 border-stokers-green">
            <div class="absolute top-0 left-0 w-32 h-32 -mt-8 -ml-8 bg-stokers-green rounded-full opacity-30 glow-green"></div>
            <div class="absolute bottom-0 right-0 w-24 h-24 -mb-6 -mr-6 bg-stokers-red rounded-full opacity-30 glow-red"></div>
            <div class="relative z-10">
              <h2 class="text-3xl font-bold mb-4 text-stokers-green carnaval-title">Blijf Op De Hoogte 📱</h2>
              <p class="text-white text-lg mb-6">
                Volg ons op Instagram <a href="https://instagram.com/Cv.destokers" target="_blank" class="text-stokers-red hover:text-red-700 underline">@Cv.destokers</a> vur de leste nieuwtjes en foto's van onze avonturen. Hebde vragen of ideeën? Schroom niet en laat 't ons weten! 💭
              </p>
              <a href="https://instagram.com/Cv.destokers" target="_blank" class="inline-block bg-stokers-green text-white font-bold py-3 px-6 rounded hover:bg-green-800 transition-colors shadow-md">
                Volg ons op Instagram
              </a>
            </div>
            <!-- Additional confetti -->
            <div class="absolute top-1/3 right-1/3 w-8 h-8 bg-stokers-yellow rounded-full opacity-40 glow-yellow"></div>
            <div class="absolute top-2/3 left-1/4 w-6 h-6 bg-stokers-red rounded-full opacity-40 glow-red"></div>
            <div class="absolute bottom-1/4 right-1/2 w-5 h-5 bg-stokers-green rounded-full opacity-40 glow-green"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Floating Confetti -->
    <div class="confetti-container">
      <!-- First Wave -->
      <div v-for="i in 5" :key="'wave1-'+i" 
        class="confetti curled-ribbon" 
        :class="['confetti-' + ['red', 'blue', 'yellow', 'green'][i % 4]]"
        :style="`--delay: ${i * 0.8}s; --width: ${12 + i * 2}px; --height: ${45 + i * 3}px; --left: ${i * 20}%; --duration: ${13 + i}s;`">
      </div>

      <!-- Second Wave -->
      <div v-for="i in 5" :key="'wave2-'+i" 
        class="confetti ribbon" 
        :class="['confetti-' + ['blue', 'yellow', 'red', 'green'][i % 4]]"
        :style="`--delay: ${i * 0.6 + 0.4}s; --width: ${10 + i}px; --height: ${35 + i * 2}px; --left: ${10 + i * 20}%; --duration: ${11 + i}s;`">
      </div>

      <!-- Third Wave - Regular Strips -->
      <div v-for="i in 8" :key="'wave3-'+i" 
        class="confetti strip" 
        :class="['confetti-' + ['yellow', 'red', 'blue', 'green'][i % 4]]"
        :style="`--delay: ${i * 0.4 + 0.2}s; --width: ${5 + i}px; --height: ${18 + i * 2}px; --left: ${5 + i * 12}%; --duration: ${8 + i}s;`">
      </div>

      <!-- Fourth Wave - Angled Strips -->
      <div v-for="i in 8" :key="'wave4-'+i" 
        class="confetti angled-strip" 
        :class="['confetti-' + ['red', 'green', 'blue', 'yellow'][i % 4]]"
        :style="`--delay: ${i * 0.3 + 0.5}s; --width: ${6 + i}px; --height: ${20 + i * 2}px; --left: ${8 + i * 12}%; --duration: ${9 + i}s;`">
      </div>

      <!-- Fifth Wave - Small Pieces -->
      <div v-for="i in 12" :key="'wave5-'+i" 
        class="confetti tiny" 
        :class="['confetti-' + ['blue', 'red', 'yellow', 'green'][i % 4]]"
        :style="`--delay: ${i * 0.2}s; --size: ${3 + i % 3}px; --left: ${3 + i * 8}%; --duration: ${5 + i % 4}s;`">
      </div>

      <!-- Sixth Wave - Zigzag -->
      <div v-for="i in 6" :key="'wave6-'+i" 
        class="confetti zigzag" 
        :class="['confetti-' + ['yellow', 'blue', 'red', 'green'][i % 4]]"
        :style="`--delay: ${i * 0.7 + 0.3}s; --width: ${18 + i * 2}px; --height: ${36 + i * 2}px; --left: ${15 + i * 15}%; --duration: ${12 + i}s;`">
      </div>

      <!-- Seventh Wave - Mixed -->
      <div v-for="i in 10" :key="'wave7-'+i" 
        :class="[
          'confetti',
          i % 2 === 0 ? 'curled-ribbon' : 'zigzag',
          'confetti-' + ['red', 'blue', 'yellow', 'green'][i % 4]
        ]"
        :style="`--delay: ${i * 0.5 + 1}s; --width: ${15 + i}px; --height: ${40 + i * 2}px; --left: ${i * 10}%; --duration: ${14 + i % 3}s;`">
      </div>

      <!-- Eighth Wave - Fast Small Pieces -->
      <div v-for="i in 15" :key="'wave8-'+i" 
        class="confetti tiny" 
        :class="['confetti-' + ['yellow', 'red', 'blue', 'green'][i % 4]]"
        :style="`--delay: ${i * 0.15}s; --size: ${2 + i % 4}px; --left: ${2 + i * 7}%; --duration: ${4 + i % 3}s;`">
      </div>

      <!-- Ninth Wave - Extra Large Pieces -->
      <div v-for="i in 4" :key="'wave9-'+i" 
        class="confetti curled-ribbon" 
        :class="['confetti-' + ['red', 'yellow', 'blue', 'green'][i % 4]]"
        :style="`--delay: ${i * 1 + 2}s; --width: ${20 + i * 3}px; --height: ${50 + i * 4}px; --left: ${20 + i * 25}%; --duration: ${16 + i}s;`">
      </div>
    </div>
  </div>
</template>

<style scoped>
.carnival-gradient-bg {
  position: relative;
  min-height: 100vh;
  background-color: #121212;
  overflow: hidden;
}

.carnival-gradient-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(-45deg, 
    rgba(227, 30, 36, 0.6),     /* Brighter Red */
    rgba(31, 138, 31, 0.6),     /* Brighter Green */
    rgba(255, 211, 0, 0.6),     /* Brighter Yellow */
    rgba(128, 0, 128, 0.6)      /* Brighter Purple */
  );
  background-size: 400% 400%;
  z-index: 0;
  animation: gradientShift 15s ease infinite;
}

.glow-red {
  box-shadow: 0 0 15px 5px rgba(227, 30, 36, 0.4);
  animation: pulse 3s infinite;
}

.glow-green {
  box-shadow: 0 0 15px 5px rgba(31, 138, 31, 0.4);
  animation: pulse 4s infinite;
}

.glow-yellow {
  box-shadow: 0 0 15px 5px rgba(255, 211, 0, 0.4);
  animation: pulse 3.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}

/* Confetti animation */
.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.confetti {
  position: absolute;
  width: var(--width, 8px);
  height: var(--height, 16px);
  left: var(--left, 30%);
  top: -5%;
  opacity: 0.8;
  animation: fall var(--duration, 10s) linear infinite;
  animation-delay: var(--delay, 0s);
  transform-origin: center;
}

.confetti.tiny {
  width: var(--size, 4px);
  height: var(--size, 4px);
  border-radius: 2px;
  animation: fallTiny var(--duration, 6s) linear infinite;
}

.confetti.ribbon {
  width: var(--width, 10px);
  height: var(--height, 30px);
  border-radius: 100% 100% 0 0/40%;
  animation: fallRibbon var(--duration, 12s) linear infinite;
}

.confetti.curled-ribbon {
  width: var(--width, 15px);
  height: var(--height, 50px);
  border-radius: 50% 50% 20% 20%;
  animation: fallCurledRibbon var(--duration, 14s) ease-in-out infinite;
}

.confetti.strip {
  width: var(--width, 6px);
  height: var(--height, 20px);
  transform: skew(10deg, 10deg);
}

.confetti.angled-strip {
  width: var(--width, 8px);
  height: var(--height, 25px);
  transform: skew(-15deg, 15deg);
  animation: fallAngledStrip var(--duration, 10s) linear infinite;
}

.confetti.zigzag {
  width: var(--width, 20px);
  height: var(--height, 40px);
  clip-path: polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%, 15% 50%);
  animation: fallZigzag var(--duration, 13s) ease-in-out infinite;
}

.confetti-red {
  background: linear-gradient(45deg, #e31e24, #ff4d4d);
}

.confetti-green {
  background: linear-gradient(45deg, #1f8a1f, #4dff4d);
}

.confetti-yellow {
  background: linear-gradient(45deg, #ffd700, #ffeb3b);
}

.confetti-blue {
  background: linear-gradient(45deg, #1e90ff, #4d4dff);
}

@keyframes fallTiny {
  0% {
    top: -10%;
    transform: rotate(0deg) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
    transform: rotate(45deg) translateX(10px);
  }
  100% {
    top: 105%;
    transform: rotate(360deg) translateX(-10px);
    opacity: 0;
  }
}

@keyframes fallCurledRibbon {
  0% {
    top: -10%;
    transform: rotate(0deg) rotateX(0deg) rotateY(0deg) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
    transform: rotate(45deg) rotateX(45deg) rotateY(45deg) scale(1.2);
  }
  50% {
    transform: rotate(180deg) rotateX(90deg) rotateY(180deg) scale(1);
  }
  100% {
    top: 105%;
    transform: rotate(360deg) rotateX(180deg) rotateY(360deg) scale(1.2);
    opacity: 0;
  }
}

@keyframes fallAngledStrip {
  0% {
    top: -10%;
    transform: rotate(0deg) skew(-15deg, 15deg) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
    transform: rotate(45deg) skew(-15deg, 15deg) translateX(15px);
  }
  100% {
    top: 105%;
    transform: rotate(360deg) skew(-15deg, 15deg) translateX(-15px);
    opacity: 0;
  }
}

@keyframes fallZigzag {
  0% {
    top: -10%;
    transform: rotate(0deg) translateX(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
    transform: rotate(45deg) translateX(20px) scale(1.1);
  }
  50% {
    transform: rotate(180deg) translateX(-20px) scale(1);
  }
  100% {
    top: 105%;
    transform: rotate(360deg) translateX(0) scale(1.1);
    opacity: 0;
  }
}

@keyframes fall {
  0% {
    top: -10%;
    transform: rotate(0deg) rotateX(0deg) rotateY(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
    transform: rotate(45deg) rotateX(45deg) rotateY(45deg);
  }
  45% {
    transform: rotate(170deg) rotateX(-20deg) rotateY(180deg);
  }
  70% {
    transform: rotate(270deg) rotateX(90deg) rotateY(270deg);
  }
  100% {
    top: 105%;
    transform: rotate(360deg) rotateX(180deg) rotateY(360deg);
    opacity: 0;
  }
}

@keyframes fallRibbon {
  0% {
    top: -10%;
    transform: rotate(0deg) rotateX(0deg) rotateY(0deg) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
    transform: rotate(45deg) rotateX(45deg) rotateY(45deg) translateX(20px);
  }
  45% {
    transform: rotate(170deg) rotateX(-20deg) rotateY(180deg) translateX(-20px);
  }
  70% {
    transform: rotate(270deg) rotateX(90deg) rotateY(270deg) translateX(20px);
  }
  100% {
    top: 105%;
    transform: rotate(360deg) rotateX(180deg) rotateY(360deg) translateX(0);
    opacity: 0;
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style> 
