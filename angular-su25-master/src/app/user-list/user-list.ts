import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserListComponent {
  users = [
    { name: 'Nguyễn Văn A', email: 'a@gmail.com', role: 'Quản trị viên' },
    { name: 'Trần Thị B', email: 'b@gmail.com', role: 'Nhân viên' },
    { name: 'Lê Văn C', email: 'c@gmail.com', role: 'Khách' }
  ];
}
