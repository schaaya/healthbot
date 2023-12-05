import React , { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBlock from './textBlock';
import './App.css';

function App() {
  const clearAndCloseChat = () => {
    // Check if dfMessenger is available (loaded)
    if (window.dfMessenger) {
      // Clear the chat
      window.dfMessenger.clear();
      
      // Close the chat
      window.dfMessenger.close();
    }
  };

  // Run the function on component mount (when the app is loaded)
  useEffect(() => {
    clearAndCloseChat();
  }, []);
  
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="logoland"> DEARBUD</div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>

      <df-messenger
        location="us-central1"
        project-id="chatbot-mentalhealth"
        agent-id="bd07ff89-1227-44e2-a2aa-e75c97f596e2"
        language-code="en">
        <df-messenger-chat-bubble chat-title="DearBud" />
      </df-messenger>

    </div>
  );
}

export default App;
