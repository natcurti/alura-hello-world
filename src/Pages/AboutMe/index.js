import PostModel from "Components/PostModel";
import coverPicture from 'assets/sobre_mim_capa.png';
import styles from './AboutMe.module.css';
import picture from 'assets/picture.jpg';

const AboutMe = () => {
    return (
        <PostModel cover={coverPicture} title="Sobre Mim">
            <h3 className={styles.subtitle}>Olá, eu sou a Natália!</h3>
            <img src={picture} alt="Foto da Natália Curti" className={styles.pictureAboutMe}/>
            <p className={styles.text}>Meu nome é Natalia, tenho 28 anos e atualmente estou cursando Sistemas de Informação. Estou me especializando em Desenvolvimento Front-End e procuro uma oportunidade de estágio na área.</p>
            <p className={styles.text}>Além da faculdade, também sou estudante da Alura e da DIO. Sou apaixonada por estudar e também sou apaixonada por tecnologia e estou constantemente buscando me aprimorar e desenvolver minhas habilidades.</p>
            <p className={styles.text}>Sou uma pessoa proativa, com forte senso de responsabilidade e comprometida com a qualidade do meu trabalho. Tenho facilidade de trabalhar em equipe e estou sempre disposta a aprender coisas novas.</p>
        </PostModel>       
    )
}

export default AboutMe;