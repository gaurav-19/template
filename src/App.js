import './App.scss';

import NewMain from './components/new-main/NewMain';
import MainComponent from './components/main/MainComponent';
import NonDisclosureAgreement from './components/NonDisclosureAgreement/NonDisclosureAgreement';
import GstCalculator from './gst-calculator/gstCalculator';

function App() {
  return (
    <div>
      <GstCalculator />
    </div>
  );
}

export default App;
