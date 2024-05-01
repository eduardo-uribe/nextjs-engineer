import { promises as fs } from 'fs';

type Job = {
  job_title: string;
  job_employer: string;
  job_url: string;
  job_salary?: string;
  job_location?: string;
};

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <>
      <nav className='mt-8'>
        <p className='w-[45ch] mx-auto'>Next.js Engineer</p>
      </nav>
      <main>
        <ul className='w-[45ch] mx-auto mt-6'>
          {data.map((job: Job) => (
            <li key='job.job_url' className='mt-6'>
              <p className='font-semibold'>{job.job_title}</p>
              <p>{job.job_employer}</p>
              {job.job_salary && <p>{job.job_salary}</p>}
              {job.job_location && <p>{job.job_location}</p>}
              <a className='underline' href={job.job_url}>
                Apply
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
