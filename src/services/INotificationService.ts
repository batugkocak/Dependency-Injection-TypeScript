export default interface INotificationChannel {
  send(message: string, recipient: string): Promise<void>;
}
