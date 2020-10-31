import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';
import { AdminService } from '../admin.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RoleModalComponent } from '../role-modal/role-modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  users: IUser[];
  bsModalRef: BsModalRef;

  constructor(
    private adminService: AdminService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe(
      (users: IUser[]) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editModal(user: IUser) {
    const initialState = {
      user,
      roles:this.getRolesArray(user)
    };
    this.bsModalRef = this.modalService.show(RoleModalComponent, {
      initialState,
    });
    this.bsModalRef.content.updateSelectedRoles.subscribe((values) => {
      const rolesToUpdate = {
        roleNames: [ ...values.filter(el => el.checked === true).map(el => el.name)]
      };
      if(rolesToUpdate)
      this.adminService.updateUserRoles(user, rolesToUpdate).subscribe(()=> {
        user.roles = [ ...rolesToUpdate.roleNames];
      }, error =>
      { console.log(error)});
    })
  }

  private getRolesArray(user) {
    const roles = [];
    const userRoles = user.roles;
    const availableRoles: any[] = [
      { name: 'Admin', value: 'Admin' },
      { name: 'Moderator', value: 'Moderator' },
      { name: 'Member', value: 'Member' },
      { name: 'VIP', value: 'VIP' },
    ];

    for (let i = 0; i < availableRoles.length; i++) {
      let isMatch = false;
      for (let j = 0; j < userRoles.length; j++) {
        if (availableRoles[i].name === userRoles[j]) {
          isMatch = true;
          availableRoles[i].checked = true;
          roles.push(availableRoles[i]);
          break;
        }
      }
      if (!isMatch) {
        availableRoles[i].checked = false;
        roles.push(availableRoles[i]);
      }
    }
    return roles;
  }
}
