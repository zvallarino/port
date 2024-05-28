// app/layout.js
import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'My Portfolio',
  description: 'Showcasing my projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-blue-500 text-white text-center">
          © 2024 My Portfolio
        </footer>
      </body>
    </html>
  );
}