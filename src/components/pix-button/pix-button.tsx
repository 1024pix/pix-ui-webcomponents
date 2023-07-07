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

  @Event() click: EventEmitter<any>
  handleClick(ev) {
    console.log(ev);
  }

  testClick(e) {
    console.log('test', e)
    return this.click.emit(e)
  }


  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (<div>
      <button class={'primary'} onClick={this.testClick.bind(this)}>HelloPix {this.getText()}</button>
    </div>);
  }
}
