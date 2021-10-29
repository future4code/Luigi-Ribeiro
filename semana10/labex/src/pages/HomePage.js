
import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <button>Viagens</button>
      <button>Administrador</button>
    </div>
  );
}

export default HomePage;