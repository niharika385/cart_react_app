import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        count: this.props.value
        //tags: ['tag1', 'tag2', 'tag3' ]
        //imgurl: 'https://picsum.photos/200'
    } ;

    styles= {
        fontSize: 10,
        fontWeight: "bold"
    }

    handleIncrement(id){
        console.log(id)
        this.setState( {count: this.state.count+1})
    }

    renderTags(){
        if (this.state.tags.length===0){ return <p> there are no tags</p>}

        return <ul> {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
    }

    render() { 
        let classes = this.getBadgeClass();
        console.log(this.props)
        return ( 
            
            <div>
          
           <span style={ {fontSize: 20}} className= {classes} > {this.format()} </span>

            {/* { this.state.tags.length === 0 && "please create tags"}
            {this.renderTags()} */}

           {/* <ul> {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul> */}
            {/* <span style={this.styles} className="badge badge-primary m-2"> {this.format()} </span> */}
            <button onClick= { ()=> {this.handleIncrement(1)} }>increment</button>
            <button onClick= { () => this.props.onDelete(this.props.id) }> delete </button>
            </div>
            );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0 ? 'warning' : 'primary');
        return classes;
    }

    format(){
        const {count} = this.state;
        //return count === 0 ? 'Zero': count;
        return count === 0 ? <h2>zero</h2> : count;
    }
}
 
export default Counter;