import React, {Component} from 'react'
import {Checkbox} from 'antd-mobile'

export default class Filter extends Component {
  state = {filter: 15}

  updateFilter(bit) {
    let filter = this.state.filter ^ bit;
    this.setState({filter});
    this.props.onChange(filter);
  }

  render() {
    if(!this.props.show) return null;
    return (
      <div>
        <Checkbox.CheckboxItem onChange={() => this.updateFilter(1)}
          checked={(this.state.filter & 1) > 0}>Betaald</Checkbox.CheckboxItem>
        <Checkbox.CheckboxItem onChange={() => this.updateFilter(2)}
          checked={(this.state.filter & 2) > 0}>Aan de deur</Checkbox.CheckboxItem>
        <Checkbox.CheckboxItem onChange={() => this.updateFilter(4)}
          checked={(this.state.filter & 4) > 0}>Onbetaald</Checkbox.CheckboxItem>
        <Checkbox.CheckboxItem onChange={() => this.updateFilter(8)}
          checked={(this.state.filter & 8) > 0}>Bevestigd</Checkbox.CheckboxItem>
      </div>
    )
  }
}
