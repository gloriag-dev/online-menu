import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Address } from "./Address/Address"
import { Checkout } from "./Checkout"
import { Wrapper } from "../../components/Wrapper/Wrapper"

const Wizard = () => {
    const navigate = useNavigate()
    const onNext = (currentIndex: number) => () => {
        navigate("./" + steps[currentIndex + 1].path)
    }

    const onPrevious = (currentIndex: number) => () => {
        navigate("./" + steps[currentIndex - 1].path)
    }

    const steps = [
        {
            path: "address",
            element: (
                <Wrapper>
                    <Address onNext={onNext(0)} />
                </Wrapper>
            )
        },
        {
            path: "checkout",
            element: (
                <Wrapper>
                    <Checkout onPrevious={onPrevious(1)} />
                </Wrapper>
            )
        }
    ]

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Routes>
                {steps.map(step => {
                    return <Route key={step.path} path={step.path} element={step.element} />
                })}
                <Route index element={<Navigate to={steps[0].path} />}/>
                <Route path="*" element={<Navigate to={steps[0].path} />} />
            </Routes>
        </div>
    )
}

export default Wizard
