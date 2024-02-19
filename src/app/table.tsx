"use client";

import { Table, Container } from '@mantine/core';

const data = [
    {
        title: "AM",
        price: "1300,00 zł.",
        priceHour: "70,00 zł."
    },
    {
        title: "A1",
        price: "2700,00 zł.",
        priceHour: "130,00 zł."
    },
    {
        title: "A2",
        price: "2900,00 zł.",
        priceHour: "140,00 zł."
    },
    {
        title: "A",
        price: "2900,00 zł.",
        priceHour: "140,00 zł."
    },
    {
        title: "B",
        price: "3000,00 zł.",
        priceHour: "100,00 zł."
    },
    {
        title: "B - Automat",
        price: "3200,00 zł.",
        priceHour: "120,00 zł."
    },
    {
        title: "B1",
        price: "3000,00 zł.",
        priceHour: "100,00 zł."
    },
    {
        title: "B+E",
        price: "2000,00 zł.",
        priceHour: "120,00 zł."
    },
    {
        title: "T",
        price: "2000,00 zł.",
        priceHour: "80,00 zł."
    },
    {
        title: "C",
        price: "4000,00 zł.",
        priceHour: "150,00 zł."
    },
    {
        title: "C+E",
        price: "4000,00 zł.",
        priceHour: "160,00 zł."
    },
]

const dataOther = [
    {
      title: "Kwalifikacja Wstępna",
      price: "5200,00 zł. z egzaminem",
    },
    {
      title: "Kwalifikacja Wstępna Przyśpieszona",
      price: "3500,00 zł. z egzaminem",
    },
    {
      title: "Szkolenia Okresowe Kierowców",
      price: "600,00 zł.",
    },
    {
      title: "Wózki Widłowe",
      price: "800,00 zł.",
    },
    {
      title: "Wózki jezdniowe unoszące ze zmiennym wysięgnikiem",
      price: "1200,00 zł. / 900,00 zł.",
    }
]

export function TablePrices() {
    const rows = data.map((row) => {
        return (
          <Table.Tr style={{ border: 'solid 1px black', borderCollapse: 'collapse' }} key={row.title}>
            <Table.Td style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>{row.title}</Table.Td>
            <Table.Td style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>{row.price}</Table.Td>
            <Table.Td style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>{row.priceHour}</Table.Td>
          </Table.Tr>
        );
      });

    const rowsOther = dataOther.map((row) => {
      return (
        <Table.Tr style={{ border: 'solid 1px black', borderCollapse: 'collapse' }} key={row.title}>
          <Table.Td style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>{row.title}</Table.Td>
          <Table.Td style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>{row.price}</Table.Td>
        </Table.Tr>
      );
    })

      return (
        <Container py="xl" id="cennik">
        <div style={{ width: '100%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Cennik:</h1>
        </div>
          <Table verticalSpacing="xs" style={{ border: 'solid 1px black', borderCollapse: 'collapse' }}>
            <Table.Thead>
              <Table.Tr style={{ border: 'solid 1px black', borderCollapse: 'collapse' }}>
                <Table.Th style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>Kategorie</Table.Th>
                <Table.Th style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>Cena za kurs</Table.Th>
                <Table.Th style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>Cena za dodatkową godzinę</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        <div style={{ width: '100%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Cennik szkoleń:</h1>
        </div>
        <Table verticalSpacing="xs" style={{ border: 'solid 1px black', borderCollapse: 'collapse' }}>
            <Table.Thead>
              <Table.Tr style={{ border: 'solid 1px black', borderCollapse: 'collapse' }}>
                <Table.Th style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>Szkolenia</Table.Th>
                <Table.Th style={{ textAlign: 'center', border: 'solid 1px black', borderCollapse: 'collapse' }}>Cena</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rowsOther}</Table.Tbody>
          </Table>
        </Container>
      );
}