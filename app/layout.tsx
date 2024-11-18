import React from 'react';
import './globals.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <link rel="shortcut icon" href="/logoGreen.png" type="image/x-icon" />
     
      <body>
        {children}
      </body>
    </html>
  );
}
