"use client";

import { Container, Group, Anchor } from '@mantine/core';
import classes from './footer.module.css';
import { MouseEvent } from 'react';
import Image from 'next/image';

const links = [
    { link: '/info', label: 'O nas' },
    { link: '/oferta', label: 'Oferta' },
    { link: '/cennik', label: 'Cennik' },
    { link: '/kontakt', label: 'Kontakt' },
]

export function FooterSimple() {

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault(); 
    const section = document.getElementById(id.replace('/', ''));

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
    const items = links.map((link) => (
        <Anchor<'a'>
          c="dimmed"
          key={link.label}
          href={link.link}
          onClick={(event: any) =>
            handleLinkClick(event, link.link)
          }
          size="sm"
        >
          {link.label}
        </Anchor>
      ));
    
      return (
        <div className={classes.footer}>
          <Container className={classes.inner}>
            <Image src="/elita-logo.png" height={150} width={250} />
            <Group className={classes.links}>{items}</Group>
          </Container>
        </div>
      );
}