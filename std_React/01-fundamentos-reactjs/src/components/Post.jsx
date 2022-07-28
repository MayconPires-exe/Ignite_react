import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.author} src="https://github.com/MayconPires-exe.png" />
          <div className={styles.authorInfo}>
            <strong>Maycon Pires</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time title="28 de Julho às 07:17" dateTime="202-07-11 07:17:20">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
    );
}