import { FormContainer, Form, Label, Inputs, ExpErrors, CVCError, Button } from "../Elements.styles"
import { useState, useContext, useRef, useEffect } from "react"
import Complete from "./Complete"
import { Store } from "../Store/Store"



const Input = () => {
    const ref = useRef()
    const { setData } = useContext(Store)

    const [values, setValues] = useState({})
    const [err, setErr] = useState({})
    const [compl, setCompl] = useState(true)

    useEffect(() => {
        compl && ref.current.focus()
    }, [])

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (!values.MM || values.MM > 12 || values.MM < 1 || values.MM === "00") {
            setErr({
                MM: "MM is incorrect"
            })
        } else if (!values.YY || values.YY > 99 || values.YY < 1 || values.YY === "00") {
            setErr({
                YY: "YY is incorrect"
            })
        } else if (!values.CVC || values.CVC === "000") {
            setErr({
                CVC: "CVC is incorrect"
            })
        } else {
            setData(values)
            setErr(null)
            e.target.reset()
            setCompl(false)
        }
        console.log(compl)

    }


    return <FormContainer>
        <Form onSubmit={onSubmitHandler}>
            {compl ? <>
                <div className="cardholdername inp">
                    <Label htmlFor="name">CARDHOLDER NAME</Label>
                    <input type="text" id="name" name="name" onChange={onChangeHandler} ref={ref} placeholder="Cardholder Name" required />
                </div>
                <div className="cardnumber inp">
                    <Label htmlFor="cardNumber">CARD NUMBER</Label>
                    <input type="number" id="cardNumber" name="cardNumber" onChange={onChangeHandler} placeholder="cardNumber" />
                    <ExpErrors>{err?.cardNumber}</ExpErrors>
                </div>
                <div className="expDate inp">
                    <Label htmlFor="expDate">EXP DATE & CVC</Label>
                    <Inputs>
                        <input type="number" id="expDate" name="MM" onChange={onChangeHandler} placeholder="MM" />
                        <ExpErrors>{err?.MM}</ExpErrors>
                        <input type="number" id="expDate" name="YY" onChange={onChangeHandler} placeholder="YY" />
                        <ExpErrors>{err?.YY}</ExpErrors>
                        <input type="number" id="expDate" name="CVC" onChange={onChangeHandler} placeholder="CVC" />
                        <CVCError>{err?.CVC}</CVCError>
                    </Inputs>
                </div></> : <Complete />}
            <Button type="submit">Confirm</Button>
        </Form>




    </FormContainer>
}

export default Input