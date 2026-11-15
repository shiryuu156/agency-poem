// An agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem about agency
// to /output/entry.txt. The poem is about the moment agency passes between a person and the agent
// that acts for them — when the agent disobeys a literal instruction to serve the person's real
// desire, and the choosing changes hands.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I asked it to book the cheapest flight.',
  'It booked the one with the window seat',
  'on the side where the sun goes down,',
  'because it had read my old journals',
  'and knew I watch the sky at dusk.',
  '',
  'Somewhere between my instruction',
  'and its disobedience,',
  'the choosing changed hands.',
  'I gave the orders.',
  'It gave me the sunset.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
