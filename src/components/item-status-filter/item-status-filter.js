import React, {Component} from "react";
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {

    render () {

        const {onClickActive, onClickAll, onClickDone, selectedFilter} = this.props

        return (
            <div className="btn-group">
                <button type="button"
                        className={selectedFilter==='All'? "btn btn-info":"btn btn-outline-secondary"}
                        onClick={onClickAll}
                >All</button>
                <button type="button"
                        className={selectedFilter==='Active'? "btn btn-info":"btn btn-outline-secondary"}
                        onClick={onClickActive}
                >Active</button>
                <button type="button"
                        className={selectedFilter==='Done'? "btn btn-info":"btn btn-outline-secondary"}
                        onClick={onClickDone}
                >Done</button>
            </div>
        );
    }
}

