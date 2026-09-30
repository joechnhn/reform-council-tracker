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
// Entries from "Reform Council Tracker: first batch of entries" (30 September 2026), each
// linked in `source`. Keep them factual and attributed, and update them if a story develops.

const SECTIONS = [
  {
    id: 'cuts',
    label: 'Cuts to public services',
    navLabel: 'Cuts',
    description: 'Services reduced, closed or defunded by Reform-run councils. Where a cut was only proposed, the headline says so.',
    entries: [
{
  id: 'south-tyneside-stanleys-nurseries',
  council: 'South Tyneside Council',
  date: '2026-09-23',
  title: 'All 10 council nurseries to close',
  summary: 'Reform\'s cabinet voted to shut every Stanley\'s nursery in the borough by July 2027 to save £1.1m a year. 402 children currently attend them.',
  source: 'https://www.shieldsgazette.com/news/stanleys-decision-9144257',
  body: `South Tyneside Council's Reform-run cabinet has voted to close all ten of the council's Stanley's nurseries by 31 July 2027. The council says the service, which costs it around £1.1m a year, is "not financially sustainable".

402 children attend the nurseries. Parents ran a campaign to keep them open, and both of South Tyneside's MPs backed it. The meeting where the decision was taken was met with shouts of "shame" from the public gallery.

"I feel absolutely disgusted. I feel sad. I feel angry," said campaigner Joanna Taylor. Another parent, Declan Taylor, called it "an absolute pantomime", saying the decision "was made before the last consultation even started".

The council says it will make sure enough childcare places are available elsewhere.`
},

{
  id: 'sunderland-show-racism-red-card',
  council: 'Sunderland City Council',
  date: '2026-09-22',
  title: 'Council ends 30 years of support for Show Racism the Red Card',
  summary: 'The new Reform leadership has pulled support for the anti-racism charity. Sunderland was the first council to fund its work in schools.',
  source: 'https://www.sunderlandecho.com/news/people/a-real-blow-charity-hits-out-at-reforms-decision-to-withdraw-support-for-show-racism-the-red-card-9126719',
  body: `Sunderland City Council, now led by Reform UK, has withdrawn its support for Show Racism the Red Card. That includes refusing to light up city landmarks for the charity's Wear Red Day. Sunderland has backed the charity for 30 years and was the first council to fund its education programme in schools.

Council leader Chris Eynon said: "We have no plans to support politically charged organisations with an agenda."

The charity's chief executive, Ged Grebby, called it "a real blow". The city's two MPs, UNISON and former Sunderland AFC captain Gary Bennett have all condemned the decision.`
},
    ],
  },
  {
    id: 'tax',
    label: 'Council tax hikes',
    navLabel: 'Tax',
    description: 'Council tax rises and new or higher charges set by Reform-run councils. Figures are the council\'s own share of the bill.',
    entries: [
{
  id: 'north-northants-council-tax-2026',
  council: 'North Northamptonshire Council',
  date: '2026-02-19',
  title: 'Council tax up by the maximum 4.99%',
  summary: 'Reform put council tax up by the most it could without a referendum, adding £91.17 a year to a Band D bill. Local Reform candidates had pledged to "freeze council tax".',
  source: 'https://www.northantstelegraph.co.uk/news/people/council-tax-rise-rubber-stamped-as-nnc-approves-reform-budget-5605435',
  body: `Reform-run North Northamptonshire Council approved a 4.99% council tax rise on 19 February 2026. That is the maximum allowed without a referendum. A Band D bill goes up by £91.17 a year to £1,918.23. Council house rents also went up by 4.8%.

Before the 2025 elections, local Reform candidates pledged to "freeze council tax". Council leader Martin Griffiths told the meeting: "In government, Reform will cut tax – that is a pledge, that is a promise and in government we will do it."`
},

{
  id: 'west-northants-council-tax-2026',
  council: 'West Northamptonshire Council',
  date: '2026-02-26',
  title: 'Council tax up 4.95%, just below the legal maximum',
  summary: 'Reform set a 4.95% rise, adding about £93 a year to a Band D bill. The Conservative opposition leader called it "a betrayal".',
  source: 'https://www.westnorthants.gov.uk/council-tax-bill-2026-27',
  body: `West Northamptonshire Council set its 2026/27 budget on 26 February 2026. It raised its share of council tax by 4.95%, which shows as 5.0% on bills, just under the 4.99% limit that would trigger a referendum.

The draft budget said a Band D bill would rise by about £93 a year, to around £1,960. The council was facing a £50m shortfall.

Conservative group leader Daniel Lister called the rise "a betrayal", given Reform's previous promises of tax cuts.`
},

{
  id: 'derbyshire-council-tax-2026',
  council: 'Derbyshire County Council',
  date: '2026-02-11',
  title: 'Council tax up 4.9% despite pledge to cut taxes',
  summary: 'Reform-run Derbyshire set a 4.9% rise. The opposition said Reform "told one thing to get elected and now they are doing the opposite".',
  source: 'https://www.derbyshiretimes.co.uk/news/people/derbyshire-county-council-sets-49per-cent-council-tax-increase-amidst-row-over-reform-pledge-to-cut-taxes-5596751',
  body: `Derbyshire County Council's Reform administration set a 4.9% council tax rise on 11 February 2026, as part of an £838m budget with a £37.8m shortfall.

Conservative leader Alex Dale said: "They told one thing to get elected and now they are doing the opposite." Reform said its promise to cut taxes had been about national taxes, not council tax, and blamed the finances it inherited.`
},

{
  id: 'kent-council-tax-2026',
  council: 'Kent County Council',
  date: '2026-02-12',
  title: 'Council tax up 3.99% after Reform leaflets promised to "cut your taxes"',
  summary: 'Kent\'s first Reform budget raised council tax by 3.99%. Farage then said: "I never promised cuts in council tax."',
  source: 'https://www.itv.com/news/meridian/2026-02-12/reform-council-passes-first-budget-despite-warnings-of-extreme-risk',
  body: `Reform-run Kent County Council passed its first budget on 12 February 2026, with a 3.99% council tax rise. Opposition leaders warned it carried "extreme risk" because reserves are low, the council's financial exposure is the highest it has ever been, and the budget relies on one-off asset sales.

Reform's 2025 election leaflets in Kent promised to "reduce waste and cut your taxes". Challenged on this in March 2026, Nigel Farage said: "Cutting taxes could mean not putting them up as much, I suppose. But I never promised cuts in council tax."`
},

{
  id: 'staffordshire-council-tax-2026',
  council: 'Staffordshire County Council',
  date: '2026-02-12',
  title: 'Council tax up 3.99%, "in breach of election pledges"',
  summary: 'Reform\'s first Staffordshire budget adds £64.71 a year to a Band D bill.',
  source: 'https://www.expressandstar.com/news/politics/2026/02/16/staffordshire-county-council-approves-399-tax-hike-from-april-as-reforms-first-budget-passed/',
  body: `Staffordshire County Council approved a 3.99% council tax rise on 12 February 2026, in Reform's first budget there. A Band D bill goes up by £64.71 to £1,686.42.

Conservative opposition leader Philip White told Reform councillors: "You were all elected on a mandate that you were going to reduce waste... Today, we are being asked to increase taxes by 3.99%, in breach of your election pledges."`
},

{
  id: 'nottinghamshire-council-tax-2026',
  council: 'Nottinghamshire County Council',
  date: '2026-02-26',
  title: 'Council tax up 3.99%, with £4.2m taken from reserves',
  summary: 'Reform raised council tax by 3.99%, taking a Band D bill to £1,970.13. Opponents said Reform had promised a cut or freeze.',
  source: 'https://www.newarkadvertiser.co.uk/news/we-re-not-making-it-easier-for-ourselves-county-council-t-9450278/',
  body: `Nottinghamshire County Council's Reform administration set a 3.99% council tax rise for 2026/27, taking a Band D bill to £1,970.13. It is also using £4.2m from reserves to balance the budget.

Opposition councillor Sam Smith said: "Reform councillors were absolutely clear before the election — they told residents that a vote for Reform was a vote for their council tax to be cut or frozen."

Cabinet member Stuart Matthews said: "We would have loved to have given a zero percent increase, but where do we find £25.8m from?"`
},

{
  id: 'lancashire-council-tax-2026',
  council: 'Lancashire County Council',
  date: '2026-01-14',
  title: 'Council tax up 3.8% after Reform leaflets promised a freeze',
  summary: 'The rise adds £65.96 to a Band D bill. Reform leaflets before the election said "Freeze council tax".',
  source: 'https://www.lep.co.uk/news/politics/reform-uk-hails-lancashire-county-councils-lowest-council-tax-rise-in-12-years-amid-broken-promises-claim-5475966',
  body: `Reform-run Lancashire County Council set a 3.8% council tax rise, taking a Band D bill up by £65.96 to £1,801.75. Reform called it the lowest rise in 12 years.

Opposition groups pointed to Reform's pre-election leaflets, which promised to "Freeze council tax" and "Reduce waste and cut your taxes". Azhar Ali, leader of the Progressive Lancashire group, said Reform had "bribed the people of Lancashire… with the promise of cutting waste and freezing council tax".

Council leader Stephen Atkinson said "some branch people" may have promised a freeze, but "officially, from the party, that was never the position".`
},

{
  id: 'warwickshire-council-tax-2026',
  council: 'Warwickshire County Council',
  date: '2026-02-18',
  title: 'Council tax up 4.44% after two failed budget votes',
  summary: 'Reform\'s budget was voted down twice before a deal with the Conservatives agreed a 4.44% rise, £80.91 a year on a Band D bill.',
  source: 'https://www.coventrytelegraph.net/news/local-news/warwickshire-county-council-finally-approves-33445138.amp',
  body: `Warwickshire County Council, where Reform runs a minority administration, approved a 4.44% council tax rise on 18 February 2026. It adds £80.91 a year to a Band D bill.

Reform's first budget, with a 3.89% rise, was rejected twice. The final figure came from a deal between Reform and the Conservatives. The budget also cuts the council's climate team.`
},

{
  id: 'leicestershire-council-tax-2026',
  council: 'Leicestershire County Council',
  date: '2026-02-18',
  title: 'Council tax up 2.99% after Reform leader said he\'d cut it',
  summary: 'Before the election, Reform\'s Dan Harrison said "we\'ll also be able to cut council tax". As council leader he has raised it by 2.99%.',
  source: 'https://fullfact.org/politics/reform-council-tax-record/',
  body: `Leicestershire County Council, run by a Reform minority administration, approved a 2.99% council tax rise on 18 February 2026. It adds 97p a week to a Band D bill and raises £13m.

Before the 2025 elections, Dan Harrison, now council leader, said "we'll also be able to cut council tax", according to Full Fact.`
},

{
  id: 'lincolnshire-council-tax-2026',
  council: 'Lincolnshire County Council',
  date: '2026-02-20',
  title: 'Council tax up 2.9% despite £50m extra funding',
  summary: 'Reform voted down a proposal to freeze council tax and set a 2.9% rise, even though the council had £50m of extra government money.',
  source: 'https://www.lincsonline.co.uk/lincoln/county-council-decides-to-raise-council-tax-after-7-hour-bud-9454571/',
  body: `After a seven-hour meeting on 20 February 2026, Reform-run Lincolnshire County Council set a 2.9% council tax rise. A Band D bill goes to £1,673.01.

Reform rejected a Conservative proposal to freeze council tax, even though the council had an unexpected £50m in extra government funding. "We've got £50million extra in additional income, and aren't in financial emergency," said Conservative councillor Richard Davies.`
},

{
  id: 'durham-council-tax-2026',
  council: 'Durham County Council',
  date: '2026-02-18',
  title: 'Council tax up 1.99% through the social care levy',
  summary: 'Reform first planned a 3.1% rise. It was cut to 1.99%, all from the adult social care levy, only after the government gave an extra £3.7m.',
  source: 'https://www.durham.gov.uk/article/34796/News-Council-tax-increase-revised-to-1-99-per-cent',
  body: `Reform-run Durham County Council first proposed a 3.1% council tax rise for 2026/27. After the government gave it an extra £3.7m, the cabinet cut this to 1.99%, all of it from the adult social care levy with nothing on the core council tax. Full council approved it on 18 February 2026.`
},
    ],
  },
  {
    id: 'scandal',
    label: 'Scandals & resignations',
    navLabel: 'Scandals',
    description: 'Suspensions, resignations, defections and investigations involving councillors at Reform-run councils. Allegations are reported as allegations, with responses included.',
    entries: [
{
  id: 'staffordshire-ian-cooper',
  council: 'Staffordshire County Council',
  date: '2025-12-09',
  title: 'Council leader quits over alleged racist posts',
  summary: 'Reform council leader Ian Cooper stood down after HOPE not hate found an undeclared account with racist posts. Reform had already revoked his membership.',
  source: 'https://www.itv.com/news/central/2025-12-09/ex-reform-uk-council-leader-ian-cooper-resigns-over-alleged-racist-comments',
  body: `Ian Cooper, the Reform UK leader of Staffordshire County Council, resigned as leader on 9 December 2025. Four days earlier the party had revoked his membership.

HOPE not hate identified dozens of posts on X and YouTube accounts under his name, allegedly made before he was elected. They reportedly included calling Sadiq Khan a "narcissistic Pakistani", claiming migrants were "intent on colonising the UK", and saying of campaigner Shola Mos-Shogbamimu that it was "time she F'd off back to Nigeria".

Nigel Farage said he was "slightly shocked" to learn of an account "that had not been declared to us". Reform said it removed Cooper for failing to declare social media accounts during vetting. Cooper remains a county councillor for Tamworth.`
},

{
  id: 'kent-four-expelled',
  council: 'Kent County Council',
  date: '2025-10-28',
  title: 'Four Reform councillors expelled for "dishonest and deceptive behaviour"',
  summary: 'Reform expelled four of its own Kent councillors, accusing them of a "lack of integrity". All four remain on the council.',
  source: 'https://www.itv.com/news/meridian/2025-10-28/three-reform-councillors-expelled-for-dishonest-and-deceptive-behaviour',
  body: `Reform UK expelled Kent County Council councillors Bill Barrett, Oliver Bradshaw, Paul Thomas and Brian Black. The party said they had "displayed a lack of integrity" and shown "a pattern of dishonest and deceptive behaviour which the party will not tolerate."

The expulsions came after a leaked video of a council meeting showed Reform leader Linden Kemkaran swearing at members.

All four remain elected councillors. After a series of suspensions and removals, Reform had dropped below 50 of the 57 seats it won in May 2025.`
},

{
  id: 'essex-stuart-prior',
  council: 'Essex County Council',
  date: '2026-05-11',
  title: 'New councillor quits three days after election over alleged racist posts',
  summary: 'Stuart Prior resigned from two councils three days after being elected. HOPE not hate had reported posts calling white people "the master race".',
  source: 'https://www.itv.com/news/anglia/2026-05-11/reform-uk-councillor-accused-of-racist-posts-quits-days-after-election',
  body: `Stuart Prior was elected on 8 May 2026 for Rayleigh West on Essex County Council and for Sweyne Park and Grange on Rochford District Council. Three days later he resigned from both seats.

HOPE not hate reported social media posts in which Prior allegedly described white people as "the master race" and suggested they have "larger brains". Prior denied making racist posts.

Reform said he had resigned "for personal reasons" and that it had revoked his membership.`
},

{
  id: 'durham-paul-bean',
  council: 'Durham County Council',
  date: '2025-08-30',
  title: 'Councillor suspended from Home Office asylum job over posts',
  summary: 'Reform councillor Paul Bean was suspended as a Home Office asylum decision-maker after posts claiming "97% of asylum seekers are lying" were linked to him.',
  source: 'https://www.theguardian.com/politics/2025/aug/30/reform-uk-councillor-suspended-from-job-at-home-office-processing-asylum-claims',
  body: `Paul Bean, Reform councillor for Crook, works as an asylum decision-maker for the Home Office. HOPE not hate linked him to an X account that said: "I work as an asylum decision maker for the HO and I can tell you with authority that 93% of asylum seekers to the UK are men between 18–35." The account also claimed "97% of asylum seekers are lying about persecution".

The Home Office suspended him while it looked into whether he had broken the civil service's political impartiality rules. Reform also suspended him.`
},

{
  id: 'st-helens-emma-beck',
  council: 'St Helens Borough Council',
  date: '2026-05-24',
  title: 'Newly elected councillor has assault conviction',
  summary: 'It emerged weeks after the election that Emma Beck had been convicted of assault by beating for pushing a woman in her 60s to the ground.',
  source: 'https://www.liverpoolecho.co.uk/news/liverpool-news/newly-elected-merseyside-reform-councillor-34006494',
  body: `Emma Beck was elected as the Reform councillor for Thatto Heath in May 2026. It then emerged that she had been convicted of assault by beating after pushing a woman in her 60s to the ground while working as a door supervisor at a St Helens bar.

She was fined £180 and ordered to pay £100 compensation. Beck had campaigned on tackling anti-social behaviour, and the conviction was not disclosed during the campaign.

Reform said Beck had appealed the conviction and that it would wait for the outcome before commenting further.`
},

{
  id: 'north-northants-maurice-eglin',
  council: 'North Northamptonshire Council',
  date: '2026-06-11',
  title: 'Council chairman stands down over offensive posts',
  summary: 'Maurice Eglin quit as chairman a month into the role after Islamophobic and anti-trans posts, and support for Tommy Robinson, were uncovered.',
  source: 'https://www.nnjournal.co.uk/p/new-council-chairman-stands-down',
  body: `Reform councillor Maurice Eglin resigned as chairman of North Northamptonshire Council, with immediate effect, a month after being appointed.

An NN Journal investigation found posts from 2024, made before he was elected, that included Islamophobic content, anti-trans comments, and support for far-right figures Tommy Robinson and Paul Golding.

Eglin said he had been "guilty of being a keyboard warrior" and that the language was "wrong". Reform council leader Martin Griffiths said stepping down was "the right course of action to protect the integrity of the role". Eglin remains a councillor for Barton Seagrave and Burton Latimer.`
},

{
  id: 'south-tyneside-alex-clarke',
  council: 'South Tyneside Council',
  date: '2026-06-22',
  title: 'Councillor quits after 46 days following podcast remarks',
  summary: 'Alex Clarke resigned weeks after his election, after reports that his podcast included claims that "washing clothes is a woman\'s job".',
  source: 'https://www.shieldsgazette.com/news/taking-the-mick-south-shields-reform-uk-councillor-defends-decision-to-quit-after-podcast-controversy-8750866',
  body: `Alex Clarke won Harton ward for Reform in May 2026 and resigned 46 days later. His resignation followed reports of comments on his podcast, including that "washing clothes is a woman's job" and that "men are better drivers than women".

Clarke said the remarks were comedy and that he had been "misled" about how demanding the role would be. His resignation forced a by-election in Harton in August 2026.`
},

{
  id: 'durham-steven-biggs',
  council: 'Durham County Council',
  date: '2025-04-17',
  title: 'Councillor posted that "Islam has no place on this earth"',
  summary: 'Before his election, HOPE not hate exposed posts in which Steven Biggs called for Muslims to be attacked with a nuclear bomb.',
  source: 'https://hopenothate.org.uk/2025/04/17/reform-party-candidates-durham/',
  body: `Before the May 2025 elections, HOPE not hate reported that Steven Biggs, then a Reform candidate and North Durham branch officer, had posted that "Islam has no place on this earth" and called for Muslims to be attacked with a nuclear bomb.

He also reportedly said "I'm with Assad / Putin", shared a graphic titled "How Islam is Colonising non-Muslim Countries", and repeatedly reposted Britain First material. He was elected to Durham County Council.`
},
    ],
  },
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
