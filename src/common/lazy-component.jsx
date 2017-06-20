import React, { Component } from 'react';

// 加载器
// @props load 异步加载文件方法
// 异步加载方法可以通过bundle-loader生成
// example:
// import riskEvaluation from 'bundle-loader?lazy!../riskEvaluation/riskEvaluation.jsx';
// @props children render方法
// render时调用，根据mod决定render返回值
export default class LazyComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            mod: null
        };
    }
    componentWillMount () {
        this.load(this.props);
    }
    compenentWillReceiveProps (nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }
    load (props) {
        this.setState({
            mod: null
        });
        props.load(
            (mod) => {
                this.setState({ mod: mod.default ? mod.default : mod });
            }
        );
    }
    render () {
        return this.props.children(this.state.mod);
    }
}