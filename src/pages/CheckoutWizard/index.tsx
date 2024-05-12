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
            element: <Address onNext={onNext(0)} />
        },
        {
            path: "checkout",
            element: <Checkout onPrevious={onPrevious(1)} onNext={onNext(1)} />
        },
        {
            path: "thank-you",
            element: <div></div>
        }
    ]

    return (
        <Wrapper>
            <Routes>
                {steps.map(step => {
                    return <Route key={step.path} path={step.path} element={step.element} />
                })}
                <Route index element={<Navigate to={steps[0].path} />} />
                <Route path="*" element={<Navigate to={steps[0].path} />} />
            </Routes>
        </Wrapper>
    )
}

export default Wizard
