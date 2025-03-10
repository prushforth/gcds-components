/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@cdssnc/gcds-components';


@ProxyCmp({
  inputs: ['alertRole', 'container', 'heading', 'hideCloseBtn', 'hideRoleIcon', 'isFixed'],
  outputs: ['gcdsDismiss']
})
@Component({
  selector: 'gcds-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alertRole', 'container', 'heading', 'hideCloseBtn', 'hideRoleIcon', 'isFixed'],outputs: ['gcdsDismiss'],
})
export class GcdsAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsDismiss']);
  }
}


export declare interface GcdsAlert extends Components.GcdsAlert {
  /**
   * Events
   */
  gcdsDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['hideCanadaLink']
})
@Component({
  selector: 'gcds-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideCanadaLink'],
})
export class GcdsBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsBreadcrumbs extends Components.GcdsBreadcrumbs {}


@ProxyCmp({
  inputs: ['href']
})
@Component({
  selector: 'gcds-breadcrumbs-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
})
export class GcdsBreadcrumbsItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsBreadcrumbsItem extends Components.GcdsBreadcrumbsItem {}


@ProxyCmp({
  inputs: ['buttonId', 'buttonRole', 'disabled', 'download', 'href', 'name', 'rel', 'size', 'target', 'type', 'value'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur']
})
@Component({
  selector: 'gcds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonId', 'buttonRole', 'disabled', 'download', 'href', 'name', 'rel', 'size', 'target', 'type', 'value'],outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur'],
})
export class GcdsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsClick', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsButton extends Components.GcdsButton {
  /**
   * Emitted when the button has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['badge', 'cardTitle', 'cardTitleTag', 'description', 'href', 'imgAlt', 'imgSrc'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['badge', 'cardTitle', 'cardTitleTag', 'description', 'href', 'imgAlt', 'imgSrc'],outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
})
export class GcdsCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsCard extends Components.GcdsCard {
  /**
   * Emitted when the card has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the card loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the card has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['checkboxId', 'checked', 'disabled', 'errorMessage', 'hint', 'label', 'name', 'required', 'validateOn', 'validator', 'value'],
  methods: ['validate'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checkboxId', 'checked', 'disabled', 'errorMessage', 'hint', 'label', 'name', 'required', 'validateOn', 'validator', 'value'],outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsError', 'gcdsValid'],
})
export class GcdsCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsClick', 'gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsCheckbox extends Components.GcdsCheckbox {
  /**
   * Emitted when the checkbox has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Update value based on user input.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the input has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the input has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['border', 'centered', 'mainContainer', 'margin', 'padding', 'size', 'tag']
})
@Component({
  selector: 'gcds-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['border', 'centered', 'mainContainer', 'margin', 'padding', 'size', 'tag'],
})
export class GcdsContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsContainer extends Components.GcdsContainer {}


@ProxyCmp({
  inputs: ['disabled', 'errorMessage', 'format', 'hint', 'legend', 'name', 'required', 'validateOn', 'validator', 'value'],
  methods: ['validate'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-date-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorMessage', 'format', 'hint', 'legend', 'name', 'required', 'validateOn', 'validator', 'value'],outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid'],
})
export class GcdsDateInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsDateInput extends Components.GcdsDateInput {
  /**
   * Emitted when an element has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when an element loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the element has received input.
   */
  gcdsInput: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when an element has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when an element has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when an element has validated.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['type']
})
@Component({
  selector: 'gcds-date-modified',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
})
export class GcdsDateModified {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsDateModified extends Components.GcdsDateModified {}


@ProxyCmp({
  inputs: ['detailsTitle', 'open'],
  methods: ['toggle'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['detailsTitle', 'open'],outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
})
export class GcdsDetails {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsDetails extends Components.GcdsDetails {
  /**
   * Emitted when the details has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the details loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the details has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['messageId']
})
@Component({
  selector: 'gcds-error-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['messageId'],
})
export class GcdsErrorMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsErrorMessage extends Components.GcdsErrorMessage {}


@ProxyCmp({
  inputs: ['errorLinks', 'heading', 'listen']
})
@Component({
  selector: 'gcds-error-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorLinks', 'heading', 'listen'],
})
export class GcdsErrorSummary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsErrorSummary extends Components.GcdsErrorSummary {}


@ProxyCmp({
  inputs: ['disabled', 'errorMessage', 'fieldsetId', 'hint', 'legend', 'required', 'validateOn', 'validator'],
  methods: ['validate'],
  outputs: ['gcdsGroupError', 'gcdsGroupErrorClear', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-fieldset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorMessage', 'fieldsetId', 'hint', 'legend', 'required', 'validateOn', 'validator'],outputs: ['gcdsGroupError', 'gcdsGroupErrorClear', 'gcdsError', 'gcdsValid'],
})
export class GcdsFieldset {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsGroupError', 'gcdsGroupErrorClear', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsFieldset extends Components.GcdsFieldset {
  /**
   * Emitted when the fieldset has a validation error.
   */
  gcdsGroupError: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the fieldset has a validation error.
   */
  gcdsGroupErrorClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the fieldset has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the fieldset has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['accept', 'disabled', 'errorMessage', 'files', 'hint', 'label', 'multiple', 'name', 'required', 'uploaderId', 'validateOn', 'validator', 'value'],
  methods: ['validate'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsRemoveFile', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-file-uploader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'disabled', 'errorMessage', 'files', 'hint', 'label', 'multiple', 'name', 'required', 'uploaderId', 'validateOn', 'validator', 'value'],outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsRemoveFile', 'gcdsError', 'gcdsValid'],
})
export class GcdsFileUploader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsRemoveFile', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsFileUploader extends Components.GcdsFileUploader {
  /**
   * Emitted when the uploader has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the uploader loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user has made a file selection.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the user has uploaded a file.
   */
  gcdsInput: EventEmitter<CustomEvent<any>>;
  /**
   * Remove file and update value.
   */
  gcdsRemoveFile: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the input has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the input has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['contextualHeading', 'contextualLinks', 'display', 'subLinks', 'wordmarkVariant']
})
@Component({
  selector: 'gcds-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contextualHeading', 'contextualLinks', 'display', 'subLinks', 'wordmarkVariant'],
})
export class GcdsFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsFooter extends Components.GcdsFooter {}


@ProxyCmp({
  inputs: ['alignContent', 'alignItems', 'centered', 'columns', 'columnsDesktop', 'columnsTablet', 'container', 'display', 'equalRowHeight', 'gap', 'gapDesktop', 'gapTablet', 'justifyContent', 'justifyItems', 'placeContent', 'placeItems', 'tag']
})
@Component({
  selector: 'gcds-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignContent', 'alignItems', 'centered', 'columns', 'columnsDesktop', 'columnsTablet', 'container', 'display', 'equalRowHeight', 'justifyContent', 'justifyItems', 'placeContent', 'placeItems', 'tag'],
})
export class GcdsGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsGrid extends Components.GcdsGrid {}


@ProxyCmp({
  inputs: ['desktop', 'tablet', 'tag']
})
@Component({
  selector: 'gcds-grid-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['desktop', 'tablet', 'tag'],
})
export class GcdsGridCol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsGridCol extends Components.GcdsGridCol {}


@ProxyCmp({
  inputs: ['langHref', 'signatureHasLink', 'signatureVariant', 'skipToHref']
})
@Component({
  selector: 'gcds-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['langHref', 'signatureHasLink', 'signatureVariant', 'skipToHref'],
})
export class GcdsHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHeader extends Components.GcdsHeader {}


@ProxyCmp({
  inputs: ['characterLimit', 'marginBottom', 'marginTop', 'tag']
})
@Component({
  selector: 'gcds-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['characterLimit', 'marginBottom', 'marginTop', 'tag'],
})
export class GcdsHeading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHeading extends Components.GcdsHeading {}


@ProxyCmp({
  inputs: ['hintId']
})
@Component({
  selector: 'gcds-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hintId'],
})
export class GcdsHint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHint extends Components.GcdsHint {}


@ProxyCmp({
  inputs: ['fixedWidth', 'iconStyle', 'label', 'marginLeft', 'marginRight', 'name', 'size']
})
@Component({
  selector: 'gcds-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fixedWidth', 'iconStyle', 'label', 'marginLeft', 'marginRight', 'name', 'size'],
})
export class GcdsIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsIcon extends Components.GcdsIcon {}


@ProxyCmp({
  inputs: ['autocomplete', 'disabled', 'errorMessage', 'hideLabel', 'hint', 'inputId', 'label', 'name', 'required', 'size', 'type', 'validateOn', 'validator', 'value'],
  methods: ['validate'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'errorMessage', 'hideLabel', 'hint', 'inputId', 'label', 'name', 'required', 'size', 'type', 'validateOn', 'validator', 'value'],outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid'],
})
export class GcdsInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsInput extends Components.GcdsInput {
  /**
   * Emitted when the input has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the element has received input.
   */
  gcdsInput: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the input has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the input has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the input has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['hideLabel', 'label', 'labelFor', 'required']
})
@Component({
  selector: 'gcds-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideLabel', 'label', 'labelFor', 'required'],
})
export class GcdsLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsLabel extends Components.GcdsLabel {}


@ProxyCmp({
  inputs: ['href']
})
@Component({
  selector: 'gcds-lang-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
})
export class GcdsLangToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsLangToggle extends Components.GcdsLangToggle {}


@ProxyCmp({
  inputs: ['display', 'download', 'external', 'href', 'rel', 'size', 'target', 'type', 'variant'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['display', 'download', 'external', 'href', 'rel', 'size', 'target', 'type', 'variant'],outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
})
export class GcdsLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsLink extends Components.GcdsLink {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['caption', 'controls', 'controlslist', 'height', 'lat', 'lon', 'projection', 'width', 'zoom']
})
@Component({
  selector: 'gcds-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'controls', 'controlslist', 'height', 'lat', 'lon', 'projection', 'width', 'zoom'],
})
export class GcdsMap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsMap extends Components.GcdsMap {}


@ProxyCmp({
  inputs: ['checked', 'hidden', 'label', 'opacity', 'src']
})
@Component({
  selector: 'gcds-map-layer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'hidden', 'label', 'opacity', 'src'],
})
export class GcdsMapLayer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsMapLayer extends Components.GcdsMapLayer {}


@ProxyCmp({
  inputs: ['closeTrigger', 'menuLabel', 'open', 'openTrigger'],
  methods: ['focusTrigger', 'toggleNav'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur']
})
@Component({
  selector: 'gcds-nav-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeTrigger', 'menuLabel', 'open', 'openTrigger'],outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur'],
})
export class GcdsNavGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsClick', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsNavGroup extends Components.GcdsNavGroup {
  /**
   * Emitted when the button has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button has been focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button blurs.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['current', 'href'],
  methods: ['focusLink'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur']
})
@Component({
  selector: 'gcds-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['current', 'href'],outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur'],
})
export class GcdsNavLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsClick', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsNavLink extends Components.GcdsNavLink {
  /**
   * Emitted when the link has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['noticeTitle', 'noticeTitleTag', 'type']
})
@Component({
  selector: 'gcds-notice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['noticeTitle', 'noticeTitleTag', 'type'],
})
export class GcdsNotice {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsNotice extends Components.GcdsNotice {}


@ProxyCmp({
  inputs: ['currentPage', 'display', 'label', 'nextHref', 'nextLabel', 'previousHref', 'previousLabel', 'totalPages', 'url'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'display', 'label', 'nextHref', 'nextLabel', 'previousHref', 'previousLabel', 'totalPages', 'url'],outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
})
export class GcdsPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsPagination extends Components.GcdsPagination {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['bannerRole', 'container', 'isFixed']
})
@Component({
  selector: 'gcds-phase-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bannerRole', 'container', 'isFixed'],
})
export class GcdsPhaseBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsPhaseBanner extends Components.GcdsPhaseBanner {}


@ProxyCmp({
  inputs: ['name', 'options'],
  outputs: ['gcdsChange', 'gcdsFocus', 'gcdsBlur']
})
@Component({
  selector: 'gcds-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'options'],outputs: ['gcdsChange', 'gcdsFocus', 'gcdsBlur'],
})
export class GcdsRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsChange', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsRadioGroup extends Components.GcdsRadioGroup {
  /**
   * Emitted when the radio button is checked
   */
  gcdsChange: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['action', 'method', 'name', 'placeholder', 'searchId', 'suggested', 'value'],
  outputs: ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsSubmit']
})
@Component({
  selector: 'gcds-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'method', 'name', 'placeholder', 'searchId', 'suggested', 'value'],outputs: ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsSubmit'],
})
export class GcdsSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsSubmit']);
  }
}


export declare interface GcdsSearch extends Components.GcdsSearch {
  /**
   * Emitted when the search element has recieved input.
   */
  gcdsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the search input value has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the search input value has gained focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the search input has lost focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the search form has submitted.
   */
  gcdsSubmit: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['defaultValue', 'disabled', 'errorMessage', 'hint', 'label', 'name', 'required', 'selectId', 'validateOn', 'validator', 'value'],
  methods: ['validate'],
  outputs: ['gcdsChange', 'gcdsInput', 'gcdsFocus', 'gcdsBlur', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'disabled', 'errorMessage', 'hint', 'label', 'name', 'required', 'selectId', 'validateOn', 'validator', 'value'],outputs: ['gcdsChange', 'gcdsInput', 'gcdsFocus', 'gcdsBlur', 'gcdsError', 'gcdsValid'],
})
export class GcdsSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsChange', 'gcdsInput', 'gcdsFocus', 'gcdsBlur', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsSelect extends Components.GcdsSelect {
  /**
   * Emitted when the select value has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the select has received input.
   */
  gcdsInput: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the select has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the select has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['label'],
  methods: ['getNavSize', 'updateNavSize', 'updateNavItemQueue']
})
@Component({
  selector: 'gcds-side-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class GcdsSideNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsSideNav extends Components.GcdsSideNav {}


@ProxyCmp({
  inputs: ['hasLink', 'type', 'variant']
})
@Component({
  selector: 'gcds-signature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasLink', 'type', 'variant'],
})
export class GcdsSignature {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsSignature extends Components.GcdsSignature {}


@ProxyCmp({
  inputs: ['tag']
})
@Component({
  selector: 'gcds-sr-only',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['tag'],
})
export class GcdsSrOnly {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsSrOnly extends Components.GcdsSrOnly {}


@ProxyCmp({
  inputs: ['currentStep', 'tag', 'totalSteps']
})
@Component({
  selector: 'gcds-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentStep', 'tag', 'totalSteps'],
})
export class GcdsStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsStepper extends Components.GcdsStepper {}


@ProxyCmp({
  inputs: ['characterLimit', 'display', 'marginBottom', 'marginTop', 'size', 'textRole']
})
@Component({
  selector: 'gcds-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['characterLimit', 'display', 'marginBottom', 'marginTop', 'size', 'textRole'],
})
export class GcdsText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsText extends Components.GcdsText {}


@ProxyCmp({
  inputs: ['characterCount', 'cols', 'disabled', 'errorMessage', 'hideLabel', 'hint', 'label', 'name', 'required', 'rows', 'textareaId', 'validateOn', 'validator', 'value'],
  methods: ['validate'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['characterCount', 'cols', 'disabled', 'errorMessage', 'hideLabel', 'hint', 'label', 'name', 'required', 'rows', 'textareaId', 'validateOn', 'validator', 'value'],outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsError', 'gcdsValid'],
})
export class GcdsTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsTextarea extends Components.GcdsTextarea {
  /**
   * Emitted when the textarea has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the textarea has received input.
   */
  gcdsInput: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the textarea has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the textarea has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['alignment', 'label'],
  methods: ['getNavSize', 'updateNavSize', 'updateNavItemQueue']
})
@Component({
  selector: 'gcds-top-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'label'],
})
export class GcdsTopNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsTopNav extends Components.GcdsTopNav {}


@ProxyCmp({
  inputs: ['home'],
  methods: ['closeAllMenus', 'toggleNav', 'updateNavSize', 'getNavSize', 'updateNavItemQueue']
})
@Component({
  selector: 'gcds-topic-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['home'],
})
export class GcdsTopicMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsTopicMenu extends Components.GcdsTopicMenu {}


@ProxyCmp({
  inputs: ['container', 'isFixed']
})
@Component({
  selector: 'gcds-verify-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['container', 'isFixed'],
})
export class GcdsVerifyBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsVerifyBanner extends Components.GcdsVerifyBanner {}


