import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
// import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './imagens/Foto_Capa.jpg';
import FotoLabenu from './imagens/labenu.png';
import FotoMercedes from './imagens/mbb-logo.jpg';
// import ImagemEmail from './imagens/email.jpeg';
// import ImagemEndereco from './imagens/endereço.png';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto} 
          nome="Jaime" 
          descricao="Oi, eu sou Jaime Epifanio. Sou aluno de Desenvolvimento Web Full Stack na Labenu. Sou entusiasta do assunto e adoro tecnologia da informação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    {/* <div ClassName='contatos'>
      <CardPequeno 
          imagem={ImagemEmail} 
          email="Email: jaime-epifanio@hotmail.com" 
        />

      <CardPequeno 
          imagem={ImagemEndereco} 
          endereco="Endereço: Rua Vila Ema, 109" 
        />
        </div> */}

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={FotoLabenu} 
          nome="Estudante de Desenvolvimento Full Stack na Labenu" 
          descricao="Atualmente estou realizando os meus estudos em Desenvolvimento de Software na Labenu, me dedicando em período integral ao curso e a área de Desenvolvimento." 
        />
        
        <CardGrande 
          imagem={FotoMercedes} 
          nome="Operador de Logística na Mercedes Benz do Brasil" 
          descricao="Atuava na área de Gerenciamento de Qualidade dos Fornecedores & Circulação 
          de peças, no setor de Circulação de peças eu fazia o levantamento do estoque 
          produtivo a ser analisado devido à criticidade, logo após eu fazia o inventário 
          permanente e apontamento do estoque produtivo em campo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
