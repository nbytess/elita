import {
    Title,
    Stack,
    Container
  } from '@mantine/core';

import classes from './contact.module.css';
import { ContactIconsList } from './contactIcons';

export function Contact() {
    return (
        <Container className={classes.wrapper} id="kontakt">
          <Stack align="center" spacing={40}>
              <Title className={classes.title} order={2}>Kontakt:</Title>
              <ContactIconsList />
          </Stack>
        </Container>
      );
}