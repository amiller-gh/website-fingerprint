import md5 from 'blueimp-md5';

const PSEUDOS = [
  null,
  ':after',
  ':before',
  ':cue',
  ':first-letter',
  ':first-line',
  ':selection',
  ':backdrop',
  ':placeholder',
  ':marker',
  ':spelling-error',
  ':grammar-error'
];

export default function fingerprint(){

  // Fetch all visible elements on the page.
  const elements = document.querySelectorAll('body *');
  const hashes = [];

  // Fetch the computed styles for every visible element and its pseudos.
  // Hash the computed styles string and push to hashes array.
  elements.forEach(( $el ) => {
    PSEUDOS.forEach(( pseudo ) => {
      let styles = window.getComputedStyle($el, pseudo);
      hashes.push( md5(styles.cssText) );
    });
  });

  // Return the md5 of our elements md5 array for a unique hash of the entire site.
  return md5( hashes.join() );
}
