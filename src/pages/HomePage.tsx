import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div style={{backgroundColor: "#161618"}} className='w-screen h-screen flex items-center justify-center'>
            <button onClick={() => navigate('/playground')} className='border-gray-300'>To Playground</button>
        </div>
    );
}