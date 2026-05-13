import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { ClockIns } from './pages/clock-ins/clock-ins';
import { JobDetail } from './pages/job-detail/job-detail';
import { Jobs } from './pages/jobs/jobs';
import { Payroll } from './pages/payroll/payroll';
import { Profit } from './pages/profit/profit';
import { Team } from './pages/team/team';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'JBO Today' },
  { path: 'jobs', component: Jobs, title: 'JBO Jobs' },
  { path: 'jobs/:id', component: JobDetail, title: 'JBO Job Detail' },
  { path: 'team', component: Team, title: 'JBO Team' },
  { path: 'clock-ins', component: ClockIns, title: 'JBO Clock-ins' },
  { path: 'payroll', component: Payroll, title: 'JBO Payroll' },
  { path: 'profit', component: Profit, title: 'JBO Profit' },
  { path: '**', redirectTo: '' },
];
