import InputForm from "./Components/InputForm/InputForm";
import './App.css';
import Report from "./Components/Report/Report";

export default function App(){
  return(    
    <section className="container">
      <div className='input-form-container'>
        <InputForm />
        <Report />
      </div>
    </section>
  );
}