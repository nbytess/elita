import '@mantine/core/styles.css'

import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core'

export const metadata = {
  title: 'Elita Łupice - Ośrodek Szkolenia Kierowców',
  description: '',
}

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  primaryColor: 'blue',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}