import { useNavigate } from "react-router-dom";

export default function PlaygroundPage() {
    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center align-middle relative'>
                <PGPHeader/>
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
