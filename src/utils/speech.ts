export function speak(text: string) {
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
}