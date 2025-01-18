import { useNavigate } from "react-router-dom";
import Transition from "../components/Transition/Transition";
import { useState } from "react";
import PersonTile from "../components/PersonTile/PersonTile";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";


export default function PlaygroundPage() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center align-middle relative'>
                <PGPHeader/>
                <PersonTile/>
            </div>
        </>
    );
}

{/* <button onClick={() => setToggle(!toggle)} style={{position: 'absolute', bottom: 20, border: '1px solid #0004'}}>Toggle: {toggle?'on':'off'}</button>
<Transition delay={0} easing='inOutQuart' type='diagonal' numFrames={100} transitionSpeedMS={1000} toggle={toggle} cardStyle={{ backgroundColor: 'grey', width: 200, height: 300, borderRadius: 5 }}>
    <div style={{width: 200, height: 200, backgroundColor: 'red'}}/>
    <p>Diagonal</p>
</Transition>
<div style={{width: 10, height: 10}}></div>
<Transition delay={0} easing='inOutQuart' type='wipe' numFrames={100} transitionSpeedMS={1000} toggle={toggle} cardStyle={{ backgroundColor: 'grey', width: 200, height: 300, borderRadius: 5 }}>
    <div style={{width: 200, height: 200, backgroundColor: 'red'}}/>
    <p>Wipe</p>
</Transition>
<div style={{width: 10, height: 10}}></div>
<Transition delay={0} easing='inOutQuart' type='horizontalExpand' numFrames={100} transitionSpeedMS={1000} toggle={toggle} cardStyle={{ backgroundColor: 'grey', width: 200, height: 300, borderRadius: 5 }}>
    <div style={{width: 200, height: 200, backgroundColor: 'red'}}/>
    <p>Horizontal Expand</p>
</Transition>
<div style={{width: 10, height: 10}}></div>
<div style={{width: 10, height: 10}}></div> */}


function PGPHeader() {
    const navigate = useNavigate();
    return (
        <>
            <div className='absolute bottom-2 left-2'>
                <button onClick={() => navigate('/')} className='border-gray-300'>Back</button>
            </div>
            <Navbar />
            {/* <Button label={'hello'} /> */}
        </>
    )
}
