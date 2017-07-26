import { observable } from 'mobx'
//const {observable, computed} = mobx;

export default class TodoItem {
    id = Math.random();
    @observable title;
    @observable isCompleted: boolean;
    
    constructor(title, isCompleted){
        this.title = title;
        this.isCompleted = isCompleted;
    }
}