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
// Optional:
//   body     – the full story for its own page. Separate paragraphs with a blank line.
//              Use backticks (`like this`) so it can run over several lines.
//              If left out, the story page shows the summary.
//   id       – fixes the story's web address. By default it's made from the date and
//              headline (e.g. story.html?id=2026-03-02-youth-services-funding-cut), so
//              editing a headline changes the link. Once a story has been shared, copy its
//              current id here so old links keep working if you change the headline.
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
      { council: 'Example Council B', date: '2026-03-02', title: 'Placeholder: youth services funding cut', summary: 'Sed do eiusmod tempor incididunt ut labore et dolore.', source: '#',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.` }
    ]
  },
  {
    id: 'tax',
    label: 'Council tax hikes',
    navLabel: 'Tax',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rises in council tax and other charges.',
    entries: [
      { council: 'Example Council C', date: '2026-02-20', title: 'Placeholder: council tax up 4.99%', summary: 'Ut enim ad minim veniam, quis nostrud exercitation.', source: '#',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.` }
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

// Reform-run councils, used for the map and the postcode lookup.
//
// Each council needs:
//   name        – official council name (entries above should use this name in their `council` field)
//   code        – ONS code for the council area (e.g. E10000016 for Kent). The map uses this to shade the area.
//   control     – 'majority', 'minority' or 'coalition'
//   seats       – number of Reform councillors
//   totalSeats  – total number of seats on the council
//   since       – date Reform took control, YYYY-MM-DD
//   note        – optional extra line shown in the map box
//
// Figures change with by-elections and defections, so check them from time to time.
// Seat figures from Open Council Data UK (opencouncildata.co.uk) as of 24 September 2026, cross-checked with Wikipedia.
// District councils (codes starting E07) sit inside a county, so they aren't drawn on the map, but postcode searches find them.

const COUNCILS = [
  // Won May 2025
  { name: 'Kent County Council',                code: 'E10000016', control: 'majority', seats: 47, totalSeats: 81, since: '2025-05-01' },
  { name: 'Lancashire County Council',          code: 'E10000017', control: 'majority', seats: 51, totalSeats: 84, since: '2025-05-01' },
  { name: 'Derbyshire County Council',          code: 'E10000007', control: 'majority', seats: 42, totalSeats: 64, since: '2025-05-01' },
  { name: 'Nottinghamshire County Council',     code: 'E10000024', control: 'majority', seats: 41, totalSeats: 66, since: '2025-05-01' },
  { name: 'Staffordshire County Council',       code: 'E10000028', control: 'majority', seats: 43, totalSeats: 62, since: '2025-05-01' },
  { name: 'Lincolnshire County Council',        code: 'E10000019', control: 'majority', seats: 42, totalSeats: 70, since: '2025-05-01' },
  { name: 'Durham County Council',              code: 'E06000047', control: 'majority', seats: 51, totalSeats: 98, since: '2025-05-01' },
  { name: 'North Northamptonshire Council',     code: 'E06000061', control: 'majority', seats: 39, totalSeats: 68, since: '2025-05-01' },
  { name: 'West Northamptonshire Council',      code: 'E06000062', control: 'majority', seats: 39, totalSeats: 76, since: '2025-05-01' },
  { name: 'City of Doncaster Council',          code: 'E08000017', control: 'majority', seats: 34, totalSeats: 55, since: '2025-05-01', note: 'Majority of seats, but the council is run by a directly elected Labour mayor' },
  { name: 'Leicestershire County Council',      code: 'E10000018', control: 'minority', seats: 23, totalSeats: 55, since: '2025-05-14' },
  { name: 'Warwickshire County Council',        code: 'E10000031', control: 'minority', seats: 17, totalSeats: 57, since: '2025-05-16' },

  // Won May 2026
  { name: 'Essex County Council',               code: 'E10000012', control: 'majority', seats: 50, totalSeats: 78, since: '2026-05-07' },
  { name: 'Suffolk County Council',             code: 'E10000029', control: 'majority', seats: 41, totalSeats: 70, since: '2026-05-07' },
  { name: 'Thurrock Council',                   code: 'E06000034', control: 'majority', seats: 43, totalSeats: 49, since: '2026-05-07' },
  { name: 'Barnsley Metropolitan Borough Council', code: 'E08000038', control: 'majority', seats: 41, totalSeats: 63, since: '2026-05-07' },
  { name: 'Calderdale Metropolitan Borough Council', code: 'E08000033', control: 'majority', seats: 34, totalSeats: 54, since: '2026-05-07' },
  { name: 'Gateshead Metropolitan Borough Council', code: 'E08000037', control: 'majority', seats: 38, totalSeats: 66, since: '2026-05-07' },
  { name: 'Sandwell Metropolitan Borough Council', code: 'E08000028', control: 'majority', seats: 41, totalSeats: 72, since: '2026-05-07' },
  { name: 'South Tyneside Council',             code: 'E08000023', control: 'majority', seats: 40, totalSeats: 54, since: '2026-05-07' },
  { name: 'St Helens Borough Council',          code: 'E08000013', control: 'majority', seats: 34, totalSeats: 48, since: '2026-05-07' },
  { name: 'Sunderland City Council',            code: 'E08000024', control: 'majority', seats: 57, totalSeats: 75, since: '2026-05-07' },
  { name: 'Wakefield Council',                  code: 'E08000036', control: 'majority', seats: 55, totalSeats: 63, since: '2026-05-07' },
  { name: 'Walsall Council',                    code: 'E08000030', control: 'majority', seats: 37, totalSeats: 60, since: '2026-05-07' },
  { name: 'Havering London Borough Council',    code: 'E09000016', control: 'majority', seats: 39, totalSeats: 55, since: '2026-05-07' },
  { name: 'Newcastle-under-Lyme Borough Council', code: 'E07000195', control: 'majority', seats: 26, totalSeats: 44, since: '2026-05-07' },
  { name: 'City of Bradford Metropolitan District Council', code: 'E08000032', control: 'minority', seats: 28, totalSeats: 90, since: '2026-05-19' },
  { name: 'Rochford District Council',          code: 'E07000075', control: 'minority', seats: 12, totalSeats: 39, since: '2026-05-19' },
  { name: 'Cannock Chase District Council',     code: 'E07000192', control: 'minority', seats: 13, totalSeats: 36, since: '2026-05-20' },
  { name: 'Nuneaton and Bedworth Borough Council', code: 'E07000219', control: 'minority', seats: 16, totalSeats: 38, since: '2026-05-20' },
  { name: 'East Sussex County Council',         code: 'E10000011', control: 'minority', seats: 22, totalSeats: 50, since: '2026-05-21' },
  { name: 'North East Lincolnshire Council',    code: 'E06000012', control: 'minority', seats: 13, totalSeats: 42, since: '2026-05-21' },
  { name: 'Hartlepool Borough Council',         code: 'E06000001', control: 'coalition', seats: 15, totalSeats: 36, since: '2026-05-21', note: 'Reform-led coalition with independent councillors' },
  { name: 'Norfolk County Council',             code: 'E10000020', control: 'minority', seats: 39, totalSeats: 84, since: '2026-05-28' },
  { name: 'Kirklees Council',                   code: 'E08000034', control: 'minority', seats: 26, totalSeats: 69, since: '2026-07-15' },
];
