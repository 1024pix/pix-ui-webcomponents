import { EventEmitter } from '../../stencil-public-runtime';
export declare class PixButton {
  /**
   * The first name
   */
  first: string;
  /**
   * The middle name
   */
  middle: string;
  /**
   * The last name
   */
  last: string;
  /**
   * disable button
   */
  isDisabled: boolean;
  click: EventEmitter<any>;
  handleClick(ev: any): void;
  testClick(e: any): CustomEvent<any>;
  private getText;
  render(): any;
}
