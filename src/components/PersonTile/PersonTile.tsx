import { useEffect, useRef, useState } from 'react';
import './PersonTile.css';
import { sleep } from '../../scripts/tools';
import { easeInOutQuart, easeInOutSine } from '../../scripts/easingFunctions';
import LinkedInIcon from '../Icons/LinkedInIcon';
import XIcon from '../Icons/XIcon';

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
            <PersonTileExpanded open={open} setOpen={setOpen}/>
        </>
    );
}

const scaleBonus = 1.25;
function PersonTileExpanded({ open, setOpen, style }: { open: boolean, setOpen: (v: boolean) => void, style?: React.CSSProperties }) {
    const [percentage, setPercentage] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [active, setActive] = useState(false);
    const timeoutRef = useRef(-1);

    useEffect(() => {
        async function IncrementPercentage(forward: boolean, setValue: (v: number) => void) {
            let counter = percentage;
            while(true) {
                if ((open && counter >= 1) || (!open && counter <= 0)) {
                    setValue(open?1:0);
                    break;
                }
                counter = counter + (forward?0.025:-0.025);
                setValue(counter);
                await sleep(7);
            }
            setActive(forward);
        }
        clearTimeout(timeoutRef.current);
        if (open) {
            setActive(true);
            IncrementPercentage(open, setOpacity);
            timeoutRef.current = setTimeout(() => {
                IncrementPercentage(open, setPercentage);
            }, 200);
        } else {
            IncrementPercentage(open, setPercentage);
            timeoutRef.current = setTimeout(() => {
                IncrementPercentage(open, setOpacity);
            }, 200);
        }
    }, [open]);
    
    let adjustedOpacity = easeInOutQuart(opacity);
    let adjustedPercentage = easeInOutQuart(percentage);

    return (
        <div style={{opacity: adjustedOpacity, width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, backgroundColor: '#0004', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: active?100:-10}}>
            <div style={{height: 'auto', display: 'flex'}}>
                <div style={{cursor: 'pointer', position: 'relative', width: scaleBonus * 160 * adjustedPercentage, height: scaleBonus * 200, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: 'grey', overflow: 'hidden', ...style}}>
                    <img style={{height: '100%', objectFit: 'cover'}} src='/src/assets/Gael.png'/>
                </div>
                <div style={{ borderTopRightRadius: 10, borderEndEndRadius: 10, backgroundColor: 'white', width: scaleBonus * 300 * adjustedPercentage, height: 'auto', boxSizing: 'content-box', overflow: 'hidden'}}>
                    <div style={{margin: 10, marginLeft: 10 * adjustedPercentage, position: 'relative'}}>
                        <p style={{color: 'black', margin: 0, fontSize: '1.5rem', textWrap: 'nowrap'}}>Gael Cruz</p>
                        <p style={{color: 'black', margin: 0, fontSize: '1rem', textWrap: 'nowrap'}}>Mom smasher</p>
                        <LinkedInIcon/>
                        <XIcon onClick={() => setOpen(!open)} style={{ cursor: 'pointer', width: 30, height: 30, position: 'absolute', right: 0, top: 0 }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}