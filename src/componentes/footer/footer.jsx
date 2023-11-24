import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footermaster}>
      <h4>TESTAR O PREMIUM DE GRAÇA</h4>
      <h4>
        inscreva-se para curtir música ilimitada e podcasts só com alguns
        anúncios. Não precisa de cartão de crédito.
      </h4>
      <h3>Desenvolvido por Pietro.</h3>
      <div className={styles.subgrat}>
        <button>inscreva-se grátis</button>
      </div>
      <div>
        <p>feito com 💖 por murilo</p>
      </div>
    </div>
  );
};

export default Footer;
