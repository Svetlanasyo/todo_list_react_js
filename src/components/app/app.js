import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";


export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important:false, done:false, id:1},
            {label: 'Write letter', important:false, done:false, id:2},
            {label: 'Write React App', important:false, done:false, id:3}
            ],
        filterCondition:'All',
        temp:''
    };

    createTodoItem(label) {
        return {
            label,
            important:false,
            id:this.state.todoData.length+1,
            done:false
        }
    };

    findItemIndex(id, todoData) {
        return todoData.findIndex((el)=> el.id === id)
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = this.findItemIndex(id, todoData);
            return {todoData: [...todoData.slice(0,idx), ...todoData.slice(idx+1)]};
        });
    };

    addItem = (label) => {
        this.setState(({todoData}) => {
            return {todoData: [...todoData, this.createTodoItem(label)]}
        })
    };
    toggleProperty(arr, id, propertyName) {
            const idx = this.findItemIndex(id, arr);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propertyName]: !oldItem[propertyName]};
            return [...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx+1)];

    };

    onSearch = (e) => {
      this.setState({temp:e.target.value})
      console.log(this.state.temp)
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'important')}
        })
    };

    clickAll = () => {
        this.setState({filterCondition:'All'});
    };

    clickActive = () => {
        this.setState({filterCondition:'Active'});
    };

    clickDone = () => {
        this.setState({filterCondition:'Done'});
    };

    filterTodoData = () => {
        const {filterCondition, todoData} = this.state;
        const filters = {Active:(el)=>!el.done, Done:(el)=>el.done, All:()=> true}
        return todoData.filter(filters[filterCondition])
    };

    searchTerm(arr) {
        return arr.filter((el) => el.label.includes(this.state.temp));
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'done')}
        })
    };

    render() {
    const {todoData} = this.state
    const doneCount = todoData.filter((el) => el.done).length
    const toDoCount = todoData.length - doneCount

    return (
        <div>
            <AppHeader toDo={toDoCount} done={doneCount}/>
            <SearchPanel onSearch={this.onSearch}/>
            <ItemStatusFilter onClickAll={this.clickAll}
                              onClickActive={this.clickActive}
                              onClickDone={this.clickDone}
                              selectedFilter={this.state.filterCondition}
            />
            <TodoList todos={this.searchTerm(this.filterTodoData())}
                      onDeleted={this.deleteItem}
                      onToggleImportant={this.onToggleImportant}
                      onToggleDone={this.onToggleDone}
            />
            <ItemAddForm onAddedItem={this.addItem}/>
        </div>
    );
}
};
