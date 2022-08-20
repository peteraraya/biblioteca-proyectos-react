
import {
  CounterApp,
  CounterWithCustomHook,
  FocusScreen,
  FormWithCustomHook,
  MemoHook,
  Memorize,
  Message,
  RealExampleRef,
  SimpleForm,
} from "./components"

export const HooksReact = () => {
  return (
    <>
      <h3 className="text-center bg-dark p-2 mb-1 mt-2 ">01-useState</h3>
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
      <h3 className="text-center bg-dark p-2 mb-1 mt-2">02-useEffect</h3>
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
      <h3 className="text-center bg-dark p-2 mb-1 mt-2">03-useRef</h3>
      <div className="row">
        <div className="col-6">
          <FocusScreen />
        </div>
        <div className="col-6">
          <RealExampleRef />
        </div>
      </div>
      <h3 className="text-center bg-dark p-2 mb-1 mt-2">04-useMemo</h3>
      <div className="row">
        <div className="col-6">
         <MemoHook />
        </div>
        <div className="col-6">
          <Memorize />
        </div>
      </div>
    </>
  )
}
