import React from 'react'

export default function RegisterPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html lang='en'>
      <body>
        <main>
          {children}
        </main>
      </body>

    </html>
  )

};