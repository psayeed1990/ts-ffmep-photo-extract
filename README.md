<h2>Express TypeScript FFMPEG Photo Extract From Video</h2>
<p>Valid query param at GET</p>
<code>
http://localhost:8070/ffmpeg/image?timestamp=2&url=https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4
</code>
<p>Test with:</p>
<code>npm run test:unit</code>
<p>Test run checks for:</p>
<ul>

    <li>✓ Extracted photo should be a string (2 ms)</li>
    <li>✓ Extracted photo should not be a empty string </li>
    <li>✓ Extracted photo should be a base64 string (12 ms)</li>
    <li>✓ Extracted photo should be a valid PNG image (52 ms)</li>

</ul>

<h3>Start dev server</h2>
<code>npm run dev</code>

<h3>Docker build</h3>
<code>docker build -t ffmpeg-photo-extract-from-video .</code>

<h3>Docker run</h3>
<code>docker run -p 8070:8070 -d --name container_name ffmpeg-photo-extract-from-video -e PORT=8070 -e NODE_ENV=development</code>

If doesn't work, try to run:
<code>docker build .</code>
