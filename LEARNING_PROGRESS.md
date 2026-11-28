# Learning Progress — Payroll System

- Current phase: 3 — Data Persistence (complete)
- Current session: 32
- Status: Session 32 complete.
- Last verified result: Fresh Express processes returned the same three PostgreSQL employee rows, names and numeric count with HTTP 200. The learner identified the `employees` table and `res.json(result.rows)` in the GET handler.
- Next action: Start Phase 4 by deciding which data belongs to a payroll batch and which belongs to one employee's payroll item.

## Completed features
- Print one fictitious employee's base salary from `payroll.js`.
- Add an allowance to the base salary and print the total.
- Subtract a deduction and print the resulting salary.
- Name the salary amounts with `const` and use the names in the calculation.
- Group salary amounts in one employee object and read its properties in the calculation.
- Calculate and return salary from an employee object with `hitungGaji`.
- Calculate each salary in an employee array with `for...of`.
- Detect an undefined base salary and skip that employee's calculation.
- Return the current employee count as JSON from `GET /employees/count`.
- Return employee names from PostgreSQL as a JSON array from `GET /employees/names`.
- Define a valid PostgreSQL service with persistent storage in `docker-compose.yml`.
- Run PostgreSQL through Docker Compose and verify its healthy status.
- Connect to `payroll_db` with containerized `psql` and run a `SELECT` query.
- Define a reference-style `employees` table migration using integer rupiah for `salary`.
- Execute the first migration and create the permanent `employees` table.
- Insert, retrieve and correct one fictitious employee row with SQL.
- Load local database settings and query PostgreSQL through a reusable Node.js pool.
- Read employee IDs and names from PostgreSQL in the shape used by `GET /employees`.
- Serve the PostgreSQL employee list as JSON from `GET /employees`.
- Insert a fictitious employee from Node.js using a parameterized query and return the generated ID.
- Persist employee requests through `POST /employees` and reject missing or null required values in a JSON body.
- Return a numeric employee count from PostgreSQL through `GET /employees/count`.
- Verify that employee data survives an Express restart and that the list, names and count still agree.

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
| Express GET route and JSON response | 3 | Learner completed an employee-count route with hints, implemented a names variation, and traced its array-to-JSON response with brief prompting. |
| Docker Compose service, port mapping and named volume | 3 | Learner completed the PostgreSQL Compose configuration through iterative validation and explained that host port `5433` reaches the container and the named volume preserves database files across container recreation. |
| Container healthcheck and database readiness | 3 | Learner added `pg_isready`, started the service, and distinguished a started container from PostgreSQL accepting connections after explanation and recall prompts. |
| `psql` connection and basic `SELECT` | 3 | Learner connected to `payroll_db`, ran `SELECT current_database();`, and explained that the result proves the session reached the intended database after prompts. |
| SQL table definition, data types and constraints | 3 | Learner assembled the `employees` table migration through iterative review; PostgreSQL accepted it in a rolled-back transaction, and learner recognized that rollback restores the prior database state. |
| Migration execution and table inspection | 3 | The learner executed the migration; agent verified 11 columns, one primary key, two unique constraints and zero rows. Learner explained required versus nullable columns with a prompt. |
| SQL `INSERT`, `SELECT` and targeted `UPDATE` | 3 | Learner inserted Rina, corrected literal placeholders with guidance, advanced `updated_at`, and explained that `WHERE id = 1` limits the update to one employee. |
| Node.js database configuration and `pg.Pool` | 3 | Learner loaded `.env`, created a pool and added the missing `module.exports` after a hint, then ran a query through the exported pool. |
| SQL aliases in JavaScript query results | 3 | Learner ran the `nama_db` variation after feedback and used `name AS nama` in an employee query with a fill-in scaffold. |
| `async` and `await` in an Express handler | 3 | Learner used the awaited query with guidance and traced that `res.json(result.rows)` runs after the query result is available. |
| JSON payload types and PostgreSQL columns | 3 | Learner drafted all six required fields and corrected code and ID values to strings with feedback. The account number and bank code retained leading zeros. |
| Positional SQL parameters | 3 | Learner filled the six-value array and inserted Budi with guidance. After an explanation of parameter order, learner identified the account number as the fifth value. |
| Checking required request values before a query | 3 | Learner built `values` from `req.body` and added a `.some()` guard with guidance. After feedback, learner identified `undefined` as the value of a missing property. |
| `COUNT(*)` and numeric JSON values | 3 | Learner observed the count as a string, extracted it from the first query row and used `Number()` with guidance. |
| Tracing a database-backed GET | 3 | From the handler, learner identified the `employees` table as the source and `result.rows` as the JSON response body after an Express restart. |

## Current session checkpoint
- Target: Remove the old in-memory array from `server.js` and verify that the employee read endpoints agree across an Express restart.
- Evidence: Agent removed the unused declaration and verified matching list, names and count responses across separate Express processes. Learner traced `GET /employees` from the `employees` table to `res.json(result.rows)`. Phase 3 exit evidence established.

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
- Session 15 / Return employee count through GET / Learner and agent verified `1`, then agent verified `2` after POST and `1` after restart / Learner completed the route with hints and traced its in-memory state / Next: repeat one small GET route variation independently for Phase 2 exit evidence.
- Session 16 / Return employee names through GET / Agent verified `["Rina"]`, `["Rina","Budi"]` after POST, and reset after a new server instance / Learner traced the loop and JSON response with brief wording prompts; Phase 2 exit evidence established / Next: introduce persistence and check PostgreSQL availability.
- Session 17 / Explain in-memory storage and begin environment check / Learner identified `daftarPegawai` as temporary storage; agent found no native PostgreSQL CLI, service, or standard installation folder, while Docker's custom path had not yet been checked / Persistence need understood; environment check remained incomplete / Next: recheck the learner-provided Docker installation.
- Session 18 / Create and validate a PostgreSQL Compose service / `docker compose config` accepted the image, environment, port and named volume / Learner corrected validation errors with guidance and explained port mapping and persistence after instruction / Next: add a readiness check, start PostgreSQL and verify healthy status.
- Session 19 / Add readiness check and start PostgreSQL / Agent verified the container remained `Up (healthy)` on host port `5433` / Learner added the healthcheck and explained readiness after prompts / Next: connect with containerized `psql` and run one `SELECT` query.
- Session 20 / Connect with `psql` and run a first `SELECT` / Learner and agent each received `payroll_db` from `SELECT current_database();` / Learner explained that the result proves connection to the intended database after prompts / Next: create and inspect a minimal `employees` table.
- Session 21 / Define the reference-style `employees` migration / PostgreSQL accepted the SQL inside a transaction and `ROLLBACK` left no table behind / Learner built the schema with iterative feedback and recognized rollback restores prior state / Next: execute the migration permanently and inspect the table.
- Session 22 / Execute and inspect the `employees` migration / Agent verified 11 columns, one primary key, two unique constraints and zero rows / Learner explained required and nullable columns with a prompt / Next: insert and retrieve one fictitious employee.
- Session 23 / Insert and retrieve one employee / Agent verified one Rina row with salary `4000000`, corrected fields and advanced `updated_at` / Learner used guided `INSERT` and `UPDATE`, then explained the role of `WHERE` / Next: prepare the Node.js PostgreSQL connection with approval before installing `pg`.
- Session 24 / Query PostgreSQL through a reusable Node.js pool / Learner and agent obtained `payroll_db` / Learner applied the export hint and ran a SQL alias variation with guidance / Next: read employee rows from Node in the shape needed by `GET /employees`.
- Session 25 / Read employee rows through the pool / Learner and agent obtained one Rina row with `id` and `nama` / Learner applied `name AS nama` with a scaffold / Next: connect the query to `GET /employees` and check the JSON response.
- Session 26 / Return PostgreSQL employee rows from `GET /employees` / Agent verified HTTP 200 and one Rina row as a JSON array / Learner corrected the SQL and response shape with guidance and traced when `await` allows the response to run / Next: map the POST body to required PostgreSQL columns.
- Session 27 / Prepare a fictitious employee JSON body / Agent verified the six required fields, matching types and available unique values / Learner corrected string identifiers with guidance / Next: use the draft in a parameterized `INSERT` through Node.js.
- Session 28 / Run a parameterized `INSERT` from Node.js / Learner received `id: 2`; agent verified the saved Budi row / Learner mapped the fifth value after feedback on parameter order / Next: use the query in `POST /employees` with values from the request body.
- Session 29 / Persist an employee through POST / Agent verified Dina in PostgreSQL and GET, and HTTP 400 for incomplete JSON / Learner built the parameter array and applied a required-value guard with feedback / Next: count employees from PostgreSQL.
- Session 30 / Count employees in PostgreSQL / Agent verified numeric `count: 3` matched the live list / Learner extracted and converted the result with guidance / Next: read employee names from PostgreSQL.
- Session 31 / Read employee names from PostgreSQL / Learner reported all three names; agent verified the list, names and count agree / Learner adapted the existing loop with guidance / Next: remove the unused array and verify persistence across a server restart.
- Session 32 / Verify persistence across an Express restart / Agent verified HTTP 200 and the same three employees in fresh processes / Learner identified the query's table and JSON response data / Next: define a payroll batch and its employee items in Phase 4.

Add one short entry only when a session stops. Format: session / target / observed result / learning evidence or remaining help / next action. Do not invent proficiency levels or successful verification. Keep this file concise; update current state instead of duplicating long logs.
