import React from "react";
import { useNavigate } from "react-router-dom"

export default function Home() {
      const navigate = useNavigate();

      

      return (
            <div className="home">
                  <h1>Rewind</h1>
                  <h2>game stats</h2>
                  <section>
                        <h3>Tio senaste spelen</h3>

                  </section>

            </div>
      )
}