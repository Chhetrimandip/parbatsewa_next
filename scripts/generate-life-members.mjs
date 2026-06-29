// One-off: builds an NDJSON file to import the life-member list into Sanity.
// Run:  node scripts/generate-life-members.mjs
// Then: npx sanity dataset import scripts/life-members.ndjson <dataset> --replace
import { writeFileSync } from 'node:fs';

const names = [
  'Prakash sharma',
  'Baburam sharma',
  'Basanta chapagain',
  'Laxman malla',
  'Guman singh gurung',
  'Hemant malla',
  'Surya poudel',
  'Shyam paudel',
  'Ashok Lamichhane',
  'Sushil khadka',
  'Deepak sharma',
  'Prabin giri',
  'Shyam regmi',
  'Pushpa regmi',
  'Jeewan regmi',
  'Saroj karki',
  'Surya chhetri',
  'Shankar chapagain',
  'Punam basel',
  'Kishan puri',
  'Dilip k Lamichhane',
  'Binod sharma',
  'Sudip paudel',
  'Deepak subedi',
  'Sunil regmi',
  'Rayan chhetri',
  'Manish rijal',
  'Prakash gautam',
  'Sushma devi gautam',
  'Manju chhetri',
  'Prakash chhetri (yam)',
  'Prakash chhetri',
  'Khem thapa magar',
  'Krishna p paudel',
  'Krishna Kc',
  'Arjun Lamichhane',
  'Purna shrestha',
  'Raju pun',
  'Santosh Lamichhane',
  'Kishor Lamichhane',
  'Nar Bdr gc (Raju)',
  'Indu thapa',
  'Nishan poudal chetri',
  'Durga bahadur subedi',
  'Keshav subedi',
  'Raj Kumar Gurung',
  'Surya hamal',
  'SABIN CHHETRI',
  'Nabraj pun',
  'Samir Bhusal',
  'Rajan gurung',
  'Mahendra chhantyal',
  'Yam prasad Rijal',
  'Ramesh sharma',
  'Sudin pariyar',
  'Arjun timilsina',
  'Youbak Shrestha',
  'Bigyan Aryal',
  'Anu Gurung',
  'Sudin Kumar pariyar',
];

const lines = names.map((name, i) =>
  JSON.stringify({
    _id: `lifeMember.import-${i + 1}`,
    _type: 'lifeMember',
    name,
    order: i + 1,
  })
);

const out = new URL('./life-members.ndjson', import.meta.url);
writeFileSync(out, lines.join('\n') + '\n');
console.log(`Wrote ${names.length} life members to ${out.pathname}`);
