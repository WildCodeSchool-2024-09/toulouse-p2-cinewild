import "../styles/Card.css"
export default function Card() {
  return (
    <>
    <div className="modale">
        <h2>Les aventures de Michel</h2>
            <img className="image" src="https://www.francetvinfo.fr/pictures/tBSJb5oKtabeL7V0_oilRvGAFcs/0x0:795x1080/fit-in/720x/2018/11/23/php2eCjHe.jpg" alt="" />
        <section className="section">
            <div className="date">
            <h3>Date de sortie</h3>
            <p>2017</p>
            </div>
            <div className="origine">
            <h3>Origine</h3>
            <p>Allemagne</p>
            </div>
            <div className="note">
            <h3>Note globale</h3>
            <p>****</p>
            </div>
            <div className="type">
            <h3>Genre</h3>
            <p>Comedie</p>
            </div>
            <div className="resume">
            <h3>Résumé</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsum amet dolor at nisi mollitia odit tenetur quae quas culpa.</p>
            </div>
        </section>

        <button className="buttonf" type="button">Fermer</button>


    </div>
    </>
  )
}
