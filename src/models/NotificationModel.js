export default class Notification {
  constructor(message, color) {
    this.message = message;
    this.color = color;
    this.id = Math.floor(Math.random() * 5000);
  }
}