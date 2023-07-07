import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'pix-button',
  styleUrl: 'pix-button.css',
  shadow: true,
})
export class PixButton {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() clic: EventEmitter<any>
  handleClick(ev) {
    console.log(ev);
  }


  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div><button class={'primary'} onClick={(e) => this.clic.emit(e)}>HelloPix {this.getText()}</button></div>;
  }
}
