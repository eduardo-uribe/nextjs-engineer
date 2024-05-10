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
      <nav className='m-6'>
        <p className='font-medium'>Next.js Engineer</p>
      </nav>
      <main className='m-6'>
        <h1 className='mx-auto w-1/3 text-xl font-medium mb-12'>
          Join an engineering team developing their product with Next.js your
          React framework of choice.
        </h1>
        <ul className='mx-auto w-1/3'>
          {data.map((job: Job) => (
            <li key='job.job_url' className='mt-10'>
              <p className='font-medium'>{job.job_title}</p>
              <p className='text-zinc-500 text-sm'>{job.job_employer}</p>
              {job.job_salary && (
                <p className='text-zinc-500 text-sm'>{job.job_salary}</p>
              )}
              {job.job_location && (
                <p className='text-zinc-500 text-sm'>{job.job_location}</p>
              )}
              <a className='underline text-sm font-medium' href={job.job_url}>
                Apply
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
