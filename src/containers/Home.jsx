// Init
import React from 'react';

// Importing Components
import ElementSelector from '../components/ElementSelector.jsx';
import Jodit from '../components/Jodit.jsx';
import ElementEditor from '../components/ElementEditor.jsx';

// Home Component
export default function Home() {
  return (
    <div className="home_container">
      <ElementSelector />
      <Jodit />
      <ElementEditor />
    </div>
  );
}
