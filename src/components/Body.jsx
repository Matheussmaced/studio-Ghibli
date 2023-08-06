import ilustration from '../assets/img/StudioGhibli.png'
const Body = () => {
  return (
    <>
      <div id="containerBody">
        <div id="informs">
          <h3>HAYAO MIYAZAKI</h3>
          <h1>A VIAGEM DE CHIHIRO</h1>
          <p id="sinopse">
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>
            <button id="assistirAgora">
              <p>Assistir agora</p>
            </button>
          <button id='trailer'>
            <p>assista o trailer</p>
          </button>
        </div>

        <div id="img">
            <img src={ilustration} alt='Ilustração' id='ilustration' />
        </div>
      </div>
    </>
  );
};

export default Body;
