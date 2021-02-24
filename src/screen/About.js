import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <section id="encartJeux">
        <h1>A propos</h1>
        <p>
          Green Peas le site de sensibilisation de la pollution engendrée par la
          production et le transport des aliments.
        </p>

        <h3 className="padBot-025rem">Sources</h3>

        <ul>
          <li>
            Données de l'impact environnemental :{" "}
            <a href="https://api.gouv.fr/les-api/api_agribalyse">AGRYBALYSE</a>
          </li>
          <li>
            ️Citation de l'intro :
            <ul>
              <li>
                <a href="https://www.lemonde.fr/">Le Monde</a>
              </li>
              <li>
                <a href="https://www.planetoscope.com/">Planetoscope</a>
              </li>
              <li>
                <a href="https://www.greenpeace.fr/">Greenpeace</a>
              </li>
              <li>
                <a href="https://www.forest-trends.org/">Forest Trends</a>
              </li>
              <li>
                <a href="http://www.fao.org/">Fao</a>
              </li>
              <li>
                <a href="https://blogs.worldbank.org/">World Bank Blogs</a>
              </li>
              <li>
                <a href="https://www.socialter.fr/">Socialter</a>
              </li>
            </ul>
          </li>
          <li>
            Image fruits et légumes de saison :{" "}
            <a href="https://www.biocoop.fr/">Biocoop</a>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default About;
