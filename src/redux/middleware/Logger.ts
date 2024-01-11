const Logger = (state) => (next) => (action) => {
    console.log('Current State =>',state)
    console.log(next)
    console.log(action)
}