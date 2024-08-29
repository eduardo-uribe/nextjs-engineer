'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export type Job = {
  job_title: string;
  job_employer: string;
  job_url: string;
  job_salary?: string;
  job_location?: string;
};

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: 'job_title',
    header: 'Title',
    cell: ({ row }) => {
      const title: string = row.getValue('job_title');
      const link: string = row.getValue('job_url');

      return (
        <div className='font-medium'>
          <a href={row.original['job_url']}>{title}</a>
        </div>
      );
    },
  },
  {
    accessorKey: 'job_employer',
    header: 'Company',
  },
  {
    accessorKey: 'job_location',
    header: () => <div className='text-right'>Location</div>,
    cell: ({ row }) => {
      return <div className='text-right'>{row.getValue('job_location')}</div>;
    },
  },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant='ghost' className='h-8 w-8 p-0'>
  //             <span className='sr-only'>Open menu</span>
  //             <MoreHorizontal className='h-4 w-4' />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align='end'>
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
