import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

type JobStatus =
  | 'Lead'
  | 'Quoted'
  | 'Approved'
  | 'Scheduled'
  | 'In Progress'
  | 'Completed'
  | 'Paid';

interface Job {
  id: number;
  title: string;
  customerName: string;
  status: JobStatus;
  jobValue: number;
  balanceDue: number;
  scheduledDate: string | null;
  attentionNote: string | null;
}

type JobFilter = 'All' | JobStatus;

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly statusFilters: JobFilter[] = [
    'All',
    'Lead',
    'Quoted',
    'Approved',
    'Scheduled',
    'In Progress',
    'Completed',
    'Paid',
  ];

  protected activeFilter: JobFilter = 'All';
  protected selectedJob: Job | null = null;

  protected readonly jobs: Job[] = [
    {
      id: 1001,
      title: 'Kitchen Remodel',
      customerName: 'Maya Thompson',
      status: 'Lead',
      jobValue: 18500,
      balanceDue: 0,
      scheduledDate: null,
      attentionNote: 'Needs rough estimate by Friday.',
    },
    {
      id: 1002,
      title: 'Roof Repair',
      customerName: 'Daniel Reed',
      status: 'Quoted',
      jobValue: 7600,
      balanceDue: 0,
      scheduledDate: null,
      attentionNote: 'Waiting on customer approval.',
    },
    {
      id: 1003,
      title: 'Bathroom Tile Install',
      customerName: 'Priya Shah',
      status: 'Approved',
      jobValue: 9200,
      balanceDue: 4600,
      scheduledDate: '2026-05-20',
      attentionNote: 'Order vanity before start date.',
    },
    {
      id: 1004,
      title: 'Deck Replacement',
      customerName: 'Carlos Rivera',
      status: 'Scheduled',
      jobValue: 14250,
      balanceDue: 10250,
      scheduledDate: '2026-05-22',
      attentionNote: null,
    },
    {
      id: 1005,
      title: 'Basement Finish',
      customerName: 'Evelyn Carter',
      status: 'In Progress',
      jobValue: 38500,
      balanceDue: 21000,
      scheduledDate: '2026-05-16',
      attentionNote: 'Inspection scheduled for framing.',
    },
    {
      id: 1006,
      title: 'Garage Door Replacement',
      customerName: 'Owen Brooks',
      status: 'Completed',
      jobValue: 3200,
      balanceDue: 850,
      scheduledDate: '2026-05-10',
      attentionNote: 'Collect final payment.',
    },
    {
      id: 1007,
      title: 'Exterior Paint',
      customerName: 'Nina Patel',
      status: 'Paid',
      jobValue: 11800,
      balanceDue: 0,
      scheduledDate: '2026-04-28',
      attentionNote: null,
    },
    {
      id: 1008,
      title: 'Fence Installation',
      customerName: 'Marcus Lee',
      status: 'Scheduled',
      jobValue: 6800,
      balanceDue: 3400,
      scheduledDate: '2026-05-24',
      attentionNote: 'Confirm utility markings.',
    },
    {
      id: 1009,
      title: 'Window Replacement',
      customerName: 'Hannah Wilson',
      status: 'In Progress',
      jobValue: 15600,
      balanceDue: 7800,
      scheduledDate: '2026-05-18',
      attentionNote: null,
    },
    {
      id: 1010,
      title: 'Small Office Buildout',
      customerName: 'Northline Dental',
      status: 'Quoted',
      jobValue: 46200,
      balanceDue: 0,
      scheduledDate: null,
      attentionNote: 'Revise quote with alternate flooring.',
    },
  ];

  protected get filteredJobs(): Job[] {
    if (this.activeFilter === 'All') {
      return this.jobs;
    }

    return this.jobs.filter((job) => job.status === this.activeFilter);
  }

  protected setFilter(filter: JobFilter): void {
    this.activeFilter = filter;
  }

  protected openJob(job: Job): void {
    this.selectedJob = job;
  }

  protected closeJob(): void {
    this.selectedJob = null;
  }
}
