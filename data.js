// Tracker entries. Edit this file to add, change or remove records.
//
// Each section has an id, label, navLabel (short name for the top-right menu)
// and optional description (shown under the heading).
//
// Each entry needs:
//   council  – council name
//   date     – YYYY-MM-DD (entries are sorted newest first automatically)
//   title    – one-line headline
//   summary  – a sentence or two of detail
//   source   – link to the source (news article, council minutes, etc.)
//
// The entries below are placeholders. Replace them with real, sourced records.

const SECTIONS = [
  {
    id: 'cuts',
    label: 'Cuts to public services',
    navLabel: 'Cuts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Services reduced, closed or defunded.',
    entries: [
      { council: 'Example Council A', date: '2026-01-15', title: 'Placeholder: library opening hours reduced', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', source: '#' },
      { council: 'Example Council B', date: '2026-03-02', title: 'Placeholder: youth services funding cut', summary: 'Sed do eiusmod tempor incididunt ut labore et dolore.', source: '#' }
    ]
  },
  {
    id: 'tax',
    label: 'Council tax hikes',
    navLabel: 'Tax',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rises in council tax and other charges.',
    entries: [
      { council: 'Example Council C', date: '2026-02-20', title: 'Placeholder: council tax up 4.99%', summary: 'Ut enim ad minim veniam, quis nostrud exercitation.', source: '#' }
    ]
  },
  {
    id: 'scandal',
    label: 'Scandals & resignations',
    navLabel: 'Scandals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Controversies, suspensions and departures.',
    entries: [
      { council: 'Example Council D', date: '2026-04-11', title: 'Placeholder: cabinet member resigns', summary: 'Duis aute irure dolor in reprehenderit in voluptate.', source: '#' }
    ]
  }
];
