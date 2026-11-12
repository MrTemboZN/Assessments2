SNAS EXAM GUARD - phone assessment app with front-camera phone detection
=======================================================================
1. Upload ALL files in this folder to a GitHub repository and turn on GitHub Pages
   (Settings > Pages > Deploy from branch: main, / root). The camera only works over https.
2. Send students the link, e.g.  https://YOURNAME.github.io/exam-guard/
   In Chrome they tap the 3-dot menu > "Add to Home screen" / "Install app".
3. Your questions go in questions.json (answer = position of correct option, starting at 0).
   For several tests, add more files (e.g. che251-test1.json) and share
   https://YOURNAME.github.io/exam-guard/?quiz=che251-test1.json
4. maxIncidents = number of incidents before auto-submit (0 = never auto-submit, only record).
5. At the end the student taps "Download report for lecturer" and sends you the HTML report
   (score, every answer, and photo snapshots of every incident).
Detection settings (sensitivity etc.) are at the top of the script in index.html, in CFG.
