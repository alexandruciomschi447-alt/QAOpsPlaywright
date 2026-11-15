export interface TestResult {name:string;status:"passed"|"failed"|"skipped";durationMs:number}
export interface Report {passed:number;failed:number;skipped:number;durationMs:number;failedNames:string[]}

export function report(results: TestResult[]): Report {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
