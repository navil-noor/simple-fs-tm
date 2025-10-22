// client/app/layout.js

import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Global Bootstrap CSS

// Next.js standard Metadata definition
export const metadata = {
  title: 'Simple FS Task Manager',
  description: 'A full-stack task manager built with Next.js, Express, and SQL.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* for later adding */}
        <div className="container mt-5">
            {children}
        </div>
      </body>
    </html>
  );
}