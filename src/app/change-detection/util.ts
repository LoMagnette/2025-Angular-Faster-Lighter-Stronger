
export const getBackgroundColor= () => {
  const randomNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);
  const randomByte = () => randomNumber(0, 255)
  const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
  const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`
  return randomCssRgba();
}
