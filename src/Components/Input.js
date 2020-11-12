import React,{Component} from 'react'
class Input extends Component
{

    render()
    {
      const { name, onChange } = this.props;
      return(<div className="row">
                <div className="input-field col s12">
                  <input id={name} 
                         type="text" 
                         className="validate flow-text" 
                         onChange={ this.props.onChange } />
                  <label htmlFor={name}>Name of Recipe</label>
                </div>
         </div>)
    }

}