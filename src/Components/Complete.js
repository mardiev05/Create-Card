import { CompletedCont, CheckedImg, ThankText, Text } from "../Elements.styles"
import Comp from "../images/bg-card-front.png"


function Complete() {
    return <CompletedCont>
        <CheckedImg src={Comp} alt="" />
        <ThankText>THANK YOU!</ThankText>
        <Text>We've added your card detailes</Text>
    </CompletedCont>;
}

export default Complete;
