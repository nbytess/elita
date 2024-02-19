"use client";

import { Image, Container, Title, Button, Group, Text } from '@mantine/core';
import classes from './hero.module.css';

export function Hero() {

  const scrollToSection = () => {
    const oferta = document.getElementById('oferta');

    if (oferta) {
      oferta.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <Container size="md" id="info">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Elita <span className={classes.highlight}>Łupice</span> Ośrodek szkolenia kierowców
              </Title>
              <Text mt="md">
              Chcesz zrobić prawo jazdy? Podszkolić się? Witamy na stronie Ośrodka Szkolenia Kierowców ELITA. Zapraszamy Państwa na profesjonalny kurs prawa jazdy. Ośrodek Szkolenia ELITA oferuje najlepszą naukę jazdy w mieście.
              </Text>
              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control} onClick={scrollToSection}>
                  Zobacz ofertę
                </Button>
              </Group>
            </div>
            <Image src="/car.png" className={classes.image} alt="" />
          </div>
        </Container>
      );
}