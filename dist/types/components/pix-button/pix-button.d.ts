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
  clic: EventEmitter<any>;
  handleClick(ev: any): void;
  private getText;
  render(): any;
}
