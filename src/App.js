/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import YemekIcon from './yemekIcon.svg'
import yemekVerileri from './yemekler.json'

// JSON verilerinden rastgele üç yemek seçimi
const rastgeleIndeksler = [];
while (rastgeleIndeksler.length < 3) {
  const rastgeleIndeks = Math.floor(Math.random() * yemekVerileri.length);
  if (!rastgeleIndeksler.includes(rastgeleIndeks)) {
    rastgeleIndeksler.push(rastgeleIndeks);
  }
}

const rastgeleYemekler = rastgeleIndeksler.map((indeks) => yemekVerileri[indeks]);

function App() {
  return (
    <div className="container px-5">
      <div className='baslikKutusu mt-4 p-2'>
        <h3 className='text-center text-white'>Bugün Ne Pişirsem?</h3>
      </div>
      <p className='text-acikYesil text-center p-2 mt-3'>
        ‘Bugün Ne Pişirsem’ diye düşünmekten yorulduysanız doğru adrestesiniz!
      </p>
      <div className='container mt-3 p-2'>
        <div className='row'>
          {rastgeleYemekler.map((yemek) => (
            <div key={yemek.id} className='col-md-12 mt-3'>
              <div className='container yemekKutusu p-4'>
                <div className='d-flex justify-content-around align-items-center'>
                  <div>
                    <h3 className='text-acikYesil'>{yemek.name}</h3>
                    <a className='text-acikYesil' href='#'>Tarifi görmek için buraya tıkla.</a>
                  </div>
                  <div>
                    <img src={YemekIcon} alt='Yemek İkon' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className='container'>
        <p className='text-center text-acikYesil mt-4'>Geliştiren: <a href='https://github.com/yigittaskin'>YGT</a></p>
      </footer>
    </div>
  );
}

export default App;
