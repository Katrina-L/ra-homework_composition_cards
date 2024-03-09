import './App.css'
import { Cards, CardsBody } from './components/Cards'

function App() {
    return (
        <>
            <Cards img={"../img/Лисенок.jpg"}>
                <CardsBody 
                    title={"Card Title"} text={"Some quick example text to build on the card title and make up the bulk of the card's content"} link={"#"}
                />
            </Cards>
            <CardsBody 
                title={"Special title treatment"}
                text={"With supporting text below as a natural lead-in to additional content"}
                link={"#"} />
        </>
    )
}

export default App
