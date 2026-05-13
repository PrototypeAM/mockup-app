import { RenderMode, ServerRoute } from '@angular/ssr';
import { jobs } from './data/jbo-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'jobs/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return jobs.map((job) => ({ id: String(job.id) }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
