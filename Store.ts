export class Store {
    private reducer: Function;
    private state: Object;
    constructor(reducer, initialState?) {
        this.reducer = reducer;
        this.state = reducer(this.state, {}) 
        if (typeof initialState === 'undefined')
            return

        this.state = initialState;
    }
    public getState() {
        return this.state;
    }
    public dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
}
