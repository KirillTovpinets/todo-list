import React, {Component} from "react";

import InputContainer from "../container/InputContainer";
import TodoItemListContainer from "./TodoItemListContainer";
import SummaryContainer from "../container/SummaryContainer";
import CompletedFilterContainer from "./CompletedFilterContainer";

class MainContainer extends Component {
    render() {
        return (
            <div>
                <InputContainer />
                <CompletedFilterContainer />
                <TodoItemListContainer />
                <SummaryContainer />
            </div>
        );
    }
}

export default MainContainer
