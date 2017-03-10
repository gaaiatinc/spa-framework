"use strict";

import React from "react";
import {connect, Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import redux_thunk from "redux-thunk";

import SPAppReducers from "./reducers";

/**
 *
 */
const TempComponent = ({}) => (
    <div></div>
);

/**
 *
 */
TempComponent.propTypes = {};

/**
 *
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const mapStateToProps = (state) => {
    return {};
};

/**
 *
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
const mapDispatchToProps = (dispatch) => {
    return {};
};

const TempContainer = connect(mapStateToProps, mapDispatchToProps)(TempComponent);

export class SPATemplate extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);

        this.getExternalAssetsDescriptor = this
            .getExternalAssetsDescriptor
            .bind(this);
        this.filterModel = this
            .filterModel
            .bind(this);
        this.getHeaderTags = this
            .getHeaderTags
            .bind(this);
        this.getBodyEndElement = this
            .getBodyEndElement
            .bind(this);
        this.getBodyClassName = this
            .getBodyClassName
            .bind(this);
        this.createAppContainer = this
            .createAppContainer
            .bind(this);
        this.getAppStateReducer = this
            .getAppStateReducer
            .bind(this);
        this.genInitialStateData = this
            .genInitialStateData
            .bind(this);
        this.____createBody__ = this
            .____createBody__
            .bind(this);

    }

    /**
     *
     */
    genInitialStateData(props) {
        return {};
    }

    /**
     *
     */
    getExternalAssetsDescriptor(model) {
        const assets = {
            javascript: [],
            styles: []
        };
        return assets;
    }

    /**
    * This method must return a subset of the model that is secure for
    * sending to the browser.
    */
    filterModel(model) {
        return model;
    }

    /**
     *
     */
    getHeaderTags(model) {
        return [];
    }

    /**
      *
      */
    getBodyEndElement(model) {
        return (<div/>);
    }

    /**
     *
     */
    getBodyClassName(model) {
        return "";
    }

    /**
     *
     */
    createAppContainer() {
        return TempContainer;
    }

    /**
     *
     */
    getAppStateReducer() {
        return {};
    }

    /**
     *
     */
    ____createBody__() {

        const AppContainer = this.createAppContainer();

        let appStateReducer = {};
        try {
            appStateReducer = this.getAppStateReducer() || {};
        } catch (err) {
            //
        }

        /**
         * default appState reducer
         * @param  {Object} [state={}] [description]
         * @return {[type]}            [description]
         */
        function appState(state = {}) {
            return state;
        }

        let uberReducerObj = {
            appState
        };
        Object.assign(uberReducerObj, appStateReducer);
        Object.assign(uberReducerObj, SPAppReducers);

        this.___privpriv___store = createStore(combineReducers(uberReducerObj), this.genInitialStateData(this.props), applyMiddleware(redux_thunk));

        return (
            <Provider store={this.___privpriv___store}>
                <AppContainer/>
            </Provider>
        );
    }

    /**
     *
     */
    render() {
        return (
            <div id="document-body">
                {this.____createBody__()}
            </div>
        );
    }

}

/**
 *
 * @type {Object}
 */
SPATemplate.propTypes = {};

/**
 *
 * @type {Object}
 */
SPATemplate.defaultProps = {};
