class Instructions {

   
    private _step: string;
    private _stepNo: string;

    constructor(step: string, stepNo: string) {
        this._step = step;
        this._stepNo = stepNo;
    }
 
    
    public getStep(): string {
        return this._step;
    }
 
  
    public setStep(step: string): void {
        this._step = step;
    }

    public getStepNo(): string {
        return this._stepNo;
    }
 
 
    public setStepNo(stepNo: string): void {
        this._stepNo = stepNo;
    }
 }
 


 export default Instructions;