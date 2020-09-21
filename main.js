import {createElement,render,Component} from './toy-react.js';
class MyComponent extends Component{
    constructor(){
        super();
        this.state = {
            a:1,
            b:2
        }
    }

    render(){
        return <div>
            <h1>my component</h1>
            <div>{this.state.a.toString()}</div>
            {this.children}
        </div>
    }

}

render(<MyComponent id='a' class='b'>
    <div>aaaa</div>
    <div></div>
    <div></div>
</MyComponent>,document.body);