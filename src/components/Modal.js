import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
    background: {
        position: 'absolute',
        top: '100vh',
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000088'
    },
    container: {
        backgroundColor: '#343233',
        borderRadius: 10,
        boxShadow: '0 0 10px #00000088',
        width: 650,
        height: 350,
        color: 'white',
        padding: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    }
}

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.element = document.createElement('div')
        this.modalRoot = document.getElementById('modal-root')
        this.modalRoot.appendChild(this.element)
    }
    componentDidMount() {
        document.addEventListener('keyup', this.keyup, false)
    }
    componentWillUnmount() {
        document.removeEventListener('keyup', this.keyup, false)
        this.modalRoot.removeChild(this.element)
    }
    keyup = e => {
        if ((e.key === 'Escape')) {
            this.props.onClose()
        }
    }
    clickedBackground = () => {
        this.props.onClose()
    }
    render() {
        return ReactDOM.createPortal(this._renderModal(), this.element)
    }
    _renderModal() {
        return (
            <div style={styles.background} onClick={this.clickedBackground}>
                <div onClick={e => e.stopPropagation()}>{this.props.children}</div>
            </div>
            )
    }
}
