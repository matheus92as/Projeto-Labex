import Router from "./routes/Router";
import {MainContainer} from './AppStyle'
import { ParallaxProvider } from "react-scroll-parallax";


function App() {
  return (
    <MainContainer>
      <ParallaxProvider>
        <Router/>
      </ParallaxProvider>
    </MainContainer>
  );
}

export default App;
