"use client";

import { useState } from 'react';
import { Container, Group, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import Image from 'next/image';
import { MouseEvent } from 'react';

const links = [
    { link: '/info', label: 'O nas' },
    { link: '/oferta', label: 'Oferta' },
    { link: '/cennik', label: 'Cennik' },
    { link: '/kontakt', label: 'Kontakt' },
]

export function Header() {
    let [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault(); 
      const section = document.getElementById(id.replace('/', ''));
  
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    let drawerContent = null;

    const items = links.map((link) => (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={(event) => {
          handleLinkClick(event, link.link);
          setActive(link.link);
          if(opened) {
            toggle();
          }
        }}
      >
        {link.label}
      </a>
    ));
  if (opened) {
    drawerContent = (
      <Drawer
        opened={true}
        onClose={toggle}
        position="right"
        title="Menu"
        padding="xl"
        size="xl"
      >
      <Group direction="column" spacing={0}>
            {items}
      </Group> 
      </Drawer>
    );
  }


    return (
        <header className={classes.header}>
          <Container size="md" className={classes.inner}>
            <Image src="/elita-logo.png" height={150} width={250} alt='Elita' />
             <Group gap={5} visibleFrom="xs">
              {items}
            </Group> 

            {drawerContent}
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Container>
        </header>
    );
}