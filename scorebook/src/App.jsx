import './assets/scss/main.scss';
import './components/table/Table';
import Table from './components/table/Table';
import logo from './assets/images/7-wonders-logo.png';

function App() {
    return (
        <div className='scorebook'>
            <header>
                <img src={logo} alt='7 Wonders' className='scorebook__logo' />
            </header>
            <Table />
        </div>
    );
}

export default App;
