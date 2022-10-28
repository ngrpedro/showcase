import Navbar from "./patterns/Navbar";
import CardSession from "./sessions/CardSession";
import CTASession from "./sessions/CTASession";
import Hero from "./sessions/Hero";
import InfoSesison from "./sessions/InformationsSession/InfoSesison";
import InfoSession02 from "./sessions/InformationsSession/InfoSession02";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardSession />
      <CTASession />
      <InfoSesison />
      <InfoSession02 />
    </div>
  );
}

export default App;
