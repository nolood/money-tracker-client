export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export interface INotification {
  type: NotificationType;
  message: string;
  id: string;
}
