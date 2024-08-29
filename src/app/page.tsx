import { promises as fs } from 'fs';
import { Job, columns } from './columns';
import { DataTable } from './data-table';

// async function getData(): Promise<Job[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       // id: '728ed52f',
//       job_title: 'Front End Engineer',
//       job_employer: 'Startup',
//       job_url: 'https://startup.com',
//     },
//     {
//       // id: '728ed52f',
//       job_title: 'Front End Engineer',
//       job_employer: 'Startup',
//       job_url: 'https://startup.com',
//     },
//     {
//       // id: '728ed52f',
//       job_title: 'Front End Engineer',
//       job_employer: 'Startup',
//       job_url: 'https://startup.com',
//     },
//     {
//       // id: '728ed52f',
//       job_title: 'Front End Engineer',
//       job_employer: 'Startup',
//       job_url: 'https://startup.com',
//     },
//     {
//       // id: '728ed52f',
//       job_title: 'Front End Engineer',
//       job_employer: 'Startup',
//       job_url: 'https://startup.com',
//     },
//     {
//       // id: '728ed52f',
//       job_title: 'Front End Engineer',
//       job_employer: 'Startup',
//       job_url: 'https://startup.com',
//     },
//     {
//       // id: '728ed52f',
//       job_title: 'Front End Engineer',
//       job_employer: 'Startup',
//       job_url: 'https://startup.com',
//     },
//     {
//       // id: '728ed52f',
//       job_title: 'Front End Engineer',
//       job_employer: 'Startup',
//       job_url: 'https://startup.com',
//     },
//     // ...
//   ];
// }

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);
  // const data = await getData();

  return (
    <>
      <nav className='max-w-[62ch] m-auto mt-24'>
        <p className='font-medium'>Next.js engineer</p>
      </nav>
      <main className='max-w-[62ch] m-auto'>
        <h1 className='text-neutral-500'>
          Join a team shipping products with Next.js
        </h1>

        <DataTable columns={columns} data={data} />
        {/* <ul>
          {data.map((job: Job) => (
            <li key={job.job_url} className='mt-6'>
              <p className='font-medium text-neutral-900'>{job.job_title}</p>
              <p className='text-zinc-500 text-sm'>{job.job_employer}</p>
              {job.job_salary && (
                <p className='text-zinc-500 text-sm'>{job.job_salary}</p>
              )}
              {job.job_location && (
                <p className='text-zinc-500 text-sm'>{job.job_location}</p>
              )}
              <a
                className='underline text-sm font-semibold text-neutral-900'
                href={job.job_url}
              >
                Apply
              </a>
            </li>
          ))}
        </ul> */}
      </main>
    </>
  );
}
