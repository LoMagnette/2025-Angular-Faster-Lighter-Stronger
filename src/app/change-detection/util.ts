
export const getBackgroundColor= () => {
  const randomByte = () => randomNumber(0, 255)
  const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
  const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`
  return randomCssRgba();
}

export const getRandomPalette = () => {
  const palette = [
    {bg:`rgb(255,0,0)`, color:'#FFF', glow:'0 0 25px rgba(255,0,0, 0.7);'},
    {bg:`rgb(0,255,0)`, color:'#FFF', glow:'0 0 25px rgba(0,255,0, 0.7);'},
    {bg:`rgb(0,0,255)`, color:'#FFF', glow:'0 0 25px rgba(0,0,255, 0.7);'},
    {bg:`rgb(255,255,0)`, color:'#000', glow:'0 0 25px rgba(255,255,0, 0.7);'},
    {bg:`rgb(0,255,255)`, color:'#000', glow:'0 0 25px rgba(0,255,255, 0.7);'},
    {bg:`rgb(255,0,255)`, color:'#000', glow:'0 0 25px rgba(255,0,255, 0.7);'},
    {bg:`rgb(0,128,128)`, color:'#FFF', glow:'0 0 25px rgba(0,128,128, 0.7);'},
    {bg:`rgb(128,0,255)`, color:'#FFF', glow:'0 0 25px rgba(128,0,255, 0.7);'},
    {bg:`rgb(0,128,255)`, color:'#FFF', glow:'0 0 25px rgba(0,128,255, 0.7);'},
    {bg:`rgb(255,0,128)`, color:'#FFF', glow:'0 0 25px rgba(255,0,128, 0.7);'},
    {bg:`rgb(128,0,128)`, color:'#FFF', glow:'0 0 25px rgba(128,0,128, 0.7);'},
    {bg:`rgb(128,128,0)`, color:'#FFF', glow:'0 0 25px rgba(128,128,0, 0.7);'},
    {bg:`rgb(0,0,128)`, color:'#FFF', glow:'0 0 25px rgba(0,0,128, 0.7);'},
    {bg:`rgb(0,128,0)`, color:'#FFF', glow:'0 0 25px rgba(0,128,0, 0.7);'},
    {bg:`rgb(128,0,0)`, color:'#FFF', glow:'0 0 25px rgba(128,0,0, 0.7);'},
  ];
  return palette[randomNumber(0,14)]


}

const randomNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);
