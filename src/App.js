
import './App.css';
import CompanyInfo from './CompanyInfo';
import LeadershipTeam from './LeadershipTeam';
import DevelopmentTeam from './DevelopmentTeam';
import MarketingTeam from './MarketingTeam';

function App() {
  return (
    <div className="App">
    <CompanyInfo/>
    <h1 className='Box-Title'>Meet Out Team</h1>
    <LeadershipTeam/>
    <DevelopmentTeam/>
    <MarketingTeam/>
    </div>
  );
}

export default App;
