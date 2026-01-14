import React from 'react';
import Hero from '../components/Hero';
import SectionCard from '../components/SectionCard';
import { Users, Music, UserPlus, Instagram } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pb-20">
        
        <div>
          <SectionCard
            title="Over ons"
            description="Cv De Stokers! Opgericht in 2021 en nou al niet meer weg te denken uit de carnavalsscene. Onze stamkroeg is 'Ons Thuys', waar de deur altijd openstaat vur een goeie tijd en warmkes samenzijn."
            icon={Users}
            accentColor="red"
          />
        </div>

        <div>
          <SectionCard
            title="Wa We Doen"
            description="Wij zèn d'r altijd bij: van 't Dansmarieke Festijn tot de Grote Optocht, de Kroegentocht, 't Struitbal, Snertconcert, en zelfs 'n Thema Huwelijk!"
            icon={Music}
            accentColor="yellow"
            actionLabel="Bekijk activiteiten"
            actionHref="/activities"
          />
        </div>

        <div>
          <SectionCard
            title="Kom D'r Bij!"
            description="Wil jij ok deel uitmaken van de meest feestelijke club van Rooi? Meld je aan en feest mee!"
            icon={UserPlus}
            actionLabel="Word Lid!"
            actionHref="/membership"
            accentColor="red"
          />
        </div>

        <div>
          <SectionCard
            title="Blijf Op De Hoogte"
            description="Volg ons op Instagram @Cv.destokers vur de leste nieuwtjes en foto's van onze avonturen. Hebde vragen of ideeën? Schroom niet en laat 't ons weten! 💭"
            icon={Instagram}
            actionLabel="Volg ons op Instagram"
            actionHref="https://instagram.com"
            isExternal={true}
            accentColor="green"
          />
        </div>

      </div>
    </>
  );
};

export default Home;