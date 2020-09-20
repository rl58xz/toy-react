import {createElement,render,Component} from './toy-react.js';
class MyComponent extends Component{
    render(){
        return <div>
            <h1>my component</h1>
            <div>aaaa</div>
            {this.children}
        </div>
    }

}
render(<MyComponent id='a' class='b'>
    <div>aaaa</div>
    <div></div>
    <div></div>
</MyComponent>,document.body);