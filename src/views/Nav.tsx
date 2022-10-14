import { useNavigate } from "react-router-dom";

export default function Nav() {
      const navigate = useNavigate();

      const handleHome: () => void = () => {
            navigate('/')
      }
      const handleNewGame: () => void = () => {
            navigate('/new-game')
      }
      const handleAllGames: () => void = () => {
            navigate('/all-games')
      }

      return (
            <header>
                  <h2>REWIND</h2>
            </header>
      )
}