import green from '../../src/assets/produtores/green.png';
import salad from '../../src/assets/produtores/salad.png';
import jennyJack from '../../src/assets/produtores/jenny-jack.png';
import grow from '../../src/assets/produtores/grow.png';
import potager from '../../src/assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        }
    ]
}

export default produtores;