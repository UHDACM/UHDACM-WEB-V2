import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";


export default function PlaygroundPage() {
    return (
        <>
            <div style={{backgroundColor: "#161618"}} className='w-screen h-screen flex items-center justify-center align-middle relative'>
                <PGPHeader/>
            </div>
        </>
    );
}

function PGPHeader() {
    const navigate = useNavigate();
    return (
        <>
            <div className='absolute bottom-2 left-2'>
                <button onClick={() => navigate('/')} className='border-gray-300'>Back</button>
            </div>
            <Navbar />
            <div style={{width: "20px", height: "300vh"}}></div>
            <Button label={'hello'} />
        </>
    )
}
