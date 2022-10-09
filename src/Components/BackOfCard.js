import { useContext } from "react"
import { Back, CVC } from "../Elements.styles"
import Card from "../images/bg-card-back.png"
import { Store } from "../Store/Store"


const BackOfCard = () => {

    const { data } = useContext(Store)


    return <Back>
        <CVC>{data.CVC}</CVC>
        <img src={Card} alt="" />
    </Back>
}


export default BackOfCard