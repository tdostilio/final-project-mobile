
const fs = require('fs');
const csv = fs.readFileSync('./MOCK_DATA.csv', 'utf8');
const records = csv.split('\n').slice(1);
const VCARDS = [];
records.forEach(function(record, i) {
  const data = record.split(',');
  const VCARD = [
    'BEGIN:VCARD',
    'VERSION:4.0',
    `N:${data[1]};${data[0]};;;`,
    `FN:${data[0]} ${data[1]}`,
    `TEL;type=HOME:${data[2]}`,
    'END:VCARD'
  ].join('\n');
  VCARDS.push(VCARD);
});
fs.writeFileSync(`./vcards.vcf`, VCARDS.join('\n'));
