import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Hero } from './sections/Hero';
import { LeadForm } from './sections/LeadForm';

function App() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-primary/30">
      <Hero />
      <LeadForm />

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900 border-dashed">
        <p>© 2024 Body & Food Blueprint. Todos os direitos reservados.</p>
      </footer>

      <ToastContainer />
    </main>
  );
}

export default App;
