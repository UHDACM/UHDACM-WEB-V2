import { useState } from 'react';
import './PersonTile.css';
import LinkedInIcon from '../Icons/LinkedInIcon';
import XIcon from '../Icons/XIcon';
import Transition from '../Transition/Transition';

export default function PersonTile({ style }: { style?: React.CSSProperties }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div onClick={() => setOpen(!open)} style={{cursor: 'pointer', position: 'relative', width: 160, height: 200, borderRadius: 10, backgroundColor: 'grey', overflow: 'hidden', ...style}}>
                <img style={{height: '100%', objectFit: 'cover'}} src='/src/assets/Gael.png'/>
                <div style={{ position: 'absolute', bottom: 0, left: 0, margin: 10 }}>
                    <p style={{color: 'white', margin: 0, fontSize: '1.25rem'}}>Gael Cruz</p>
                    <p style={{color: 'white', margin: 0, fontSize: '0.75rem'}}>Mom smasher</p>
                </div>
            </div>
            <PersonTileExpanded setOpen={setOpen} open={open}/>
        </>
    );
}

const scaleBonus = 1.25;
function PersonTileExpanded({ open, setOpen, style }: { open: boolean, setOpen: (v: boolean) => void, style?: React.CSSProperties }) {
    return (
        <Transition delayAfter={300} transitionSpeedMS={200} numFrames={50} type='fade' toggle={open} forceStyle={{ position: 'absolute', top: 0, left: 0, zIndex: 1000, width: '100vw', height: '100%' }}>
            <div style={{width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, backgroundColor: '#0004', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{height: 'auto', display: 'flex'}}>
                    <Transition transitionSpeedMS={300} hideOnToggleOff={false} type='wipe' toggle={open} delayBefore={200} delayAfter={100} easing='inOutQuart'>
                        <div style={{cursor: 'pointer', position: 'relative', height: scaleBonus * 200, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: 'grey', overflow: 'hidden', ...style}}>
                            <img style={{height: '100%', objectFit: 'cover'}} src='/src/assets/Gael.png'/>
                        </div>
                    </Transition>
                    <Transition transitionSpeedMS={400} delayBefore={200} hideOnToggleOff={false} type='wipe' toggle={open} easing='inOutQuart' forceStyle={{height: 200 * scaleBonus}}>
                        <div style={{ width: 400, borderTopRightRadius: 10, borderEndEndRadius: 10, backgroundColor: 'white', height: '100%', boxSizing: 'content-box', overflow: 'hidden'}}>
                            <div style={{margin: 10, position: 'relative'}}>
                                <p style={{color: 'black', margin: 0, fontSize: '1.5rem', textWrap: 'nowrap'}}>Gael Cruz</p>
                                <p style={{color: 'black', margin: 0, fontSize: '1rem', textWrap: 'nowrap'}}>Mom smasher</p>
                                <LinkedInIcon/>
                                <XIcon onClick={() => setOpen(!open)} style={{ cursor: 'pointer', width: 30, height: 30, position: 'absolute', right: 0, top: 0 }}/>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </Transition>
    );
}