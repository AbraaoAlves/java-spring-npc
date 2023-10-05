import imgUrl from '../assets/pexels-photo-583847.jpeg'

export default function  Index() {
  return (<div style={{background: 'url(' + imgUrl + ')'}}>
    <p id="zero-state">
      <h1>GESTÃO DE USUÁRIOS</h1>
      <br />
      <br />
      <br />
      Veja nosso codigo em {" "}
      <a href="https://github.com/AbraaoAlves/java-spring-npc/">
        npc project
      </a>
      .
    </p>

  </div>
  );
}