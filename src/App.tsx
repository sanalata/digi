import React from 'react';
import { Chat } from './components/Chat';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">DigiKoç</h1>
          <p className="text-gray-600">LGS Hazırlık Eğitim Koçunuz</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Chat />
      </main>
    </div>
  );
}

export default App;