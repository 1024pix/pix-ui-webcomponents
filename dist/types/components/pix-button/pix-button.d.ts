export declare class PixButton {
  type: string;
  size: string;
  shape: string;
  backgroundColor: string;
  isBorderVisible: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  triggerAction: Function;
  isTriggering: boolean;
  private getIsLoading;
  private getIsDisabled;
  updateClassNames(): string;
  _triggerAction(event: MouseEvent): Promise<void>;
  render(): any;
}
