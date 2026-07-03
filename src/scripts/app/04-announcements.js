  /* ============== ANNOUNCEMENTS ============== */
  // EDIT THIS ARRAY to post new things to your students.
  // Then re-share the HTML file with them. They'll see updates on next open.
  //
  // Kinds: 'note', 'assignment', 'video', 'link', 'doc'
  //
  // For videos: use 'youtubeId' field (the part after v= in the URL)
  // For Google Docs/Sheets/Slides: use kind 'doc' and put the share URL in 'googleDocUrl'
  //   IMPORTANT: The doc must be set to "Anyone with the link can view"
  // For other embeds: use 'embedUrl' (any iframe-friendly URL)
  const ANNOUNCEMENTS = [
    // Announcements go here when you want to post one to students.
    // Either edit this array directly, or use the teacher-mode "Post announcement" UI
    // (?teacher in the URL) which writes to localStorage and gives you JSON to paste here.
    //
    // Example structures (uncomment and edit when ready to post):
    //
    // {
    //   kind: 'note',
    //   title: 'Welcome back, <em>clase</em>',
    //   body: 'Glad to see everyone this semester. Earn Lucas in the drills and games.',
    //   date: 'Aug 28'
    // },
    // {
    //   kind: 'assignment',
    //   title: 'Verb drill: <em>presente</em>',
    //   body: 'Complete one Present-tense drill this week. Aim for 15/20 or higher.',
    //   due: 'Due Fri',
    //   date: 'Sep 2',
    //   link: '#/verbos'
    // },
    // {
    //   kind: 'video',
    //   title: 'Pronunciation: <em>rolling R</em>',
    //   body: 'A quick 3-minute guide.',
    //   youtubeId: 'jUTZSnDXPP8',
    //   date: 'Sep 5'
    // },
    // {
    //   kind: 'doc',
    //   title: 'Unit 1 <em>study guide</em>',
    //   body: 'Review sheet for the upcoming exam.',
    //   googleDocUrl: 'https://docs.google.com/document/d/YOUR_DOC_ID/edit',
    //   date: 'Sep 10'
    // }
  ];

  // Convert a Google Docs/Sheets/Slides share URL to an embeddable preview URL.
  // Works for: docs, sheets, slides, drawings, and Drive PDFs.
  function googleDocToEmbed(url) {
    if (!url) return null;
    // Match common Google formats and extract the document ID
    const patterns = [
      { re: /docs\.google\.com\/document\/d\/([a-zA-Z0-9_-]+)/, embed: id => `https://docs.google.com/document/d/${id}/preview` },
      { re: /docs\.google\.com\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/, embed: id => `https://docs.google.com/spreadsheets/d/${id}/preview` },
      { re: /docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)/, embed: id => `https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false&delayms=3000` },
      { re: /docs\.google\.com\/forms\/d\/([a-zA-Z0-9_-]+)/, embed: id => `https://docs.google.com/forms/d/${id}/viewform?embedded=true` },
      { re: /docs\.google\.com\/drawings\/d\/([a-zA-Z0-9_-]+)/, embed: id => `https://docs.google.com/drawings/d/${id}/preview` },
      { re: /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/, embed: id => `https://drive.google.com/file/d/${id}/preview` }
    ];
    for (const { re, embed } of patterns) {
      const m = url.match(re);
      if (m) return embed(m[1]);
    }
    // If it's already a preview/embed URL, use as-is
    if (url.includes('/preview') || url.includes('embedded=true') || url.includes('/embed')) return url;
    return null;
  }

  function renderAvisos() {
    const grid = document.getElementById('avisosGrid');
    if (!grid) return;
    // Combine baked-in + teacher-posted (saved per device)
    const teacherPosted = JSON.parse(localStorage.getItem('tertulia_teacher_avisos') || '[]');
    const all = [...teacherPosted, ...ANNOUNCEMENTS];
    if (all.length === 0) {
      grid.innerHTML = '<p style="color: var(--ink-soft); padding: 24px 0;">No announcements yet. Check back soon.</p>';
      return;
    }
    const tagLabels = { note: 'Note', assignment: 'Assignment', video: 'Video', link: 'Resource', doc: 'Document' };
    grid.innerHTML = all.map(a => {
      // Build embed if applicable
      let embedHtml = '';
      if (a.youtubeId) {
        embedHtml = `<div class="aviso-video-embed"><iframe src="https://www.youtube.com/embed/${a.youtubeId}" allowfullscreen></iframe></div>`;
      } else if (a.googleDocUrl || (a.kind === 'doc' && a.link)) {
        const embedUrl = googleDocToEmbed(a.googleDocUrl || a.link);
        if (embedUrl) {
          embedHtml = `<div class="aviso-doc-embed"><iframe src="${embedUrl}" allowfullscreen></iframe></div>`;
        }
      } else if (a.embedUrl) {
        embedHtml = `<div class="aviso-doc-embed"><iframe src="${a.embedUrl}" allowfullscreen></iframe></div>`;
      }

      // Build action buttons
      const primaryLink = a.link || a.googleDocUrl;
      const linkHtml = primaryLink
        ? `<a class="aviso-link" href="${primaryLink}" ${primaryLink.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${a.linkText || (primaryLink.startsWith('#') ? 'Go →' : 'Open in new tab →')}</a>`
        : '';
      const dueHtml = a.due ? `<span class="aviso-due">${a.due}</span>` : '';

      return `
        <div class="aviso ${a.kind}">
          <div class="aviso-meta">
            <span class="aviso-tag">${tagLabels[a.kind] || a.kind}</span>
            <span class="aviso-date">${a.date || ''}</span>
          </div>
          ${embedHtml}
          <h3>${a.title}</h3>
          <p>${a.body}</p>
          <div class="aviso-actions">${linkHtml}${dueHtml}</div>
        </div>
      `;
    }).join('');
  }

