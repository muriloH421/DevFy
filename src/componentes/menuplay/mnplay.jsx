import styles from "./mnplay.module.css"
import setaesq from "../../assets/Vector.svg"
import setadir from "../../assets/Vector (1).svg"
import tod from "../../assets/image12.svg"
import rap from "../../assets/image 13.svg"
import allout from "../../assets/image 14.svg"
import rockclassics from "../../assets/image 15.svg"
import chill from "../../assets/image 16.svg"
import latino from "../../assets/image 17.svg"

const Menu = () => {
  return (
    <div className={styles.playlistmaster}>
       <div className={styles.setinhas}>
      <div className={styles.setas}>
         <img src={setaesq} alt="left" />
       <img src={setadir} alt="rigth" />
       </div>
       <div className={styles.logi}>

        <button>inscrever-se</button>
        </div>
        <div className={styles.join}>
        <button>Entrar</button>
          </div>
       </div>
  


  <div className={styles.showallmaster}>
    <h2>Playlists do Spotfy</h2>
    <div className={styles.showall}>
      <h4>Mostrar tudo</h4>
    </div>
    <div className={styles.msicall}>
    <div className={styles.musicCard}>
      <img src={tod} alt="as melhores de hj" />
      <h3>Today Top Hits</h3>
      <h5>Taylor Swift on top of hottest 50!
      </h5>
    </div>


    <div className={styles.musicCard1}>
      <img src={rap} alt="trocar a imagem" />
      <h3>RapCaviar</h3>
      <h5>Music from Gucci Mane ,Kodak Black a...
      </h5>
    </div>



    <div className={styles.musicCard2}>
      <img src={allout} alt="trocar a imagem" />
      <h3>All Out 2010s</h3>
      <h5>The biggest songs of the 2010s
      </h5>
    </div>

  <div className={styles.musicCard3}>
      <img src={rockclassics} alt="trocar a imagem" />
      <h3>Rock Classics</h3>
      <h5>Rock legends & epic songs that continue t..
      </h5>
    </div>

  <div className={styles.musicCard4}>
      <img src={chill} alt="trocar a imagem" />
      <h3>Chill</h3>
      <h5>Kick back to the best and recent chill...
      </h5>
    </div>

    <div className={styles.musicCard5}>
      <img src={latino} alt="trocar a imagem" />
      <h3>Viva Latino</h3>
      <h5>Todays top Latin hits, elevando nuestra..
      </h5>
    </div>
    

    </div>
  </div>
    </div>
  )
}

export default Menu