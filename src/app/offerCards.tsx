"use client";

import { SimpleGrid, Card, Text, Container, Button, Collapse } from '@mantine/core';
import classes from './offerCards.module.css';
import React, { useState } from 'react';

const mockdata = [
    {
      title: 'Kategoria: AM',
      description: 'PRAWO JAZDY OD 14-stu LAT! \n (Szkolenie można rozpocząć 3 miesiące przed osiągnięciem minimalnego wieku) \n Uprawnia do kierowania: \n a) motorowerem, \n b) czterokołowcem lekkim (czterokołowiec, którego masa własna nie przekracza 350 kg i konstrukcja ogranicza prędkość jazdy do 45 km/h) \n Szkolenie: \n Teoria - 10 godz. lekcyjnych \n Praktyka - 10 godz. zegarowych \n UWAGA! \n Jeżeli posiadasz kartę motorowerową wydaną przed 19 stycznia 2013 roku i ukończyłeś 14 lat, możesz wymienić ją odpłatnie na prawo jazdy kategorii AM z pominięciem egzaminu państwowego, w tym celu należy udać się do Wydziału Komunikacji Starostwa Powiatowego i dokonać formalności związanych z wymianą dokumentu!',
    },
    {
      title: 'Kategoria: A1',
      description: 'PRAWO JAZDY OD 16-stu LAT! \n Uprawnia do kierowania: \n a) motocyklem o pojemności skokowej silnika nieprzekraczającej 125 cm3, mocy nieprzekraczającej 11 kW i stosunku mocy do masy własnej nieprzekraczającym 0,1 kW/kg, \n b) motocyklem trójkołowym o mocy nieprzekraczającej 15 kW, \n c) pojazdami określonymi dla prawa jazdy kategorii AM. \n Szkolenie: \n Teoria - 30 godz. lekcyjnych \n Praktyka - 20 godz. zegarowych \n UWAGA! \n Mając kat. A1 przechodząc na kat. A nie zdaje się teorii (tylko praktyka), a jazdy ulegają zmniejszeniu o 10 godz. zegarowych (do wyjeżdżenia 10 godzin zegarowych)!',
    },
    {
      title: 'Kategoria: A2',
      description: 'PRAWO JAZDY OD 18-stu LAT! \n Uprawnia do kierowania: \n a) motocyklem o mocy nieprzekraczającej 35 kW i stosunku mocy do masy własnej nieprzekraczającym 0,2 kW/kg, przy czym nie może on powstać w wyniku wprowadzenia zmian w pojeździe o mocy przekraczającej dwukrotność mocy tego motocykla, \n b) motocyklem trójkołowym o mocy nieprzekraczającej 15 kW, \n c) pojazdami określonymi dla prawa jazdy kategorii AM. \n Szkolenie: \n Teoria - 30 godz. lekcyjnych \n Praktyka - 20 godz. zegarowych \n UWAGA! \n Osoba posiadająca prawo jazdy kat. A1 rozpoczynająca szkolenie na kat. A2 zostaje zwolniona z części teoretycznej oraz nie zdaje egzaminu państwowego z tego zakresu. \n Egzamin zdaje tylko z części praktycznej. \n Osoba posiadające kategorię A2 przez okres 2 lat, może starać sie o uzyskanie uprawnień do kierowania pojazdami określonymi w prawo jazdy kategorii A w wieku 20 lat!',
    },
    {
      title: 'Kategoria: A',
      description: 'PRAWO JAZDY OD 24 LAT! \n (Szkolenie można rozpocząć 3 miesiące przed osiągnięciem minimalnego wieku) \n Uprawnia do kierowania: \n a) motocyklem, \n b) pojazdami określonymi dla prawa jazdy kategorii AM. \n Szkolenie: \n Teoria - 30 godz. lekcyjnych \n Praktyka - 20 godz. Zegarowych',
    },
    {
        title: 'Kategoria: B',
        description: 'PRAWO JAZDY OD 18-stu LAT! \n (Szkolenie można rozpocząć 3 miesiące przed osiągnięciem minimalnego wieku) \n Uprawnia do kierowania: \n a) pojazdem samochodowym o dopuszczalnej masie całkowitej nieprzekraczającej 3,5 t, z wyjątkiem autobusu i motocykla, \n b) zespołem pojazdów złożonym z pojazdu, o którym mowa w lit. a, oraz z przyczepy lekkiej, \n c) zespołem pojazdów złożonym z pojazdu, o którym mowa w lit. a, oraz z przyczepy innej niż lekka, o ile łączna dopuszczalna masa całkowita zespołu tych pojazdów nie przekracza 4 250 kg, z zastrzeżeniem ust. 2, \n d) pojazdami określonymi dla prawa jazdy kategorii AM. \n Szkolenie: \n Teoria - 30 godz. lekcyjnych \n Praktyka - 30 godz. zegarowych',
    },
    {
        title: 'Kategoria: B-AUTOMAT',
        description: 'RAWO JAZDY OD 18-stu LAT! \n (Szkolenie można rozpocząć 3 miesiące przed osiągnięciem minimalnego wieku) \n Uprawnia do kierowania: \n Pojazdem określonym odpowiednio w prawie jazdy dla kategorii B z automatyczną skrzynią biegów. \n Szkolenie: \n Teoria - 30 godz. lekcyjnych \n Praktyka - 30 godz. zegarowych',
    },
    {
        title: 'Kategoria: B+E',
        description: 'Uprawnia do kierowania: \n a) zespołem pojazdów składającym się z pojazdu określonego w kategorii B o dopuszczalnej masie całkowitej do 3,5 tony oraz przyczepy, przy czym dopuszczalna masa całkowita ciągniętej przyczepy nie może przekraczać 3,5 t. \n b) ciągnikiem rolniczym z przyczepą (przyczepami) oraz pojazdem wolnobieżnym z przyczepą (przyczepami). Jednak zespół pojazdów nie może składać się z więcej niż trzech pojazdów. \n Szkolenie: \n Praktyka – 15 godzin zegarowych',
    },
    {
        title: 'Kategoria: T',
        description: 'PRAWO JAZDY OD 16-stu LAT ! \n Szkolenie można rozpocząć 3 miesiące przed osiągnięciem minimalnego wielu. \n Uprawnia do kierowania: \n a) ciągnikiem rolniczym lub pojazdem wolnobieżnym; \n b)zespołem pojazdów złożonych z ciągnika rolniczego z przyczepą (przyczepami) lub pojazdem wolnobieżnym z przyczepą (przyczepami) \n c) pojazdami określonymi dla prawa jazdy kategorii AM \n Szkolenie: \n Teoria – 30 godzin lekcyjnych \n Praktyka – 20 godzin zegarowych',
    },
    {
        title: 'Kategoria: C',
        description: 'PRAWO JAZDY OD 21 LAT ! \n Uprawnia do kierowania: \n a) pojazdem samochodowym o dopuszczalnej masie całkowitej przekraczającej 3,5 t, z wyjątkiem autobusu, \n b) zespołem pojazdów złożonym z pojazdu, o którym mowa w lit. a, oraz z przyczepy lekkiej, \n c) pojazdami określonymi dla prawa jazdy kategorii AM. \n Szkolenie: \n Teoria - 20 godz. lekcyjnych \n Praktyka - 30 godz. zegarowych',
    },
    {
        title: 'Kategoria: C+E',
        description: 'Uprawnia do kierowania: \n Pojazdem określonym odpowiednio w prawie jazdy dla kategorii C łącznie z przyczepą (przyczepami) \n Szkolenie: \n Praktyka – 25 godzin zegarowych',
    },
  ];

const mockdataOther = [
    {
        title: 'Kwalifikacja wstępna',
        description: 'Kierowcy, którzy uzyskali prawo jazdy kategorii D1, D1 + E, D lub D + E po 10 września 2008 oraz kategorii C1, C1 + E, C lub C + E po 10 września 2009 r., chcąc wykonywać zawód kierowcy, muszą przystąpić do szkolenia w ramach kwalifikacji wstępnej. \n Przedsiębiorca lub inny podmiot wykonujący przewóz drogowy może zatrudnić kierowcę, jeżeli osoba ta ukończyła: \n 18 lat – w przypadku kierowcy prowadzącego pojazd samochodowy, dla którego wymagane jest posiadanie prawa jazdy kategorii C lub C + E, o ile uzyskał on odpowiednią kwalifikację wstępną/C1 lub C1 + E, o ile uzyskał on odpowiednią kwalifikację wstępną przyspieszoną, \n 21 lat – w przypadku kierowcy prowadzącego pojazd samochodowy, dla którego wymagane jest posiadanie prawa jazdy kategorii C lub C + E, o ile uzyskał on odpowiednią kwalifikację wstępną przyspieszoną/ D lub D + E, o ile uzyskał on odpowiednią kwalifikację wstępną/D1 lub D1 + E, o ile przewóz wykonywany jest na liniach regularnych, których trasa nie przekracza 50 km i o ile kierowca uzyskał odpowiednią kwalifikację wstępną przyspieszoną, \n 23 lata – w przypadku kierowcy, prowadzącego pojazd samochodowy, dla którego wymagane jest posiadanie prawa jazdy kategorii D lub D + E, o ile uzyskał on odpowiednią kwalifikację wstępną przyspieszoną. \n Szkolenie w ramach kwalifikacji wstępnej prowadzone jest w formie kursu obejmującego zarówno zajęcia teoretyczne jak i praktyczne. Zajęcia te realizowane są w dwóch blokach programowych tj. dla części podstawowej – dla prawa jazdy wszystkich kategorii (195 godzin teorii) oraz dla części specjalistycznej – dla prawa jazdy kategorii: C, C + E, C1 i C1 + E lub D, D + E, D1 i D1 + E (65 godzin teorii), 16 godzin w ruchu drogowym oraz 4 godziny zajęć praktycznych z jazdy w warunkach specjalnych. \n Kurs e-learningowy !! \n Dużym udogodnieniem dla naszych kursantów jest możliwość przeprowadzenia części szkolenia metodą e-kursu, tzn. ćwiczenia prowadzone są pod nadzorem trenera-wykładowcy przy użyciu komputera na terenie ośrodka, co oznacza, że każdej osobie przydzielony jest indywidualny identyfikator pozwalający na bezpośrednie śledzenie jego postępów w nauce, przeprowadzenie zajęć w zakresie wymaganym programem szkolenia oraz przeprowadzenie testu sprawdzającego wiedzę po każdym module szkolenia okresowego Zajęcia w systemie e-learningu nie wymagają spotkań w grupach - szkolenia odbywają się tokiem indywidualnym w zależności możliwości czasowych kursantów. \n System e-learningowy zapewnia całkowitą zgodność szkolenia z ministerialnym rozporządzeniem.', 
    },
    {
        title: 'Kwalifikacja wstępna przypieszona',
        description: 'Kierowcy, którzy uzyskali prawo jazdy kategorii D1, D1 + E, D lub D + E po 10 września 2008 oraz kategorii C1, C1 + E, C lub C + E po 10 września 2009 r., chcąc wykonywać zawód kierowcy, muszą przystąpić do szkolenia w ramach kwalifikacji wstępnej. \n Przedsiębiorca lub inny podmiot wykonujący przewóz drogowy może zatrudnić kierowcę, jeżeli osoba ta ukończyła: \n 18 lat – w przypadku kierowcy prowadzącego pojazd samochodowy, dla którego wymagane jest posiadanie prawa jazdy kategorii C lub C + E, o ile uzyskał on odpowiednią kwalifikację wstępną/C1 lub C1 + E, o ile uzyskał on odpowiednią kwalifikację wstępną przyspieszoną, \n 21 lat – w przypadku kierowcy prowadzącego pojazd samochodowy, dla którego wymagane jest posiadanie prawa jazdy kategorii C lub C + E, o ile uzyskał on odpowiednią kwalifikację wstępną przyspieszoną/ D lub D + E, o ile uzyskał on odpowiednią kwalifikację wstępną/D1 lub D1 + E, o ile przewóz wykonywany jest na liniach regularnych, których trasa nie przekracza 50 km i o ile kierowca uzyskał odpowiednią kwalifikację wstępną przyspieszoną, \n 23 lata – w przypadku kierowcy, prowadzącego pojazd samochodowy, dla którego wymagane jest posiadanie prawa jazdy kategorii D lub D + E, o ile uzyskał on odpowiednią kwalifikację wstępną przyspieszoną. \n Szkolenie w ramach kwalifikacji wstępnej przyspieszonej prowadzone są w formie kursu obejmującego zarówno zajęcia teoretyczne jak i praktyczne realizowane w dwóch blokach programowych, tj.części podstawowej – dla prawa jazdy wszystkich kategorii (97 godzin teorii) oraz części specjalistycznej – dla prawa jazdy kategorii: C, C + E, C1 i C1 + E lub D, D + E, D1 i D1 + E (33 godziny teorii), 8 godzin zajęć w ruchu drogowym oraz 2 godziny zajęć praktycznych z jazdy w warunkach specjalnych. \n Kurs e-learningowy !! \n Dużym udogodnieniem dla naszych kursantów jest możliwość przeprowadzenia części szkolenia metodą e-kursu, tzn. ćwiczenia prowadzone są pod nadzorem trenera-wykładowcy przy użyciu komputera na terenie ośrodka, co oznacza, że każdej osobie przydzielony jest indywidualny identyfikator pozwalający na bezpośrednie śledzenie jego postępów w nauce, przeprowadzenie zajęć w zakresie wymaganym programem szkolenia oraz przeprowadzenie testu sprawdzającego wiedzę po każdym module szkolenia okresowego Zajęcia w systemie e-learningu nie wymagają spotkań w grupach - szkolenia odbywają się tokiem indywidualnym w zależności możliwości czasowych kursantów. \n System e-learningowy zapewnia całkowitą zgodność szkolenia z ministerialnym rozporządzeniem.', 
    },
    {
        title: 'Szkolenia okresowe',
        description: 'Szkolenie okresowe obejmuje 35 godzin. \n Kurs e-learningowy !! \n Dużym udogodnieniem dla naszych kursantów jest możliwość przeprowadzenia części szkolenia metodą e-kursu, tzn. ćwiczenia prowadzone są pod nadzorem trenera-wykładowcy przy użyciu komputera na terenie ośrodka, co oznacza, że każdej osobie przydzielony jest indywidualny identyfikator pozwalający na bezpośrednie śledzenie jego postępów w nauce, przeprowadzenie zajęć w zakresie wymaganym programem szkolenia oraz przeprowadzenie testu sprawdzającego wiedzę po każdym module szkolenia okresowego Zajęcia w systemie e-learningu nie wymagają spotkań w grupach - szkolenia odbywają się tokiem indywidualnym w zależności możliwości czasowych kursantów.System e-learningowy zapewnia całkowitą zgodność szkolenia z ministerialnym rozporządzeniem.', 
    }
]

interface OfferCardProps {
  title: string;
  description: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description}) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Card p="lg" radius="md" className={classes.card} style={{ border: 'solid 1px black' }}>
      <Text className={classes.title} mt={5}>
        {title}
      </Text>
      <Button onClick={() => setShowDescription((o) => !o)}>
        {showDescription ? 'Ukryj opis' : 'Pokaż opis'}
      </Button>
      <Collapse in={showDescription}>
        <p style={{ whiteSpace: 'pre-line', marginTop: '1rem' }}>
          {description}
        </p>
      </Collapse>
    </Card>
  );
};

export function OfferCards() {
    // const cards = mockdata.map((offer) => (
    //   <Card key={offer.title} p="md" radius="md" component="a" href="#" className={classes.card} style={{ border: 'solid 1px black' }}>
    //     <Text className={classes.title} mt={5}>
    //       {offer.title}
    //     </Text>
    //     <p style={{ whiteSpace: 'pre-line'}}>
    //       {offer.description}
    //     </p>
    //   </Card>
    // ));
    const cards = mockdata.map((offer) => (
      <OfferCard key={offer.title} {...offer} />
    ));

    const cardsOther = mockdataOther.map((offer) => (
        <OfferCard key={offer.title} {...offer} />
      ));
  
    return (
      <Container py="xl" id="oferta">
        <div style={{ width: '100%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nasza oferta:</h1>
        </div>
        <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
        <div style={{ width: '100%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Pozostałe szkolenia:</h1>
        </div>
        <SimpleGrid cols={{ base: 1, sm: 3 }}>{cardsOther}</SimpleGrid>
      </Container>
    );
  }