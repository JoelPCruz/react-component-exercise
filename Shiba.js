const Shiba = () => {
    return <img src="https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg?w=1024"/>
}

const App = () => {
    return (
        <div>
            <Shiba />
            <Shiba />
            <Shiba />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))