<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;family=Playfair+Display:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          :root {
            --bg-color: #0b0c10;
            --text-color: #f3f4f6;
            --card-bg: #111827;
            --border-color: #1f2937;
            --primary-color: #6366f1;
            --muted-text: #9ca3af;
            --hover-bg: #1f2937;
          }
          @media (prefers-color-scheme: light) {
            :root {
              --bg-color: #f9fafb;
              --text-color: #111827;
              --card-bg: #ffffff;
              --border-color: #e5e7eb;
              --primary-color: #4f46e5;
              --muted-text: #6b7280;
              --hover-bg: #f3f4f6;
            }
          }
          body {
            font-family: 'DM Sans', system-ui, sans-serif;
            color: var(--text-color);
            margin: 0;
            padding: 40px 20px;
            background-color: var(--bg-color);
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: var(--card-bg);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--border-color);
          }
          h1 {
            font-family: 'Playfair Display', serif;
            color: var(--text-color);
            font-size: 36px;
            margin-top: 0;
            margin-bottom: 12px;
            font-weight: 800;
            letter-spacing: -0.5px;
          }
          p.desc {
            color: var(--muted-text);
            margin-bottom: 30px;
            line-height: 1.6;
            font-size: 16px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background-color: var(--hover-bg);
            text-align: left;
            padding: 14px 16px;
            font-weight: 600;
            color: var(--text-color);
            border-bottom: 2px solid var(--primary-color);
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td {
            padding: 16px;
            border-bottom: 1px solid var(--border-color);
            color: var(--muted-text);
            font-size: 15px;
          }
          tr:hover td {
            background-color: var(--hover-bg);
          }
          a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.2s;
          }
          a:hover {
            opacity: 0.8;
            text-decoration: underline;
          }
          .badge {
            background-color: var(--primary-color);
            color: white;
            padding: 4px 10px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 8px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Profile Bio Generator</h1>
          <p class="desc">
            This is an XML Sitemap designed for Search Engines. It contains <span class="badge"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</span>
          </p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
