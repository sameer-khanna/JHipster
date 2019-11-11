import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JenkinstestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JenkinstestSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JenkinstestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JenkinstestSharedModule {
  static forRoot() {
    return {
      ngModule: JenkinstestSharedModule
    };
  }
}
