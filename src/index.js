import md5 from 'blueimp-md5';

export default function fingerprint(){

  // Fetch all visible elements on the page.
  const elements = document.querySelectorAll('body *');
  const hashes = [];

  // For each visible element on the page,
  elements.forEach(($el) => {

    // Fetch the computed styles and stringify prop:value pairs
    let styles = window.getComputedStyle($el);
    let uid = '';
    for (let i=0;i<styles.length;i++) {
      let prop = styles[i];
      let value = styles[prop];
      uid += prop + value;
    }

    // Hash the computed styles string and push to hashes array.
    hashes.push(md5(uid));
  });

  // Return the md5 of our elements md5 array for a unique hash of the entire site.
  return md5(hashes.join());
}
