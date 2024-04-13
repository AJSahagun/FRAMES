import React from 'react'
import Register from './page';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html lang='en'>
      <body>
        <main>
        <Register/>
        </main>
      </body>

    </html>
  )

};