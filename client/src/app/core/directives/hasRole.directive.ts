import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  OnInit,
} from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  decodedToken: any;
  jwtHelper = new JwtHelperService();

  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accontService: AccountService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.decodedToken = this.jwtHelper.decodeToken(token);
      const useRoles = this.decodedToken.role as Array<string>;

      if (!useRoles) {
        this.viewContainerRef.clear();
      }
      if (this.accontService.rolemathc(this.appHasRole)) {
        if (!this.isVisible) {
          this.isVisible = true;
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.isVisible = false;
          this.viewContainerRef.clear();
        }
      }
    }
  }
}
