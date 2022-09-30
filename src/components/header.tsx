import { useNavigate } from "react-router-dom"
export default function header() {

        const navigate = useNavigate();
        function eventHandler() {
                navigate('/start')
        }
        return(
                <nav>
                        <button onClick={eventHandler}></button>
                </nav>
        )
}