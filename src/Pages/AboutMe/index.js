import PostModel from "Components/PostModel";
import coverPicture from 'assets/sobre_mim_capa.png';
import styles from './AboutMe.module.css';
import picture from 'assets/picture.jpg';

const AboutMe = () => {
    return (
        <PostModel cover={coverPicture} title="Sobre Mim">
            <h3 className={styles.subtitle}>Olá, eu sou a Natália!</h3>
            <img src={picture} alt="Foto da Natália Curti" className={styles.pictureAboutMe}/>
        </PostModel>       
    )
}

export default AboutMe;