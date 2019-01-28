import React, {Fragment} from "react";

import InputContainer from "../container/InputContainer";
import TodoItemListContainer from "./TodoItemListContainer";
import SummaryContainer from "../container/SummaryContainer";
import CompletedFilterContainer from "./CompletedFilterContainer";

const App = () => (
    <Fragment>
        <InputContainer />
        <CompletedFilterContainer />
        <TodoItemListContainer />
        <SummaryContainer />
    </Fragment>
)

export default App
