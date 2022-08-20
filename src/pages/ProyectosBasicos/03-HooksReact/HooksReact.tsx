import { CounterApp, CounterWithCustomHook, FormWithCustomHook, Message, SimpleForm } from "./components"

export const HooksReact = () => {
  return (
    <>
      <hr />
      <h3>01-useState</h3>
      <hr />
      <div className="row">
      <div className="col-6">
        <h4>Counter App 1</h4>
          <CounterApp />
        </div>
        <div className="col-6">
        <h4>Counter App 2</h4>
          <CounterWithCustomHook />
          </div>
      </div>
      <hr />
      <h3>02-useEffect</h3>
      <hr />
      <div className="row">
        <div className="col-4">
          <Message />
        </div>
        <div className="col-4">
          <SimpleForm />
        </div>
        <div className="col-4">
          <FormWithCustomHook />
        </div>
      </div>
    </>
  )
}
