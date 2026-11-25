# Learning Progress — Payroll System

- Current phase: 2 — Backend Fundamentals
- Current session: 14
- Status: Session closed.
- Last verified result: `POST /payroll/preview` returned `200` and `{"total":4150000}`. The CLI still printed `4150000` and `3150000` using the same function.
- Next action: Implement and explain one small GET route independently as the Phase 2 exit exercise.

## Completed features
- Print one fictitious employee's base salary from `payroll.js`.
- Add an allowance to the base salary and print the total.
- Subtract a deduction and print the resulting salary.
- Name the salary amounts with `const` and use the names in the calculation.
- Group salary amounts in one employee object and read its properties in the calculation.
- Calculate and return salary from an employee object with `hitungGaji`.
- Calculate each salary in an employee array with `for...of`.
- Detect an undefined base salary and skip that employee's calculation.

## Concept evidence
| Concept | Level (0–5 or unknown) | Evidence |
| --- | --- | --- |
| JavaScript fundamentals | unknown | Not assessed in this repository |
| Printing a number with `console.log` | 3 | Learner filled in a worked pattern and ran the script successfully. |
| Adding numbers in a JavaScript expression | 3 | Learner applied a worked example to Rina's base salary and allowance, then ran the script. |
| Subtracting a deduction in a JavaScript expression | 3 | Learner extended the addition expression with subtraction after a worked example. |
| Naming values with `const` | 3 | Learner applied a worked example to name three salary amounts and use them in the formula. |
| Object properties and dot notation | 3 | Learner adapted a worked example to group and read three amounts. |
| Function with an object parameter and a return value | 3 | Learner used hints to pass the object, read properties through the parameter, and return the calculation. |

## Current session checkpoint
- Target: Reuse the salary function in a route and return the calculation as JSON.
- Evidence: Learner extracted a CommonJS module and added the route with guidance. Learner and agent observed the same total. Learner predicted 4250 in thousands of rupiah for a zero deduction.

## Backlog
- Express, PostgreSQL, background processing, payment simulation and reliability — introduce in their respective phases.
- TypeScript and Docker — only when justified.

## Session history
 - Session 0 / Project orientation and Node.js check / Agent and learner both obtained `v24.12.0` in their respective shells / Learner recalculated the salary and identified the failure status / Next: print one employee's salary in JavaScript.
- Session 1 / Print Rina's base salary / Learner and agent observed `4000000` / Learner used `console.log` with a guided pattern / Next: add an allowance.
- Session 2 / Add Rina's allowance / Learner and agent observed `4200000` / Learner applied addition inside `console.log` / Next: subtract a deduction.
- Session 3 / Subtract Rina's deduction / Learner and agent observed `4100000` / Learner combined addition and subtraction / Next: name salary amounts with `const`.
- Session 4 / Name Rina's salary amounts / Learner and agent observed `4100000` / Learner used three `const` declarations in the calculation / Next: group the amounts in an employee object.
- Session 5 / Group salary amounts / Learner and agent observed `4100000` / Learner read salary amounts with dot notation / Next: extract the calculation into a function.
- Session 6 / Extract salary calculation / Agent verified `4100000` / Learner used object parameters and `return` with hints and predicted the zero-deduction result / Next: calculate salaries for an array of employees.
- Session 7 / Calculate two salaries / Agent verified both output orders / Learner used `for...of` with hints and reversed the array / Next: detect missing salary data.
- Session 8 / Detect missing base salary / Agent verified missing and complete data / Learner used `if` and `else` with hints / Next: independently modify a salary rule.
- Session 9 / Add a fixed bonus / Agent verified `4150000` and `3150000` / Learner changed the shared rule independently / Next: Backend Fundamentals.
- Session 10 / Start an Express server / Agent verified `200` for `/` and `404` for `/halo` / Learner implemented a route with guidance and predicted the missing route result / Next: return employee JSON.
- Session 11 / Return employee JSON / Agent verified `200` and the JSON body / Learner predicted how array length affects the response / Next: accept a new employee with POST.
- Session 12 / Accept employee JSON / Learner reported a successful POST and agent verified the GET list / Learner predicted that the array resets on restart / Next: validate POST input.
- Session 13 / Validate required name / Agent verified rejection and valid insertion / Learner checked a missing property and returned early with guidance / Next: return a salary calculation over HTTP.
- Session 14 / Return a salary preview / Agent verified HTTP 200 and unchanged CLI totals / Learner connected POST input to the shared function with guidance / Next: independently implement and trace a small GET route.

Add one short entry only when a session stops. Format: session / target / observed result / learning evidence or remaining help / next action. Do not invent proficiency levels or successful verification. Keep this file concise; update current state instead of duplicating long logs.
