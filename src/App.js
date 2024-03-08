import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💷",
];

export default function App() {
  return (
    <>
      <Steps />
      <StepMessage step={4}>
        <p>Some random text</p>
        <p>🏯</p>
      </StepMessage>
      <StepMessage step={5}>
        <p>Some random text</p>
        <p>🗾</p>
      </StepMessage>
      <StepMessage step={6}>
        <p>Some random text</p>
        <p>🎋</p>
      </StepMessage>
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function openClose() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function handlePrevious() {
    //setStep(step > 1 ? step - 1 : step);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    //setStep(step < 3 ? step + 1 : step);
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOp) => !isOp)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}> 1 </div>
            <div className={step >= 2 ? "active" : ""}> 2 </div>
            <div className={step >= 3 ? "active" : ""}> 3 </div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="red"
                textColor="white"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span> <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
