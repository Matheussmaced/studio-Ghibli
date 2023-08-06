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
              <a href="https://www.anitube.vip/video/157359" target='_blank'> <p>Assistir agora</p> </a>
            </button>
          <button id='trailer'>
           <a href="https://www.youtube.com/watch?v=SgZI655GgHk&ab_channel=FailBoom" target='_blank'> <p>assista o trailer</p> </a>
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
