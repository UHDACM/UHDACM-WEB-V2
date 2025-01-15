import { useNavigate } from "react-router-dom";
import PersonTile from "../components/PersonTile/PersonTile";
import Transition from "../components/Transitions/Transition";
import { useState } from "react";

export default function PlaygroundPage() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center align-middle relative'>
                <PGPHeader/>
                <button onClick={() => setToggle(!toggle)} style={{position: 'absolute', bottom: 20, border: '1px solid #0004'}}>Toggle {toggle}</button>
                <Transition type='horizontalExpand' toggle={toggle}>
                    <div style={{width: 20, height: 20, backgroundColor: 'red'}}/>
                </Transition>
            </div>
        </>
    );
}

function PGPHeader() {
    const navigate = useNavigate();
    return (
        <>
            <div className='absolute top-2 left-2'>
                <button onClick={() => navigate('/')} className='border-gray-300'>Back</button>
            </div>
            <div className='absolute top-5'>
                <p>Put components you wish to test in <b>PlaygroundPage.tsx</b></p>
            </div>
        </>
    )
}
