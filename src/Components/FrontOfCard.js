import { useContext } from "react"
import { Front, CardName, CardNumber, CardExp } from "../Elements.styles"
import Card from "../images/bg-card-front.png"
import { Store } from "../Store/Store"


const FrontOfCard = () => {

    const { data } = useContext(Store)

    return <Front>
        <CardNumber>{data.cardNumber}</CardNumber>
        <CardName>{data.name}</CardName>
        <CardExp>{data.MM + "/" + data.YY}</CardExp>
        <img src={Card} alt="" />
    </Front>
}

export default FrontOfCard