import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

/**
 * Create a Child component by displaying a Text Input.
 * @class
 * @extends React.Component
 * @property {function} onAddChild - Updates the likemark children state.
 * @property {string} itemType - The type of the children to add.
 * @fires AddChild#onAddChild
 */
export default class AddChild extends React.Component {
  static get propTypes () {
    return {
      onAddChild: PropTypes.func.isRequired,
      itemType: PropTypes.string.isRequired
    }
  }

  render () {
    return (
      <Input onPressEnter={(e) => {
        e.preventDefault()

        if (!e.target.value) {
          return
        }

        if (e.target.value.trim()) {
          this.props.onAddChild(e.target.value)
        }

        e.target.value = ''
      }} />
    )
  }
}