import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UI } from '../../enum/ui';

export class ModalOptions {
  maxWidth = '800px';
  maxHeight = '705px';

  constructor(defs: any = null) {
    Object.assign(this, defs);
  }
}

enum BackdropFilter {
  none = 'none',
  blur = 'blur(5px)'
}

enum Display {
  block = 'block',
  none = 'none'
}

@Component({
  selector: 'jnt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements AfterViewInit {

  ui = UI;

  private _opened: boolean;
  private modal: HTMLElement;

  template: TemplateRef<any>;
  options: ModalOptions = new ModalOptions();
  title: string;

  @ViewChild('container', {read: ViewContainerRef}) container;

  set content(content: TemplateRef<any> | ComponentRef<any>) {
    this.template = null;
    this.container.clear();

    if (content instanceof TemplateRef) {
      this.template = content;
    } else if (content instanceof ComponentRef) {
      this.container.insert(content.hostView, 0);
    }
  }

  @HostBinding('style.display')
  get visible() {
    return this.sanitizer.bypassSecurityTrustStyle(!!this.opened ? Display.block : Display.none);
  }

  @Output()
  opened$: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() backdrop: ElementRef;

  @Input()
  set opened(opened: boolean) {
    this._opened = opened;
    this.opened$.emit(opened);
  }

  get opened() {
    return this._opened;
  }

  constructor(private sanitizer: DomSanitizer,
              private renderer: Renderer2,
              private host: ElementRef) {
  }

  ngAfterViewInit() {
    this.modal = this.host.nativeElement;
  }

  private setBackdropFilter(filter: string) {
    if (!!this.backdrop) {
      this.renderer.setStyle(this.backdrop.nativeElement, 'filter', filter);
    }
  }

  open(title: string, content: any, options: ModalOptions = new ModalOptions()) {
    this.title = title;
    this.content = content;
    this.options = options;
    this.setBackdropFilter(BackdropFilter.blur);
    this.opened = true;
  }

  close() {
    this.setBackdropFilter(BackdropFilter.none);
    this.opened = false;
  }
}