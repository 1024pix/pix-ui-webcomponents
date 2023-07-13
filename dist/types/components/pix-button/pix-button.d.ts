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
  el: any;
  private getIsLoading;
  private getIsDisabled;
  updateClassNames(): string;
  _triggerAction(event: MouseEvent): Promise<void>;
  _handleClick(): Promise<void>;
  render(): any;
}
