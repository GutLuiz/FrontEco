// Homepage.jsx
import React from 'react';
import './homepage.css'; // Certifique-se de que o caminho está correto
import ecochargeLogo from '../../assets/ecologo.png'; // Ajuste o caminho da imagem
import carroImage from '../../assets/carro1.jpg'; // Ajuste o caminho da imagem
import postoS1Image from '../../assets/postoS1jpg.jpg'; // Ajuste o caminho da imagem

const Homepage = () => {
    return (
        <div id="wrapper">

            {/* Intro */}
            <section className="intro">
                <header>
                    <img src={ecochargeLogo} alt="logo" />
                    <p>Descubra o futuro da mobilidade sustentável</p>
                    <ul className="actions">
                        <li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
                    </ul>
                </header>
                <div className="content">
                    <span className="image fill" data-position="center">
                        <img src={carroImage} alt="" />
                    </span>
                </div>
            </section>

            <section id="first">
                <header>
                    <h2>Sobre nós</h2>
                </header>
                <div className="content">
                    <p>
                        <strong>Uma revolução no modo como pensamos sobre carros:</strong> Nossa empresa é dedicada a fornecer soluções inovadoras e sustentáveis para o carregamento de carros elétricos. Estamos comprometidos em oferecer um sistema de agendamento conveniente, utilizando o mapa de Belém para localizar nossos postos de carregamento.
                    </p>
                    <span className="image main"><img src={postoS1Image} alt="" /></span>
                </div>
            </section>

            <section>
                <header>
                    <h2>Nossos Serviços</h2>
                </header>
                <div className="content">
                    <p>
                        <strong>Reservas de Ponto de Carregamento:</strong> Nossa plataforma oferece um sistema de agendamento conveniente e flexível para carregamento de carros elétricos, proporcionando uma experiência tranquila para os usuários.
                    </p>
                    <ul className="feature-icons">
                        <li className="icon solid fa-bolt">Velocidade de Recarga</li>
                        <li className="icon solid fa-signal">Avaliações e Feedback</li>
                        <li className="icon solid fa-cog">Suporte</li>
                        <li className="icon solid fa-map-marker-alt">Mapa Interativo</li>
                    </ul>
                    <p>Os usuários também receberão notificações quando o posto de sua preferência estiver disponível.</p>
                </div>
            </section>

            <section>
                <header>
                    <h2>Localização em Tempo Real</h2>
                </header>
                <div className="content">
                    <p>
                        Com a nossa tecnologia de localização em tempo real, você nunca mais ficará sem energia no seu veículo elétrico. Basta acessar o nosso site para visualizar os postos de carregamento disponíveis mais próximos de você, com informações atualizadas sobre disponibilidade de vagas e preços.
                    </p>
                    <section>
                        <header>
                            <h3>Ferramenta de Localização</h3>
                            <p>A ferramenta de localização garante que você encontre um posto de carregamento que atenda às suas necessidades de forma rápida e eficiente, seja para uma recarga rápida no caminho ou para planejar rotas mais longas. Além disso, você pode verificar a ocupação em tempo real antes de chegar ao local.</p>
                        </header>
                        <div className="content">
                            <div className="gallery">
                                {/* Aqui você pode adicionar imagens da galeria, se necessário */}
                            </div>
                        </div>
                    </section>

                    <section>
                        <header>
                            <h3>Sustentabilidade e Impacto Ambiental: Carregue Seu Veículo com Responsabilidade</h3>
                            <p>Aqui, nos preocupamos com o futuro do planeta. Além de facilitar o acesso à energia para veículos elétricos, estamos comprometidos em promover uma mobilidade sustentável que reduza drasticamente o impacto ambiental causado pelos transportes convencionais. Ao escolher nossas estações de carregamento, você está contribuindo diretamente para um futuro mais limpo e ecológico.</p>
                        </header>
                        <div className="content">
                            <div className="gallery">
                                <p><strong>Benefícios Ambientais de Carregar com a Gente:</strong></p>
                                <ul>
                                    <li><strong>Redução de Emissões de CO₂:</strong> Ao optar pelo uso de veículos elétricos, você ajuda a diminuir as emissões de gases poluentes que contribuem para o aquecimento global. Nossas estações fornecem eletricidade de fontes renováveis sempre que possível, aumentando ainda mais o impacto positivo.</li>
                                    <li><strong>Economia de Combustíveis Fósseis:</strong> Cada vez que você carrega o seu veículo elétrico em uma de nossas estações, está ajudando a reduzir a dependência de combustíveis fósseis, como gasolina e diesel, que são altamente poluentes.</li>
                                    <li><strong>Relatórios de Sustentabilidade:</strong> Oferecemos a você dados sobre o impacto positivo de suas escolhas. A cada sessão de carregamento, você poderá ver quantas emissões de CO₂ foram evitadas, ajudando a conscientizar e motivar para um uso contínuo e responsável.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <header>
                            <h3>Métodos de Pagamento</h3>
                        </header>
                        <div className="content">
                            <div className="gallery">
                                <p>Carregar o seu veículo elétrico nunca foi tão simples! Oferecemos várias opções de pagamento para garantir que você tenha uma experiência conveniente e sem complicações em todas as nossas estações de carregamento. Confira os métodos disponíveis:</p>
                                <ul>
                                    <li><strong>Cartão de Crédito e Débito:</strong> Pague de forma rápida e segura com os principais cartões do mercado.</li>
                                    <li><strong>Carteiras Digitais:</strong> Use serviços como Google Pay, Apple Pay e PayPal para um pagamento ainda mais ágil.</li>
                                    <li><strong>Pagamentos por QR Code:</strong> Realize pagamentos instantâneos diretamente no local, basta escanear o código com seu smartphone.</li>
                                </ul>
                                <p>Todos os pagamentos são processados de maneira segura, e você ainda pode acompanhar seu histórico de carregamentos e faturas diretamente no nosso site.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </section>

            <section>
                <header>
                    <h2>Quer fazer um agendamento?</h2>
                </header>
                <div className="content">
                    <p>Simplifique sua experiência de carregamento com nosso recurso de agendamento de recarga. Com essa funcionalidade, você pode planejar suas sessões de carregamento de forma prática e conveniente, garantindo que seu veículo elétrico esteja sempre pronto para rodar.</p>
                    <ul className="actions">
                        <li><a href="#" className="button primary large">Clique Aqui</a></li>
                    </ul>
                </div>
            </section>

            <section>
                <header>
                    <h2>Suporte ao Cliente</h2>
                </header>
                <div className="content">
                    <p>Nosso compromisso vai muito além de apenas fornecer energia para seu veículo elétrico — ele está em garantir que cada interação com nossas estações seja fácil, confiável e sem preocupações. Sabemos que, em meio a uma rotina agitada, a última coisa que você quer enfrentar são obstáculos ou incertezas, especialmente quando o assunto é mobilidade. Por isso, nos dedicamos a oferecer um suporte ao cliente de excelência, disponível sempre que você precisar, para assegurar que cada jornada, desde a primeira até a última, seja impecável.</p>
                    <form>
                        <ul className="actions">
                            <li><input type="submit" value="Chat Suporte" className="button primary" /></li>
                        </ul>
                    </form>
                </div>
                <footer>
                    <ul className="items">
                        <li>
                            <h3>Email</h3>
                            <a href="#">Ecochargebr@gmail.com</a>
                        </li>
                        <li>
                            <h3>SAC</h3>
                            <a href="#">(91)940028922</a>
                        </li>
                        <li>
                            <h3>Nossas Redes</h3>
                            <ul className="icons">
                                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </footer>
            </section>
        </div>
    );
}

export default Homepage;
