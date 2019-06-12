import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'wrf';
  hobbies:string[];
  address:Address;
  isEdit:false;
  constructor() {   /*在函数中注入依赖就可以作为类的属性被使用了*/
    console.log("constructor ran ...");
  }

  ngOnInit() { /*此方法内给属性赋值,系统生成的空函数*/
    console.log("ngOnInit ran ...");
    this.address={
      state:'朝阳区',
      city:'北京市'
    }
    this.hobbies=['apple','123'];
  }

  myFun(){
    // this.name="wangruifang"
    this.hobbies.push('123456')
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);  /* unshift插入到前面*/
    return false;
  }

  deleteFun(i){
    this.hobbies.splice(i,1);
  }

  toggleEdit(){
    this.isEdit=!this.isEdit;
  }

}

interface Address{
  state:string,
  city:string
}
