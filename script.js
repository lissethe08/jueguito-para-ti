body {
  margin: 0;
  padding: 0;
  background-color: #ffd4ec;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #b20069;
}

#juego {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-top: 2px dashed #fff;
  border-bottom: 2px dashed #fff;
}

#personaje {
  position: absolute;
  bottom: 40px;
  left: 50px;
  width: 100px; /* más grande */
  image-rendering: pixelated;
}

.saltar {
  animation: salto 0.5s ease;
}

@keyframes salto {
  0% { bottom: 40px; }
  50% { bottom: 150px; }
  100% { bottom: 40px; }
}

#suelo {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #38b000; /* verde pasto */
  image-rendering: pixelated;
}

#contador {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 18px;
}
