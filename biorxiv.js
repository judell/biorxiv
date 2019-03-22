function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

const groups = {
  '6gPr7Xd3': 'Demo Peerage of Science',
  'yr4Z4ve8': 'Demo EMBOJournal',
}

const groupCounts = {
  '6gPr7Xd3': 0,
  'yr4Z4ve8': 0,
}

async function run() {
  await delay(.5)
  const params = {
    url: location.href
  }
  const data = await hlib.search(params)
  const allAnnos = data[0]
  const allReplies = data[1]
  let groupAnnos = 0
  let groupReplies = 0
  allAnnos.concat(allReplies).forEach (a => {
    if (a.group === '6gPr7Xd3' || a.group === 'yr4Z4ve8') {
      const anno = hlib.parseAnnotation(a)
      groupCounts[a.group]++
      if (anno.isReply) {
        groupReplies++
      } else {
        groupAnnos++
      }
    }     
  })

  const counterElement = hlib.getById('ccountx')
  counterElement.innerHTML = `<span style="cursor:pointer" data-hypothesis-trigger>review groups: 2, annos: ${groupAnnos}, replies ${groupReplies}</span>`
    
  let reviewGroupsWithAnnotations = ''
  Object.keys(groups).forEach ( group => {
    if ( groupCounts[group]) {
      reviewGroupsWithAnnotations += `
        <div><a class="reviewGroup">${groups[group]}</a></div>`
    }
  })
  const newToolHtml = `
      <div class="pane-content">
        <div class="minipanel-dialog-wrapper">
          <div class="minipanel-dialog-link-link">
            <a  title="Reviews"><i class="icon-globe"></i> 
              <span class="title">Reviews</span>
            </a>
          <div class="hypothesisReviewGroups">
            ${reviewGroupsWithAnnotations} 
          </div>
        </div>  
      </div>`

  const existingToolElement = document.querySelector('.pane-biorxiv-cite-tool')

  existingToolElement.innerHTML = newToolHtml

  const embedScript = document.createElement('script')
  embedScript.setAttribute('src','https://hypothes.is/embed.js')
  document.head.appendChild(embedScript);  
  
}

run()